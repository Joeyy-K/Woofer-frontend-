import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchVeterinaries } from '../../components/api/api';
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
      <div className="flex flex-col items-center mt-0 mx-4">    
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
        <div className="flex">
        <div className="w-full mt-5 px-4 flex justify-between items-center">
          <Link to="https://www.instagram.com/kspca/" target="_blank" rel="noopener noreferrer">
            <svg className="w-12 h-12" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M599.256 326.893C638.207 324.995 644.199 388.816 601.453 383.223C565.997 382.224 561.503 327.892 599.256 326.893Z" fill="white"/>
            <path d="M726.895 478.902C729.991 250.487 638.505 220.924 429.866 233.608C286.146 222.522 229.716 331.386 229.317 460.125C221.527 586.168 260.378 745.468 417.282 732.085C613.137 728.59 735.984 708.714 726.895 478.902ZM384.423 85.7931C608.743 64.9192 868.418 97.079 871.514 377.828C879.404 507.066 883.599 645.593 820.278 762.847C752.862 877.503 640.503 872.709 523.649 875.406C420.877 879.501 314.91 888.39 215.834 854.732C114.86 819.776 87.3942 743.571 89.5915 643.895C86.0959 558.103 82.6002 472.51 84.0984 386.617C89.0921 183.071 177.981 81.099 384.423 85.7931Z" fill="#000000"/>
            <path d="M429.866 233.608C638.505 220.924 729.89 250.487 726.894 478.902C735.983 708.714 613.136 728.49 417.381 732.085C260.377 745.469 221.626 586.068 229.416 460.125C229.716 331.386 286.145 222.522 429.866 233.608ZM682.949 486.093C682.949 344.67 665.571 269.763 504.972 276.954C457.231 281.648 401.401 274.557 353.461 290.837C257.181 337.878 270.465 467.216 279.354 556.904C288.043 701.823 408.193 697.528 520.652 681.349C658.779 674.058 684.248 614.432 682.949 486.093Z" fill="white"/>
            <path d="M495.188 393.309C393.515 388.116 362.155 555.606 473.715 560.101C578.584 557.604 594.664 423.172 495.188 393.309ZM473.915 354.857C649.495 342.972 638.709 602.448 473.116 600.65C316.212 595.856 330.894 368.84 473.915 354.857Z" fill="white"/>
            <path d="M473.813 560.102C362.252 555.508 393.513 388.017 495.286 393.31C594.662 423.173 578.582 557.605 473.813 560.102Z" fill="#000000"/>
            <path d="M504.973 276.955C665.572 269.664 683.05 344.67 682.95 486.093C684.149 614.433 658.781 674.058 520.653 681.349C408.194 697.529 288.044 701.823 279.355 556.905C270.466 467.117 257.282 337.878 353.462 290.837C401.402 274.558 457.233 281.649 504.973 276.955ZM473.213 600.65C638.706 602.448 649.592 342.972 474.012 354.857C330.89 368.84 316.209 595.856 473.213 600.65ZM601.452 383.222C644.199 388.815 638.206 325.094 599.255 326.892C561.502 327.891 565.997 382.223 601.452 383.222Z" fill="#000000"/>
            </svg>
            <p>KSPCA</p>
          </Link>
        </div>
        <div className="w-full mt-5 px-4 flex justify-between items-center">
          <Link to="https://www.kspca.or.ke/" target="_blank" rel="noopener noreferrer">
            <svg className="w-12 h-12" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none">
              <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/>
              <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/>
              <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
            </svg>
            <p>KSPCA</p>
          </Link>
        </div>
        <div className="w-full mt-5 px-4 flex justify-between items-center">
          <Link to="https://twitter.com/KSPCAKenya" target="_blank" rel="noopener noreferrer">
            <svg className="w-12 h-12" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 512 512"  xmlSpace="preserve">
            <g>
              <path className="st0" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M260.926,217.391
                c0.084,0.004,0.164,0.021,0.25,0.025c-0.875-3.752-1.328-7.664-1.328-11.682c0-28.307,22.951-51.258,51.262-51.258
                c14.742,0,28.063,6.225,37.414,16.188c9.6-1.89,18.684-5.174,27.129-9.523c1.781-0.864,3.566-1.723,5.32-2.674
                c-3.039,9.334-8.744,17.412-16.141,23.532c-2.004,1.576-4.062,3.098-6.326,4.344c0.154-0.018,0.304-0.052,0.457-0.071
                c-0.15,0.093-0.275,0.22-0.428,0.312c8.402-1.005,16.459-3.051,24.111-5.942c1.715-0.592,3.428-1.191,5.127-1.852
                c-6.842,10.159-15.453,19.095-25.375,26.259c0.098,2.197,0.148,4.406,0.148,6.631c0,67.736-51.558,145.842-145.844,145.842
                c-28.947,0-55.891-8.484-78.576-23.028c4.01,0.473,8.092,0.715,12.229,0.715c19.136,0,37.014-5.269,52.383-14.34
                c3.871-2.23,7.658-4.639,11.273-7.365c-0.098-0.002-0.187-0.026-0.285-0.028c0.094-0.073,0.196-0.136,0.289-0.209
                c-19.422-0.358-36.184-11.539-44.574-27.747c-1.25-2.489-2.32-5.096-3.164-7.831c3.086,0.58,6.246,0.898,9.5,0.898
                c3.391,0,6.666-0.436,9.871-1.063c1.197-0.168,2.406-0.308,3.586-0.502c-0.156-0.032-0.293-0.1-0.449-0.133
                c0.162-0.042,0.336-0.056,0.496-0.1c-23.449-4.709-41.119-25.428-41.119-50.262c0-0.196,0.002-0.387,0.004-0.58l0.024-0.055
                c5.521,3.064,11.693,5.092,18.23,5.94c1.609,0.269,3.221,0.516,4.832,0.657c-0.11-0.074-0.205-0.164-0.314-0.238
                c0.152,0.006,0.297,0.036,0.447,0.041c-13.754-9.191-22.803-24.883-22.803-42.666c0-8.142,1.988-15.787,5.367-22.623
                c0.539-1.028,1.018-2.078,1.637-3.074c22.711,27.822,55.516,46.971,92.801,52.15c4.16,0.605,8.332,1.144,12.553,1.388
                C260.934,217.443,260.932,217.416,260.926,217.391z"/>
            </g>
            </svg>
            <p>KSPCA</p>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
