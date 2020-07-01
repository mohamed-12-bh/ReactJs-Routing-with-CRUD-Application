import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const result = await axios.get("http://localhost:3003/users");
    this.setState({
      users: result.data,
    });
    console.log("users:", this.state.users);
  }

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    document.location.reload(true);
  };
  render() {
    return (
      <div className="container ">
        <div className="py-4">
          <h1>Home</h1>
          <table className="table shadow ">
            <thead className="thead-dark">
              <tr>
                <th scope="col 2">#</th>
                <th scope="col 2">Name</th>
                <th scope="col 2">User Name</th>
                <th scope="col 2">Email</th>
                <th scope="col 2">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, i) => (
                <tr key={user.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={"/users/" + user.id}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-danger"
                      onClick={() => this.deleteUser(user.id)}
                      to="#"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Home;
