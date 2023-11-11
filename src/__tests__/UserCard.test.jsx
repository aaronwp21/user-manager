import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Home from '@/pages';
import UserCard from '../components/UserCard';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const cardData = {
  name: 'Test Name',
  email: 'random@email.com',
  index: 0,
};

test('The user card renders', async () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <UserCard
        name={cardData.name}
        email={cardData.email}
        index={cardData.index}
      />
    </Provider>,
  );

  expect(getByText('Test Name')).toBeInTheDocument();
  expect(getByText('random@email.com')).toBeInTheDocument();
  expect(getByAltText('Avatar')).toBeInTheDocument();
  expect(getByAltText('Delete')).toBeInTheDocument();
});

test('The user card can be deleted', async () => {
  const { getByText, getByAltText, getByPlaceholderText, getByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  await userEvent.click(getByText('New User'));
  await userEvent.type(getByPlaceholderText('Name...'), 'Test Name');
  await userEvent.type(getByPlaceholderText('Email...'), 'random@email.com');
  await userEvent.click(getByText('Submit'));
  await userEvent.click(getByAltText('Delete'));

  expect(getByTestId('users-container').firstChild).not.toBeInTheDocument()
});
