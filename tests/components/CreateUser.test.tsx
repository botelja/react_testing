import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateUser from '../../src/components/CreateUser';
import {vi} from 'vitest'


describe('CreateUser component', () => {
  it('renders a form with three input fields', () => {
    const onChangeForm = vi.fn();
    const createUser = vi.fn();
    const { getByLabelText, getByRole } = render(
      <CreateUser onChangeForm={onChangeForm} createUser={createUser} />
    );

    expect(getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByRole("button", {name: /Create/i})).toBeInTheDocument();
  });

  it('calls the onChangeForm function when input fields change', () => {
    const onChangeForm = vi.fn();
    const createUser = vi.fn();
    const { getByLabelText } = render(
      <CreateUser onChangeForm={onChangeForm} createUser={createUser} />
    );

    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/Email/i);

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    expect(onChangeForm).toHaveBeenCalledTimes(3);
  });

  it('calls the createUser function when the Create button is clicked', () => {
    const onChangeForm = vi.fn();
    const createUser = vi.fn();
    const { getByRole } = render(
      <CreateUser onChangeForm={onChangeForm} createUser={createUser} />
    );

    const createButton = getByRole("button", {name: /Create/i});

    fireEvent.click(createButton);

    expect(createUser).toHaveBeenCalledTimes(1);
  });
});