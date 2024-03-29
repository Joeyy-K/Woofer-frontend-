import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchVeterinaries } from '../../components/api/api';
import AdoptionCentres from '../../components/ui/AdoptionCentres';
import { API_URL } from '../../components/url/url';

const HomePage = () => {
  const [vets, setVets] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [start, setStart] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVeterinaries();
      if (data) {
        setVets(data);
      }

      const countryResponse = await fetch(`${API_URL}/countries/`);
      const countryData = await countryResponse.json();
      setCountries(countryData);
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`${API_URL}/cities/`);
      const data = await response.json();
      if (data) {
        setCities(data);
      }
    };
  
    fetchCities();
  }, []);

  const handlePrev = () => {
    setStart(Math.max(0, start - 6));
  };

  const handleNext = () => {
    setStart(Math.min(vets.length - 6, start + 6)); 
  };

  const handleCityFilterChange = (event) => {
    setCityFilter(event.target.value);
  }

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value);
  }

  const filteredVets = vets.filter(vet => 
    (cityFilter === '' || vet.city.name === cityFilter) && 
    (countryFilter == '' || vet.city.country.name === countryFilter)
  );

  return (
    <div className="bg-gray-100 container mx-auto mb-24">
      <section className="py-8 md:py-8">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
            <div className="shadow rounded-xl">
                <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-indigo-600 rounded-xl">
                    <aside className="p-8 space-y-4 md:p-16">
                        <h2 className="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                            Home for our Local
                            Trusted Veterinarians
                        </h2>
                        <p className="font-medium text-blue-100 md:text-2xl">
                          Find out more about us
                        </p>
                        <div>
                          <Link to="/about">
                            <button className="bg-white text-indigo-600 px-4 py-2 mt-3 rounded-xl">
                              About Us
                            </button>
                          </Link>
                        </div>
                    </aside>
                    <aside className="p-16 space-y-4 hidden md:block">
                    <blockquote className="font-medium text-blue-100 md:text-2xl">
                      "The greatness of a nation and its moral progress can be judged by the way its animals are treated." - Mahatma Gandhi
                    </blockquote>
                  </aside>
                </div>
            </div>
        </div>
      </section>
      <div className="flex justify-center space-x-12 mb-2">
        <div className="group">  
          <div
            className="">
            <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
            <select onChange={handleCountryFilterChange} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <option value="">Country</option>
                  {countries.map(country => (
                  <option key={country.name} value={country.name}>{country.name}</option>
                  ))}
                </select>
            </div>
          </div>
        </div>
        <div className="group">  
          <div
            className="">
            <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
            <select onChange={handleCityFilterChange} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <option value="">City</option>
                  {cities.map(city => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                  ))}
                </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-0 mx-4 mb-3">    
        <div className="mt-3 flex items-center w-full py-4 rounded bg-indigo-600">
          <p className="px-5 text-2xl font-medium text-white ">
            Select from the Best
          </p>
          <svg fill="white" className="w-9 h-9" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	        viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
              <g>
                <g>
                  <path d="M69.662,259.504c2.534,0,174.743,0,177.277,0c9.864,0,17.86-7.997,17.86-17.86c0-82.97,10.117-136.115-44.581-175.284
                    c-2.792-31.717-29.488-56.678-61.917-56.678c-32.43,0-59.124,24.962-61.917,56.678c-55.064,39.43-44.582,93.445-44.582,175.284
                    C51.801,251.508,59.798,259.504,69.662,259.504z M158.3,45.402c14.586,0,26.453,11.867,26.453,26.454
                    c0,14.729-11.783,26.453-26.453,26.453c-14.716,0-26.453-11.784-26.453-26.453C131.847,57.27,143.714,45.402,158.3,45.402z
                    M105.892,105.468c24.321,38.062,80.516,38.064,104.815,0c41.178,45.508,8.734,118.315-52.407,118.315
                    C97.173,223.783,64.704,150.992,105.892,105.468z"/>
                  <path d="M236.818,292.564c-47.639-27.326-107.589-28.364-157.036,0c-3.42,1.962-4.077,6.616-1.289,9.403l75.599,75.599
                    c2.325,2.325,6.094,2.325,8.419,0l75.597-75.599C240.896,299.179,240.239,294.526,236.818,292.564z"/>
                  <path d="M57.948,315.103c-2.275-2.275-5.959-2.342-8.299-0.132C19.096,343.848,0,384.725,0,429.984v54.474
                    c0,9.864,7.997,17.86,17.86,17.86h122.579c3.288,0,5.953-2.666,5.953-5.953v-90.351c0-1.579-0.628-3.093-1.744-4.209
                    L57.948,315.103z"/>
                  <path d="M386.756,369.14c-36.718,0-66.589,29.871-66.589,66.589c0,36.718,29.871,66.589,66.589,66.589s66.59-29.872,66.59-66.589
                    C453.346,399.012,423.474,369.14,386.756,369.14z"/>
                  <path d="M386.756,360.335c23.234,0,42.136-18.902,42.136-42.136s-18.902-42.136-42.136-42.136s-42.136,18.902-42.136,42.136
                    S363.524,360.335,386.756,360.335z"/>
                  <path d="M303.651,394.759c23.292,0,42.138-18.85,42.138-42.136c0-23.292-18.851-42.136-42.138-42.136
                    c-23.291,0-42.136,18.85-42.136,42.136C261.514,375.914,280.364,394.759,303.651,394.759z"/>
                  <path d="M469.864,310.486c-23.292,0-42.138,18.85-42.138,42.136c0,23.292,18.851,42.136,42.138,42.136
                    c23.291,0,42.136-18.85,42.136-42.136C512,329.331,493.15,310.486,469.864,310.486z"/>
                  <path d="M297.102,424.169c0.411-3.173-1.777-6.059-4.927-6.614c-31.606-5.569-55.507-33.7-54.441-67.064
                    c0.171-5.35-6.376-8.094-10.16-4.31l-55.623,55.623c-1.117,1.117-1.743,2.631-1.743,4.209v90.351
                    c0,3.287,2.666,5.953,5.953,5.953h122.579c5.942,0,11.196-2.905,14.44-7.369c1.48-2.037,1.41-4.812-0.052-6.861
                    C299.601,469.127,294.234,446.304,297.102,424.169z"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="w-full mt-3 flex overflow-x-auto justify-between items-center">
          <button className="px-4" onClick={handlePrev}>
            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>  
          {filteredVets.slice(start, start + 6).map((vet, index) => (
            <div key={index} className="mb-1 shadow-lg border-0 flex-shrink-0">
              <Link to={`/veterinary/${vet.id}`}>
                <div className="flex flex-col items-center text-center px-4">
                  <img className="rounded-full mt-2 w-16" src={vet.profile_picture}/>
                </div>
                <div className="p-2">
                  <small className="text-black text-base"> {`${vet.first_name}`}</small>          
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
        <div className="flex mt-3 mb-2 items-center">
          <Link to={"/veterinaries"}>
            <button className="text-white px-4 py-2 mt-2 rounded-xl bg-gray-800 hover:bg-gray-600 shadow hover:shadow-lg transition transform hover:-translate-y-0.5" type="button">See All</button>
          </Link>
        </div>
        <div className="mt-3 flex items-center w-full py-4 rounded bg-indigo-600">
          <p className="px-5 text-2xl font-medium text-white ">
            Adopt a Pet
          </p>
          <svg fill="white" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg w-9 h-9">
            <path d="M4.086 7.9a1.91 1.91 0 0 1-.763 2.52c-.81.285-1.782-.384-2.17-1.492a1.91 1.91 0 0 1 .762-2.521c.81-.285 1.782.384 2.171 1.492zm6.521 7.878a2.683 2.683 0 0 1-1.903-.788.996.996 0 0 0-1.408 0 2.692 2.692 0 0 1-3.807-3.807 6.377 6.377 0 0 1 9.022 0 2.692 2.692 0 0 1-1.904 4.595zM7.73 6.057c.127 1.337-.563 2.496-1.54 2.588-.977.092-1.872-.917-1.998-2.254-.127-1.336.563-2.495 1.54-2.587.977-.093 1.871.916 1.998 2.253zm.54 0c-.127 1.337.563 2.496 1.54 2.588.977.092 1.871-.917 1.998-2.254.127-1.336-.563-2.495-1.54-2.587-.977-.093-1.872.916-1.998 2.253zm3.644 1.842a1.91 1.91 0 0 0 .763 2.522c.81.284 1.782-.385 2.17-1.493a1.91 1.91 0 0 0-.762-2.521c-.81-.285-1.782.384-2.171 1.492z"/>
          </svg>
        </div>
        <AdoptionCentres />
      </div>
    </div>
  );
};

export default HomePage;
