import React from 'react';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { userType } from '@/types';

import { newUser } from '@/redux/features/user/userSlice';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
});

const defaults = {
  name: '',
  email: '',
};

function UserForm() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    register,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: defaults,
  });

  let submitFn = (vals: userType) => {
    reset();
    console.log(vals)
    dispatch(newUser(vals));
  };

  return (
    <form onSubmit={handleSubmit(submitFn)} className="flex flex-col gap-4" data-testid="user-form-element">
      <div>
        <input
          className="p-2 text-black"
          defaultValue={defaults.name}
          placeholder="Name..."
          {...register('name')}
        />
      </div>
      <div>
        <input
          className="p-2 text-black"
          defaultValue={defaults.email}
          placeholder="Email..."
          {...register('email')}
        />
      </div>
      <div className="flex gap-4 justify-center">
        <button
          disabled={!isDirty}
          className="bg-purple-600 disabled:bg-gray-600 px-4 py-1 rounded-md"
          type="reset"
          onClick={() => reset()}
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
          className="bg-purple-600 disabled:bg-gray-600 px-4 py-1 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default UserForm;
