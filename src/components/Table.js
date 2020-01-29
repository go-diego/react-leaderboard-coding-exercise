import React, { Component } from "react";
import { usersJSON } from "../data";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersJSON
    };
  }

  componentWillReceiveProps(nextProps) {
    let sortedUsers = [];
    const users = [...this.state.users];
    const { sortBy } = nextProps;
    switch (sortBy) {
      case "age":
        sortedUsers = users.sort(this.compareByAge);
        break;
      case "name":
        sortedUsers = users.sort(this.compareByName);
        break;
      case "points":
        sortedUsers = users.sort(this.compareByPoints);
        break;
      case "rank":
        sortedUsers = users.sort(this.compareByRank);
        break;
      default:
        sortedUsers = users;
    }
    this.setState({ users: sortedUsers });
  }

  // complete the comparators
  compareByAge(a, b) {
    return a.age - b.age;
  }

  compareByName(a, b) {
    let comparison = 0;
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      comparison = 1;
    }
    return comparison;
  }

  compareByPoints(a, b) {
    return a.points - b.points;
  }

  compareByRank(a, b) {
    return a.rank - b.rank;
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr key="head">
              <th>Age</th>
              <th>Name</th>
              <th>Points</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.age}</td>
                  <td>{user.name}</td>
                  <td>{user.points}</td>
                  <td>{user.rank}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
