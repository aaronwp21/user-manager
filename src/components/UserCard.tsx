import React from 'react';
import Image from 'next/image';

import { useDispatch } from 'react-redux';
import { removeUser } from '@/redux/features/user/userSlice';

type UserCardProps = {
  name: string;
  email: string;
  index: number;
};

function UserCard({ name, email, index }: UserCardProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 border-2 p-2">
      <Image
        src={'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'}
        alt="Avatar"
        height={50}
        width={50}
      />
      <p>{name}</p>
      <p>{email}</p>
      <Image
        src={'https://cdn-icons-png.flaticon.com/512/3405/3405244.png'}
        alt="Delete"
        height={25}
        width={25}
        className="cursor-pointer"
        onClick={() => dispatch(removeUser(index))}
      />
    </div>
  );
}

export default UserCard;
