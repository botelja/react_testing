import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  DisplayBoard  from '../../src/components/DisplayBoard';
import {vi} from 'vitest'


describe('DisplayBoard component', () => {
  const mockGetAllUsers = vi.fn();
  const mockNumberOfUsers = 5;

  it('should render with correct number of users and call getAllUsers when button is clicked', () => {
    const { getByText, getByTestId } = render(
      <DisplayBoard numberOfUsers={mockNumberOfUsers} getAllUsers={mockGetAllUsers} />
    );

    expect(getByText('Users Created')).toBeInTheDocument();
    expect(getByTestId('numberOfUsers')).toHaveTextContent(mockNumberOfUsers.toString());
    
    const getAllUsersButton = getByText('Get all Users');
    fireEvent.click(getAllUsersButton);

    expect(mockGetAllUsers).toHaveBeenCalled();
  });
});