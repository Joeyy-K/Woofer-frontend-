import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [vets, setVets] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/veterinaries/');
        if (response.ok) {
          const data = await response.json();
          setVets(data); // Fetch all vets
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
    setStart(Math.max(0, start - 5)); // Scroll to the previous three vets
  };

  const handleNext = () => {
    setStart(Math.min(vets.length - 5, start + 5)); // Scroll to the next three vets
  };

  return (
    <div className="flex flex-col items-center mt-0"> {/* Remove space at the top */}
      <span className="text-sm text-gray-800 dark:text-gray-400">
        Our Local Trusted Doctors
      </span>
      <div className="w-full flex overflow-x-auto">
        <button onClick={handlePrev}>Prev</button>  {/* Make the list scrollable */}
        {vets.slice(start, start + 5).map((vet, index) => ( // Display only three vets at a time
          <div className="mb-2 shadow-lg border-0 flex-shrink-0"> {/* Prevent shrinking of cards */}
           <div className="flex flex-col items-center text-center p-3 py-2">
             <img className="rounded-full mt-2 w-16" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
           </div>
             <div className="p-2">
               <h5 className="font-medium">{`${vet.first_name}`}<small className="text-gray-700 text-sm"> {`${vet.last_name}`}</small></h5>          
            </div>
            
          </div>  
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
       {/* Button to scroll to the next three vets */}
    </div>
  );
};

export default HomePage;
