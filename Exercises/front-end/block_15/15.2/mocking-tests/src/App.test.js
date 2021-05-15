import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  const { findByText } = render(<App />);
  await findByText('Whiteboards... are remarkable.')
});
