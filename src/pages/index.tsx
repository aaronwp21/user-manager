import React, { useState } from 'react';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import UserForm from '@/components/UserForm';

export default function Home() {
  const [newUserClicked, setNewUserClicked] = useState(false);
  const users = useSelector((state: RootState) => state.user.users);

  return (
    <main className="h-screen flex items-center justify-center px-4 min-w-[400px]">
      <div className="bg-sky-500 h-[50vh] w-[50%] min-w-[370px] min-h-[400px] rounded-lg flex items-center justify-center">
        <div>
          <button
            className={`bg-purple-600 px-4 py-2 rounded-md text-xl ${
              users.length === 0 && newUserClicked === false
                ? 'inline-block'
                : 'hidden'
            }`}
            onClick={() => setNewUserClicked(true)}
          >
            New User
          </button>
          {newUserClicked ? <UserForm /> : ''}
        </div>
      </div>
    </main>
  );
}
