import React from 'react';
import { render, waitFor } from '@testing-library/react';
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

  const { getByText } = render(<App />);
  await waitFor(() => getByText('Whiteboards... are remarkable.'))
});
