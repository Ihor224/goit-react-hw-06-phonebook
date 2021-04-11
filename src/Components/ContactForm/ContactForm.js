import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as itemsActions from '../../redux/contacts/items-actions';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.item}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </label>

        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </label>

        <button
          type="submit"
          disabled={!this.state.name || !this.state.number}
          className={s.btn}
        >
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(itemsActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
