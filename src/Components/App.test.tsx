import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {App} from './App';

describe('App', () => {
  it('should calculate life path number', async () => {
    render(<App />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, {target: {value: '25.02.2022'}});
    fireEvent.blur(input);

    expect(await screen.findByText(/15 ➞ 6/i)).toBeInTheDocument();
  });
});
