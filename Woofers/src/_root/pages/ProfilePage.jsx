import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { getCookie } from '../../components/cookie/utils';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false); // Add this state variable

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Get the new values from the input fields
    const newUsername = document.getElementById('username').value;
    const newEmail = document.getElementById('email').value;
  
    fetch('http://127.0.0.1:4000/user/user/update/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': console.log(`Token ${localStorage.getItem('userToken')}`),
      },
      body: JSON.stringify({
        username: newUsername,
        email: newEmail
      })
    })
    .then(response => response.json())
    .then(data => {
      // Update the user context with the new data
      setUser(data);
      // Set isEditing back to false
      setIsEditing(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

  if (user) {
    return (
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-10">
          <div className="grid items-center grid-cols-1 md:grid-cols-3 justify-center">
            <div className="w-24 h-28 bg-indigo-100 rounded-full shadow-2xl top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img className="w-24 h-24 rounded-full" src="/icons/account.svg" alt={`${user.username}`} />
            </div>
          </div>
          <div className="mt-16 border-b pb-10">
            {isEditing ? (
              <div>
                <input id="username" type="text" defaultValue={user.username} />
                <input id="email" type="text" defaultValue={user.email} />
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-medium text-gray-700">{user.username}</h1>
                <p className="font-light text-gray-600 mt-3">{user.email}</p>
                <p className="mt-3 text-gray-500">Joined: {new Date(user.date_joined).toLocaleDateString()}</p>
              </div>
            )}
          </div>
          <div className="mt-3 flex flex-col justify-center">
            {isEditing ? (
              <button onClick={handleSave} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Save
              </button>
            ) : (
              <button onClick={handleEdit} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No user logged in</p>;
  }
};

export default ProfilePage;
