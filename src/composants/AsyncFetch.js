import PropTypes from "prop-types";
import React from "react";

class AsyncFetch extends React.Component {
  state = {
    result: null,
    status: "idle",
  };

  mounted = false;

  componentDidMount() {
    this.mounted = true;
    if (this.props.autoFetch) {
      this.fetch();
    }
  }
  // warning @lionelb
  // passing and arrow function in render
  // might turn this test useless
  componentDidUpdate(prevProps) {
    if (this.props.fetch !== prevProps.fetch) {
      this.fetch();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  fetch = (args) => {
    this.setState(
      {
        status: "loading",
      },
      () => {
        this.props
          .fetch(args)
          .then((result) => {
            this.mounted &&
              this.setState({
                result,
                status: "success",
              });
          })
          .catch((e) => {
            this.mounted &&
              this.setState({
                result: e.message,
                status: "error",
              });
          });
      }
    );
  };

  clear = () => {
    this.setState({
      result: null,
    });
  };

  render() {
    return this.props.render({
      ...this.state,
      clear: this.clear,
      fetch: this.fetch,
    });
  }
}

AsyncFetch.propTypes = {
  autoFetch: PropTypes.bool,
  // the fetch call function
  fetch: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

AsyncFetch.defaultProps = {
  autoFetch: true,
};

export default AsyncFetch;
