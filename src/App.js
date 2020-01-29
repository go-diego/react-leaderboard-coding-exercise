import React, { Component } from "react";
import Age from "./components/Age";
import Name from "./components/Name";
import Points from "./components/Points";
import Rank from "./components/Rank";
import Table from "./components/Table";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      sortBy: ""
    };
    this.handleClickAge = this.handleClickAge.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickPoints = this.handleClickPoints.bind(this);
    this.handleClickRank = this.handleClickRank.bind(this);
  }

  // FIXME: Tests wont pass using event.target.name although app works fine
  handleClickAge(event) {
    //this.setState({ sortBy: event.target.name });
    this.setState({ sortBy: "age" });
  }

  handleClickName(event) {
    //this.setState({ sortBy: event.target.name });
    this.setState({ sortBy: "name" });
  }

  handleClickPoints(event) {
    //this.setState({ sortBy: event.target.name });
    this.setState({ sortBy: "points" });
  }

  handleClickRank(event) {
    //this.setState({ sortBy: event.target.name });
    this.setState({ sortBy: "rank" });
  }

  render() {
    const { sortBy } = this.state;
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age onClick={this.handleClickAge} />
          <Name onClick={this.handleClickName} />
          <Points onClick={this.handleClickPoints} />
          <Rank onClick={this.handleClickRank} />
          <Table sortBy={sortBy} />
        </div>
      </div>
    );
  }
}
