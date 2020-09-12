import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.alert("please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
      console.log("reached");
    }
  };
  //   onClear = (e) => {
  //     e.preventDefault();
  //     this.props.clearUsers();
  //   };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            name="text"
            placeholder="search"
            // ref="text"
            value={this.state.text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
          {this.props.showClear && (
            <button
              className="btn btn-dark btn-block"
              style={{ display: "block" }}
              onClick={this.props.clearUsers}
            >
              clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
