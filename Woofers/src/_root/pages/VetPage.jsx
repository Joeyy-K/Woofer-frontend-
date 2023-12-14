import React, { useState, useEffect } from 'react';
import VetCard from '../../components/ui/VetCard';

const VetPage = () => {
  const [veterinaries, setVeterinaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/veterinaries/');
        if (response.ok) {
          const data = await response.json();
          setVeterinaries(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {veterinaries.map((veterinary) => (
        <div key={veterinary.id} className="flex w-full rounded overflow-hidden shadow-lg m-4">
          <img className="w-1/12" src='/public/icons/account.svg' alt={`${veterinary.first_name} ${veterinary.last_name}`} />
          <div className="w-9/12 px-6 py-4">
            <div className="font-bold text-xl mb-2">{`${veterinary.first_name} ${veterinary.last_name}`}</div>
            <hr className="mb-2 w-full border-gray-600" />
            <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Location: </span>{veterinary.location}</p>
            <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Gender: </span>{veterinary.gender}</p>
            <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Email: </span>{veterinary.email}</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-1000 mr-2">
              {new Date(veterinary.created_at).toLocaleDateString()}
            </span>
          </div>
          <div className="w-2/12 flex items-center justify-end px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );  
};

export default VetPage;
