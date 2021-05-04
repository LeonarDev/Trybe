import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('alterando o valor dos campos e testando o valor guardado', () => {
  const { getByTestId } = render(<App />);
  const inputNome = getByTestId('input-nome');
  const inputEmail = getByTestId('input-email');
  
  expect(inputNome).toHaveValue('');

  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
  expect(inputNome).toHaveValue('Estudante da Trybe');

  expect(inputEmail).toHaveValue('');

  fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});
