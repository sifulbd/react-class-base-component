import React, { Component } from "react";

class Singleservice extends Component {
  render() {
    return (
      <div className="hero">
        <>
          <h4 style={{ marginBottom: 0 }}>{this.props.pt.name}</h4>
          <p>{this.props.pt.email}</p> <br />
        </>
      </div>
    );
  }
}

export default Singleservice;
