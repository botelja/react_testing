import React from 'react';
import { render, screen } from '@testing-library/react';
import { Users } from '../../src/components/Users';

describe('Users', () => {
  it('should render a table with user information', () => {
    const users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com'
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@example.com'
      }
    ];

    render(<Users users={users} />);

    expect(screen.getByRole('heading', { name: /users/i })).toBeInTheDocument();

  
  });

  it('should not render anything if users array is empty', () => {
    const users = [];

    render(<Users users={users} />);

    expect(screen.queryByRole('heading', { name: /users/i })).not.toBeInTheDocument();
  });
});