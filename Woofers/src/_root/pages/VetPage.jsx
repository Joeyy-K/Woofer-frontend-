import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { VetContext } from '../../contexts/VetContext';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../components/url/url';

const VetPage = () => {
  const { id } = useParams();
  const [vet, setVetDetails] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const { user } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  const { setVetId } = useContext(VetContext); 

  const handleInputChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleBookAppointmentClick = (vetId) => {
    setVetId(vetId);
  };

  const handleSendClick = async () => {
    try {
      const response = await fetch(`${API_URL}/reviews/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${Cookies.get('userToken')}`,
        },
        body: JSON.stringify({
          user: user.id,  
          veterinary: vet.id,  
          review: reviewText,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to post review');
      }
  
      const data = await response.json();
      toast.success("Review Posted!");
      setReviews(prevReviews => [...prevReviews, data]);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Review Failed to Post!");
    }
  };  

  useEffect(() => {
    const fetchVetDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/veterinary/${id}`);
        if (response.ok) {
          const data = await response.json();
          setVetDetails(data);
          setReviews(data.reviews);  
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
    return (
      <div className="flex items-center justify-center space-x-2 animate-bounce">
        <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 ">
      <div className="items-center justify-center"><ToastContainer /></div>
      <div className="flex flex-wrap mb-24 container mx-auto ">
        <div className="w-full md:w-1/4 border-r">
          <div className="flex flex-col items-center text-center p-3">
            <img className="rounded-full mt-2 w-36" src={vet.profile_picture}/>
            <span className="font-bold">{vet.first_name} {vet.last_name}</span>
            <div className="w-full">
              <hr className="my-4 bg-gray-300 h-1"/>
            </div>
            <span className="font-bold">Joined At:</span>
            <span className="py-1">{new Date(vet.created_at).toLocaleDateString()}</span>
            <div className="flex flex-wrap">
              <div className="w-full">
                <hr className="my-4 bg-gray-300 h-1"/>
                <label className="block mb-2 text-x font-bold text-gray-900 dark:text-white">Contacts:</label>
                <div className="w-full">
                  <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Email: </label>
                </div>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">{vet.email}</p>  
                <hr className="my-4 bg-gray-300 h-1"/> 
                <div className="w-full">
                  <label className="block mb-3 font-semibold text-gray-900 dark:text-white">Location:</label>
                </div>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">{vet.city.name}, {vet.city.country.name}</p>
                <hr className="my-4 bg-gray-300 h-1"/> 
              </div> 
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 border-r">
          <div className="p-3 py-0 mb-4 mt-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-right font-bold">Your Veterinarian</h4>
            </div>
            <hr className="my-4 bg-gray-300 h-1"/>
            <div className="flex flex-wrap mt-2">
              <div className="w-full">
                  <label className="block mb-3 font-bold text-gray-900 dark:text-white">Bio</label>
                  <p id="bio" className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white h-auto">{vet.bio}</p>
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full">
                  <label className="block mb-3 font-bold text-gray-900 dark:text-white">Live Location:</label>
                  <div className="flex">
                  <a className="flex p-2 border-4 border-gray-300 border-" href={`https://www.google.com/maps/search/?api=1&query=${vet.city.latitude},${vet.city.longitude}`} target="_blank" rel="noopener noreferrer">
                    Open Location in Google Maps
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                      className="w-5 h-5 mx-1" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                    <g>
                      <path fill="#F76D57" d="M32,52.789l-12-18C18.5,32,16,28.031,16,24c0-8.836,7.164-16,16-16s16,7.164,16,16
                        c0,4.031-2.055,8-4,10.789L32,52.789z"/>
                      <g>
                        <path fill="#394240" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289
                          l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289
                          C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M44,34.789l-12,18l-12-18C18.5,32,16,28.031,16,24
                          c0-8.836,7.164-16,16-16s16,7.164,16,16C48,28.031,45.945,32,44,34.789z"/>
                        <circle fill="#394240" cx="32" cy="24" r="8"/>
                      </g>
                    </g>
                    </svg>
                  </a>       
                  <p className="text-red-600 font-bold m-2">{"<--"} to google maps</p>
                  </div>
              </div>
            </div>
            <hr className="my-4 bg-gray-300 h-1"/> 
          <div>
            <Link to={'/booking/'}>
              <button
                onClick={() => handleBookAppointmentClick(vet.id)}
                className={"bg-indigo-600 hover:bg-indigo-500 text-white mt-4 mb-4 w-full py-2 rounded-md"}
              >
                Book Your Appointment
              </button>
            </Link>
          </div>
          <hr className="my-4 bg-gray-300 h-1"/>  
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="">
            <div className="d-flex justify-content-center">
              <div className="mb-5">
                <div className="card">
                  <div className="m-4">
                    <label className="block text-x font-bold text-gray-900 dark:text-white">Reviews</label>
                    <hr className="my-4 bg-gray-300 h-1"/> 
                    <div className="col-lg-8">
                      {reviews.length > 0 ? (
                        [...reviews].reverse().slice(0, 3).map((review, index) => (
                          <div className="mb-3" key={index}>
                            <div className="flex flex-wrap items-center">
                              <img
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                className="rounded-full mb-1"
                                alt="woman avatar"
                                width="30"
                              />
                              <h5 className="font-medium text-sm ml-2">{review.user.username}</h5>
                            </div>
                            <p className="text-sm mb-2">{new Date(review.created_at).toLocaleDateString()}</p>
                            <p className="text-sm mb-4">{review.review}</p> 
                          </div>
                        ))
                      ) : (
                        <p className="text-sm mb-4 text-gray-500">Be the first to leave a review!</p>
                      )}
                    </div>
                    <hr className="my-4 bg-gray-300 h-1"/> 
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mx-4">
              <label className="block font-semibold mb-3 text-gray-900 dark:text-white">Experience:</label>
              <textarea className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 h-32" placeholder="Review" value={reviewText}onChange={handleInputChange}></textarea>
            </div>
            <div className="mx-4">
              <button className="text-white py-1 px-4 uppercase rounded bg-indigo-600 hover:bg-indigo-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button" onClick={handleSendClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VetPage
