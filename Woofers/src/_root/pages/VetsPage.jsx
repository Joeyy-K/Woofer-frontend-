import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VetsPage = () => {
  const [vets, setVets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/veterinaries/');
        if (response.ok) {
          const data = await response.json();
          setVets(data);
          console.log(vets)
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
      {vets.map((vet, index) => (
        vet && vet.id && (
        <div key={index} className="flex w-full rounded overflow-hidden shadow-lg m-2">
          <img className="w-1/12" src='/icons/veterinary.svg' alt={`${vet.first_name} ${vet.last_name}`} />
          <div className="w-9/12 px-8 py-1">
            <div className="font-bold text-xl mb-1">{`${vet.first_name} ${vet.last_name}`}</div>
            <hr className="mb-2 w-full border-gray-600" />
            <p className="text-gray-700 text-base mb-1"><span className='font-bold'>Location: </span>{vet.location}</p>
            <p className="text-gray-700 text-base mb-1"><span className='font-bold'>Gender: </span>{vet.gender}</p>
            <p className="text-gray-700 text-base mb-1"><span className='font-bold'>Email: </span>{vet.email}</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-1000 mr-2">
              {new Date(vet.created_at).toLocaleDateString()}
            </span>
        </div>
        <div className="w-2/12 flex items-center justify-end px-6 py-4">
          <Link to={`/veterinary/${vet.id}`}>
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                See Details
              </button>
          </Link>
        </div>
        </div>
        )
      ))}
    </div>
  )
}

export default VetsPage
