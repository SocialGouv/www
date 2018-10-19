import React from "react";
import PropTypes from "prop-types";

const Notification = ({ className, children }) => (
  <div className={`notification closable ${className}`}>
    {children}
    <button className="close" aria-label="Fermer">
      <svg className="icon icon-cross">
        <use xlinkHref="#icon-cross" />
      </svg>
    </button>
  </div>
);

Notification.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

const Notifications = () => (
  <section className="notifications">
    <div className="container">
      <Notification>The princess is in another castle.</Notification>
      <Notification className="success">Mission complete!</Notification>
      <Notification className="warning">
        All you base are belong to us.
      </Notification>
      <Notification className="error">Game over.</Notification>
    </div>
  </section>
);

export default Notifications;
