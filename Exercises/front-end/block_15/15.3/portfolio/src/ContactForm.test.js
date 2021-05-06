import React from 'react';
import * as emailjs from 'emailjs-com';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContactForm from './ContactForm';

jest.mock('emailjs-com', () => ({
  send: jest.fn(() => Promise.resolve())}));

afterEach(() => jest.clearAllMocks());

describe('when the form is filled out correctly', () => {
  test('sends the email', async () => {
    const testData = { from_name: 'foo', reply_to: 'foo@email.com', message_html: 'bar' };
    const { container, findByLabelText, findByText } = render(<ContactForm />);
    const nameField = await findByLabelText(/Nome/i);
    const emailField = await findByLabelText(/E-mail/i);
    const messageField = await findByLabelText(/Mensagem de contato/i);

    fireEvent.change(nameField, { target: { value: testData.from_name } });
    fireEvent.change(emailField, { target: { value: testData.reply_to } });
    fireEvent.change(messageField, { target: { value: testData.message_html } });

    expect(nameField.value).toEqual(testData.from_name);
    expect(emailField.value).toEqual(testData.reply_to);
    expect(messageField.value).toEqual(testData.message_html);

    fireEvent.click(await findByText(/Enviar/i));

    expect(await emailjs.send)
      .toHaveBeenCalledWith('gmail', 'template_example', testData, 'user_tEStkEy');

    expect(container.querySelector('.error-message')).toBeNull();

    expect(nameField.value).toEqual('');
    expect(emailField.value).toEqual('');
    expect(messageField.value).toEqual('');
  });
});

describe('when the form has fields with errors', () => {
  test('shows error messages', async () => {
    const { findByText } = render(<ContactForm />);

    fireEvent.click(await findByText(/Enviar/i));

    expect(await emailjs.send).not.toHaveBeenCalled();

    expect(await findByText(/O campo "Nome" é obrigatório./i)).toBeInTheDocument();
    expect(await findByText(/E-mail inválido./i)).toBeInTheDocument();
    expect(await findByText(/O campo "Mensagem de contato" é obrigatório./i)).toBeInTheDocument();
  });
});

describe('when the emailjs send returns an error', () => {
  test('shows error message and keep fields values', async () => {
    emailjs.send.mockImplementation(() => Promise.reject());

    const testData = { from_name: 'foo', reply_to: 'foo@email.com', message_html: 'bar' };
    const { findByLabelText, findByText } = render(<ContactForm />);
    const nameField = await findByLabelText(/Nome/i);
    const emailField = await findByLabelText(/E-mail/i);
    const messageField = await findByLabelText(/Mensagem de contato/i);

    fireEvent.change(nameField, { target: { value: testData.from_name } });
    fireEvent.change(emailField, { target: { value: testData.reply_to } });
    fireEvent.change(messageField, { target: { value: testData.message_html } });

    fireEvent.click(await findByText(/Enviar/i));

    expect(await emailjs.send)
      .toHaveBeenCalledWith('gmail', 'template_example', testData, 'user_tEStkEy');

    expect(await findByText(/Ocorreu um erro durante o envio. Tente novamente./i))
      .toBeInTheDocument();

    expect(nameField.value).toEqual(testData.from_name);
    expect(emailField.value).toEqual(testData.reply_to);
    expect(messageField.value).toEqual(testData.message_html);
  });
});
