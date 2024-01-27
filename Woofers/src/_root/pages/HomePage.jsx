import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [vets, setVets] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/veterinaries/');
        if (response.ok) {
          const data = await response.json();
          setVets(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    setStart(Math.max(0, start - 6)); // Scroll to the previous three vets
  };

  const handleNext = () => {
    setStart(Math.min(vets.length - 6, start + 6)); // Scroll to the next three vets
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mt-0 mx-4">
  <div className="mt-3 items-center w-full py-5 rounded bg-blue-500">
    <p className="text-center text-2xl text-white ">
      Our Local Trusted Veterinaries
    </p>
  </div>
  <div className="w-full flex overflow-x-auto justify-between items-center"> {/* Added padding */}
    <button className="px-4" onClick={handlePrev}>
    <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
    </button>  
    {vets.slice(start, start + 6).map((vet, index) => (
      <div key={index} className="mb-1 shadow-lg border-0 flex-shrink-0">
        <Link to={`/veterinary/${vet.id}`}>
          <div className="flex flex-col items-center text-center px-4">
            <img className="rounded-full mt-2 w-16" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
          </div>
          <div className="p-2">
            <small className="text-black text-sm"> {`${vet.first_name}`}</small>          
          </div>  
        </Link>
      </div>
    ))}
    <button className="px-4" onClick={handleNext}>
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
    </button>
  </div>
  <div className="flex mt-3 items-center">
    <Link to={`/veterinaries`}>
      <button className="text-white py-1 px-3 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button">See All</button>
    </Link>
  </div>
</div>

    </div>
  );
};

export default HomePage;
