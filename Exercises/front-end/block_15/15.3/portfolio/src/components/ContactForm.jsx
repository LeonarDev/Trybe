// https://ichi.pro/pt/envie-e-mails-do-seu-aplicativo-react-com-emailjs-236048868858903

import React from 'react';
import * as emailjs from 'emailjs-com';

import FormErrors from './FormErrors';

import './ContactForm.css';

class ContactForm extends React.Component {
  static validateField(field, value) {
    switch (field) {
      case 'name':
        return ContactForm.validatePresence('Nome', value);
      case 'message':
        return ContactForm.validatePresence('Mensagem de contato', value);
      case 'email': {
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i);
        return isValid ? '' : 'E-mail inválido.';
      }
      default:
        return '';
    }
  }

  static validatePresence(fieldName, value) {
    return value.trim() ? '' : `O campo "${fieldName}" é obrigatório.`;
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: { name: '', email: '', message: '' },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.validateForm()) return;

    const { name, email, message } = this.state;
    this.sendEmail({ message_html: message, from_name: name, reply_to: email });
  }

  validateForm() {
    let isValid = true;
    const errors = {};
    const { state } = this;

    Object.keys(state.formErrors).forEach((field) => {
      const errorMessage = ContactForm.validateField(field, state[field]);
      errors[field] = errorMessage;

      if (errorMessage) isValid = false;
    });

    this.setState({ formErrors: errors });

    return isValid;
  }

  sendEmail(data) {
    const {
      REACT_APP_EMAIL_JS_ID = "user_kGXchE3sjYnX10vywgtcu",
      REACT_APP_EMAIL_JS_SERVICE = "email_para_portfolio",
      REACT_APP_EMAIL_JS_TEMPLATE = "template_r64dmyn",
    } = process.env;

    emailjs
      .send(REACT_APP_EMAIL_JS_SERVICE, REACT_APP_EMAIL_JS_TEMPLATE, data, REACT_APP_EMAIL_JS_ID)
      .then(() => this.setState({ name: '', email: '', message: '' }))
      .catch(() => this.setState((previousState) => ({
        formErrors: {
          ...previousState.formErrors,
          unexpected: 'Ocorreu um erro durante o envio. Tente novamente.',
        },
      })));
  }

  render() {
    const {
      name, email, message, formErrors,
    } = this.state;

    return (
      <section id="contact">
        <h1>Entre em contato</h1>

        <FormErrors formErrors={formErrors} />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={this.handleInputChange}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleInputChange}
          />

          <label htmlFor="message">Mensagem de contato</label>
          <textarea
            id="message"
            name="message"
            rows="10"
            value={message}
            onChange={this.handleInputChange}
          />

          <input type="submit" value="Enviar" />
        </form>
      </section>
    );
  }
}

export default ContactForm;
