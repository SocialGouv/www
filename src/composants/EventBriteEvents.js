import React from "react";
import PropTypes from "prop-types";

const getEventBriteUrl = ({ token, organizerId }) =>
  `https://www.eventbriteapi.com/v3/events/search/?token=${token}&organizer.id=${organizerId}`;

const fetchEventBriteEvents = ({ token, organizerId }) =>
  fetch(getEventBriteUrl({ token, organizerId })).then(r => r.json());

const EventBriteTable = ({ events }) => (
  <table className="table" id="evenement-table">
    <thead>
      <tr>
        <th width="150">Date</th>
        <th>Événement</th>
        <th width="150">Inscription</th>
      </tr>
    </thead>
    <tbody>
      {(events === null && (
        <tr>
          <td colSpan={3}>Chargement en cours...</td>
        </tr>
      )) ||
        null}
      {(events &&
        events.length === 0 && (
          <tr>
            <td colSpan={3}>
              Aucun événement n&apos;est prévu pour le moment.
            </td>
          </tr>
        )) ||
        null}
      {events &&
        events.map(event => (
          <tr key={event.id}>
            <td>{event.start.local}</td>
            <td>{event.name.text}</td>
            <td>
              <a
                className="button"
                href="#evenement-table"
                onClick={() => window.open(event.url)}
              >
                Inscription
              </a>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);

EventBriteTable.propTypes = {
  events: PropTypes.arrayFrom(PropTypes.object)
};

class EventBriteEvents extends React.Component {
  static propTypes = {
    token: PropTypes.string,
    organizerId: PropTypes.string
  };

  state = {
    status: "loading",
    events: null
  };
  componentDidMount() {
    const { token, organizerId } = this.props;
    fetchEventBriteEvents({ token, organizerId })
      .then(res => {
        this.setState({ events: res.events });
      })
      .catch(() => {
        this.setState({ events: [] });
      });
  }
  render() {
    return <EventBriteTable events={this.state.events} />;
  }
}

export default EventBriteEvents;
