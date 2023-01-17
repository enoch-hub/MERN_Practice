import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {
  const USERS = [
    {
      id: 'u1',
      Book: 'Psalms',
      Chapter: '23',
      Verse: '1',
      image:
        'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return <UsersList items = {USERS} />;
};

export default Users;
