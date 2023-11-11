import React, { useState } from 'react';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import UserForm from '@/components/UserForm';
import UserCard from '@/components/UserCard';

export default function Home() {
  const [newUserClicked, setNewUserClicked] = useState(false);
  const users = useSelector((state: RootState) => state.user.users);

  console.log(users);

  return (
    <main className="h-screen flex items-center justify-center px-4 min-w-[400px]">
      <div className="flex flex-col items-center gap-4">
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
        <div>{newUserClicked ? <UserForm /> : ''}</div>
        <div className="bg-sky-500 h-[50vh] w-[50vw] min-w-[370px] min-h-[400px] rounded-lg flex items-center justify-center">
          <div className="flex flex-col gap-4" data-testid="users-container">
            {users.map((user, i) => (
              <UserCard key={i} name={user.name} email={user.email} index={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
