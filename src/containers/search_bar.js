import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //Go fetch weather data
  }

  render() {
    return (
      <div className="col-sm-12">
        <form
          className="input-group"
          onSubmit={this.onFormSubmit}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Get a five-day forecast"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span
            className="input-group-btn"
          >
            <button
              className="btn btn-secondary"
              type="submit"
            >
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }
}
