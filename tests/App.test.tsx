import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../src/App';


describe('App', () => {
  test('renders header', () => {
    render(<App />);
    const headerElement = screen.getByText(/React testing playground/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('creates a new user', async () => {
    render(<App />);
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole('button', { name: /Create/i });

    fireEvent.change(firstNameInput, { target: { value: 'Jane' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'janedoe@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(firstNameInput).toHaveValue('Jane');
      expect(lastNameInput).toHaveValue('Doe');
      expect(emailInput).toHaveValue('janedoe@example.com');
    });
  });

  test('fetches all users', async () => {
    render(<App />);
    const fetchButton = screen.getByRole('button', { name: /get all users/i });

    fireEvent.click(fetchButton);

    await waitFor(() => {
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText(/alice@example.com/i)).toBeInTheDocument();
    });
  });
});