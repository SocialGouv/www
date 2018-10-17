import React from "react";
const Note = ({ className, children }) => (
  <div className={`notification full-width ${className}`}>{children}</div>
);

const Notes = () => (
  <div>
    <Note>Ceci est une note de service.</Note>
    <Note className="warning closable">Ceci est une note de service.</Note>
    <div className="notification full-width">
      Ceci est une note de service <em>fermable</em>.<button
        className="close"
        aria-label="Fermer"
      >
        <svg className="icon icon-cross">
          <use xlinkHref="#icon-cross" />
        </svg>
      </button>
    </div>
  </div>
);

export default Notes;
