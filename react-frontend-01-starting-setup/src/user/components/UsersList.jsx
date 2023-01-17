import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Slides found</h2>
      </div>
    )
  }
  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          Book={user.Book}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
