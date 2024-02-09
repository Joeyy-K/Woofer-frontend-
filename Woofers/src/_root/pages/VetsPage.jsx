import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchVeterinaries } from '../../components/api/api';

const VetsPage = () => {
  const [vets, setVets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [vetsPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVeterinaries();
      if (data) {
        setVets(data);
      }
    };
  
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  }

  const filteredVets = vets.filter(vet => 
    (genderFilter === '' || vet.gender === genderFilter) && 
    (vet.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    vet.last_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const indexOfLastVet = currentPage * vetsPerPage;
  const indexOfFirstVet = indexOfLastVet - vetsPerPage;
  const currentVets = filteredVets.slice(indexOfFirstVet, indexOfLastVet);
  const totalVets = vets.length;
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredVets.length / vetsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-gray-100 mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-flex mt-2 xs:mt-0">
            {pageNumbers.map(number => (
            <button className="flex items-center justify-center px-3 mx-0.5 h-8 text-sm font-medium text-white  bg-blue-700 rounded-e border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" key={number} onClick={() => paginate(number)}>
            {number}
            </button>
            ))}
          </div>
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstVet + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{indexOfLastVet}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalVets}</span> Entries
          </span>
        </div>
        <form>
          <div className="flex">
            <select onChange={handleGenderFilterChange} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
              <option value="">All</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <div className="relative w-full">
            <input type="search" onChange={handleSearchChange} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required/>
              <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-wrap ">
        {currentVets.map((vet, index) => (
          vet && vet.id && (
          <div key={index} className="w-full md:w-1/3">
            <div className="mb-2 shadow-lg border-0">
              <div className="flex flex-col items-center text-center p-3 py-2">
                <img className="rounded-full mt-2 w-32" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
              </div>
                <div className="p-6">
                  <h5 className="font-medium mb-0">{`${vet.first_name}`}<small className="text-gray-700 text-sm"> {`${vet.last_name}`}</small></h5>          
                  <ul className="mt-5 text-sm">
                    <li className="text-gray-700 text-sm py-1">Location: </li>
                    <li className="font-semibold">{vet.location}</li>
                    <li className="text-gray-700 text-sm py-1">Email: </li>
                    <li className="font-semibold">{vet.email}</li>
                  </ul>
                    <div className="flex mt-6 items-center">
                      <Link to={`/veterinary/${vet.id}`}>
                        <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button">Details</button>
                      </Link>
                    </div>
                </div>
            </div>
          </div>
          )
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="inline-flex mt-2 xs:mt-0">
            {pageNumbers.map(number => (
            <button className="flex items-center justify-center px-3 mx-0.5 h-8 text-sm font-medium text-white  bg-blue-700 rounded-e border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" key={number} onClick={() => paginate(number)}>
            {number}
            </button>
            ))}
          </div>
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstVet + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{indexOfLastVet}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalVets}</span> Entries
          </span>
        </div>
      </div>
    </div>
  )
}

export default VetsPage


