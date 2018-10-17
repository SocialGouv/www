import React from "react";
const Doc = () => (
  <div id="documentation" className="documentation">
    <nav className="side-pane">
      <ul className="side-pane__menu">
        <li className="side-pane__title">
          <h3>Lorem Ipsum</h3>
        </li>
        <li className="side-pane__dropdown unfolded active">
          <a className="side-pane__link">Menu #1</a>
          <ul className="side-pane__submenu">
            <li>
              <a className="side-pane__sublink" href="#">
                This is a sub-menu #1
              </a>
            </li>
            <li>
              <a className="side-pane__sublink" href="#">
                Sub-menu #2
              </a>
            </li>
            <li className="active">
              <a className="side-pane__sublink" href="#">
                Another sub-menu #3
              </a>
            </li>
            <li>
              <a className="side-pane__sublink" href="#">
                Sub-menu #4
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="side-pane__link">Menu #2</a>
        </li>
        <li>
          <a className="side-pane__link">Menu #3</a>
        </li>
      </ul>
    </nav>
    <div className="main-pane">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <pre>
        <code>TODO</code>
      </pre>
    </div>
  </div>
);

export default Doc;
