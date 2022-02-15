import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './PhoneBook.module.css';

class PhoneBook extends Component {
  state = {
    name: ''
      };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '' });
    }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    
    return (
        <form className={s.PhoneBookForm}
            onSubmit={this.handleSubmit}
        >
            <label
                
            >
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default PhoneBook;