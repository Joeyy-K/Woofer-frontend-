import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VetPage = () => {
  const { id } = useParams();
  const [vet, setVetDetails] = useState(null);

  useEffect(() => {
    const fetchVetDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:4000/veterinary/${id}`);
        if (response.ok) {
          const data = await response.json();
          setVetDetails(data);
        } else {
          console.error('Failed to fetch vet details');
        }
      } catch (error) {
        console.error('Error fetching vet details:', error);
      }
    };

    fetchVetDetails();
  }, [id]);

  if (!vet) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex items-center justify-start mt-8 w-3/4 mx-auto">
      <img className="w-24 h-24 rounded-full mr-8" src="/icons/veterinary.svg" alt={`${vet.first_name} ${vet.last_name}`} />
      <div>
        <p className="text-xl py-1 font-bold">{`${vet.first_name} ${vet.last_name}`}</p>
        <p className="text-gray-600 py-1"><span className='font-bold'>Location: </span>{vet.location}</p>
        <p className="text-gray-600 py-1"><span className='font-bold'>Gender: </span>{vet.gender}</p>
        <p className="text-gray-600 py-1"><span className='font-bold'>Email: </span>{vet.email}</p>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
          {new Date(vet.created_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default VetPage
