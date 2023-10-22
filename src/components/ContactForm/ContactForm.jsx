import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import {FcAdvertising} from "react-icons/fc";


export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
    // Metoda odnowienia pola input
    handleChange = event => {
      const { name, value } = event.currentTarget;
      this.setState({ [name]: value });
    };
    // Sposób przesyłania formularzy
    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.resetForm();
    };
  
    //Sposób czyszczenia pól formularza
    resetForm = () => {
      this.setState({ name: '', number: '' });
    };
  
    render() {
      return (
        <form className={css.form_wrapper} onSubmit={this.handleSubmit}>
          <FcAdvertising size={'35px'} className={css.icon} />
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.button_add} type="submit">
            Add contact
          </button>
        </form>
      );
    }
  }
  
  ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };