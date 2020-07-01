import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Users extends Component {
  state = {
    user: {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    },
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get("http://localhost:3003/users/" + id).then((res) => {
      this.setState({
        user: res.data,
      });
    });
  }
  render() {
    return (
      <div className="container my-4">
        <Link className="btn btn-secondary my-2" to="/">
          back to Home
        </Link>
        <h1 className="display-4">User Id: {this.state.user.id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name:{this.state.user.name}</li>
          <li className="list-group-item">
            username:{this.state.user.username}
          </li>
          <li className="list-group-item">email:{this.state.user.email}</li>
          <li className="list-group-item">phone:{this.state.user.phone}</li>
          <li className="list-group-item">website:{this.state.user.website}</li>
        </ul>
      </div>
    );
  }
}
export default Users;
