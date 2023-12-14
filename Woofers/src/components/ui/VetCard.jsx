import React, { useState, useEffect } from 'react';

const VetCard = () => {
  const [veterinary, setVeterinary] = useState(null);

  useEffect(() => {
    const id = 1; // Replace with the actual id
    const fetchVeterinaryData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:4000/veterinary/${id}`);
        if (response.ok) {
          const data = await response.json();
          setVeterinary(data);
        } else {
          console.error('Failed to fetch veterinary data');
        }
      } catch (error) {
        console.error('Error fetching veterinary data:', error);
      }
    };

    fetchVeterinaryData();
  }, []);

  return (
    <div className="vet-card bg-gray-100 p-4 rounded-md shadow-md">
      {veterinary ? (
        <>
          <h2 className="text-xl font-bold">{`${veterinary.first_name} ${veterinary.last_name}`}</h2>
          <p>Username: {veterinary.username}</p>
          <p>Email: {veterinary.email}</p>
          <p>Gender: {veterinary.gender}</p>
          <p>Location: {veterinary.location}</p>
          <p>Joined: {new Date(veterinary.created_at).toLocaleDateString()}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VetCard;
