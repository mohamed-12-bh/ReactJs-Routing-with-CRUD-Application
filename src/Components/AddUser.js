import React, { Component } from "react";
import axios from "axios";
class AddUser extends Component {
  state = {
    user: [
      {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      },
    ],
  };
  changeHandle = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  addUser = async (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website,
    };
    await axios.post(`http://localhost:3003/users`, user);
    this.props.history.push("/");
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container my-4">
        <div className="w-75 mx-auto shadow p-5 ">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={this.addUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg "
                placeholder="Enter Your Name"
                name="name"
                value={user.name}
                onChange={this.changeHandle}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={user.username}
                onChange={this.changeHandle}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={user.email}
                onChange={this.changeHandle}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={user.phone}
                onChange={this.changeHandle}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={user.website}
                onChange={this.changeHandle}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddUser;
