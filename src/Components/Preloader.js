import React from "react";

export default class Preloader extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.data_received ? "preloader invisble" : "preloader"
        }
      >
        <div className="bubbles">
          <span />
          <span id="bubble2" />
          <span id="bubble3" />
        </div>
      </div>
    );
  }
}
