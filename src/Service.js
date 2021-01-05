import React, { Component } from "react";
import Singleservice from "./Singleservice";

class Service extends Component {
  state = {
    loading: true,
    persons: null
  };
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const user = await fetch(url);
    const data = await user.json();
    this.setState({ persons: data, loading: false });
  }

  render() {
    return (
      <div className="service">
        <div>
          {this.state.loading || !this.state.persons
            ? "Loading . . ."
            : this.state.persons.map((pt, id) => (
                <Singleservice key={id} pt={pt} />
              ))}
        </div>
      </div>
    );
  }
}

export default Service;
