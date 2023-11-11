import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

import UserForm from '../components/UserForm';
import Home from '@/pages'

import { store } from '@/redux/store';
import { Provider } from 'react-redux';

test('Loads form on new user button click', async () => {
  render(<Provider store={store}><Home /></Provider>)
  
  await userEvent.click(screen.getByText('New User'))

  expect(screen.getByTestId('user-form-element')).toHaveTextContent('Submit')
})