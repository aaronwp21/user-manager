import React from 'react';
import Image from 'next/image';
import { userType } from '@/types';

function UserCard({name, email}: userType) {
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
        className='cursor-pointer'
      />
    </div>
  );
}

export default UserCard;
