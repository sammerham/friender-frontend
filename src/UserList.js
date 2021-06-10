import React from 'react';
import UserCard from './UserCard';

//props: users

function UserList({users}){
console.log('jobsCardList--->>', users)
  return (
    <div className='UserCardList'>
      {users.map(user => (<div key={user.id}> <UserCard user={user} /> </div>))}
    </div>)
}
export default UserList;