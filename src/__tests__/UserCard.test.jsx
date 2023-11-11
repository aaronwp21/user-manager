import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import UserCard from '../components/UserCard';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const cardData = {
  name: 'Test Name',
  email: 'random@email.com',
  index: 0,
};

test('The user card renders', async () => {
  const { getByText } = render(
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
});
