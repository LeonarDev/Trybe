import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const buttonAdd = getByText('Adicionar');
    
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');

  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const buttonAdd = queryByText('Adicionar');

    fireEvent.change(inputTask, { target: { value: 'Beber água!' } });
    expect(queryByText('Beber água!')).not.toBeInTheDocument();

    fireEvent.click(buttonAdd);
    expect(queryByText('Beber água!')).toBeInTheDocument();
  });
});
