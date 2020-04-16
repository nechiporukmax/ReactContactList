import React, { Component } from "react";
import "./AddContact.css";
import { Link } from "react-router-dom";

import FontAwesome from "react-fontawesome";

export default class AddContact extends Component {
  state = {
    name: "",
    avatar: "",
    email: "",
    phone: "",
    address: "",
    gender: "men",
    favorite: null
  };
  getFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  };
  getGender = event => {
    console.log(event.target.value);
    this.setState({
      gender: event.target.value
    });
  };
  getName = event => {
    this.setState({
      name: event.target.value
    });
  };
  getEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  getAvatar = event => {
    this.setState({
      avatar: event.target.value
    });
  };
  getaddress = event => {
    this.setState({
      address: event.target.value
    });
  };
  getPhone = event => {
    this.setState({
      phone: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.name);
    this.props.onAddContact(
      this.state.name,
      this.state.address,
      this.state.phone,
      this.state.avatar,
      this.state.email,
      this.state.gender,
      this.state.favorite
    );
    this.setState({
      name: "",
      avatar: "",
      email: "",
      phone: "",
      address: "",
      favorite: null
    });
    // console.log(
    //   `Name: ${this.state.name}\nAdderss: ${this.state.address}\nPhone: ${this.state.phone}\nAvatar: ${this.state.avatar}\nEmail: ${this.state.email}`
    // );
  };
  render() {
    let favoriteClass = ["fa-star-o", "star", "col-md-10"];
    if (this.state.favorite) {
      favoriteClass = ["fa-star", "star", "col-md-10"];
    }
    return (
      <div>
        {/* {this.state.name}
        {this.state.email}
        {this.state.phone}
        {this.state.address}
        {this.state.avatar}
        {this.state.gender} */}

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getName}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getaddress}
                value={this.state.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                onChange={this.getPhone}
                value={this.state.phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Avatar">Avatar</label>
              <input
                type="number"
                min="1"
                max="99"
                className="form-control"
                onChange={this.getAvatar}
                value={this.state.avatar}
              />
            </div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.getEmail}
              value={this.state.email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group row">
            <label className="control-label col-sm-1">
              Gender <span className="text-danger"></span>
            </label>
            <div className="col-md-11 col-sm-11">
              <label>
                <input
                  name="gender"
                  type="radio"
                  value="men"
                  defaultChecked
                  onChange={this.getGender}
                />
                Male
              </label>
                 
              <label>
                <input
                  name="gender"
                  type="radio"
                  value="women"
                  onChange={this.getGender}
                />
                Female
              </label>
            </div>
          </div>
          <label className="control-label col-sm-1 favorite">Favorite</label>
          <FontAwesome
            className={favoriteClass.join(" ")}
            name="star"
            size="2x"
            onClick={this.getFavorite}
          />

          <button type="submit" className="btn btn-primary col-12">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
