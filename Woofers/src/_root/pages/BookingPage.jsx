import React, { useState, useContext } from 'react';
import { VetContext } from '../../contexts/VetContext';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../components/url/url';

const BookingPage = () => {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [appointmentReason, setAppointmentReason] = useState('');
    const { vetId } = useContext(VetContext);

    let csrftoken = Cookies.get('csrftoken');

    const handleAppointmentSubmit = async () => {
        try {
          const response = await fetch(`${API_URL}/appointments/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${Cookies.get('userToken')}`,
              'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
              veterinary: vetId,
              date: appointmentDate,
              time: appointmentTime,
              reason_for_visit: appointmentReason,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to create appointment');
          }  
      
          const data = await response.json();
          toast.success("Appointment Created!");
        } catch (error) {
          console.error('Error:', error);
          toast.error("Failed to Create Appointment!");
        }
      };


  return (
    <div className="max-w-md mx-auto mt-10 mb-24 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="items-center justify-center"><ToastContainer /></div>
      <div className="text-2xl py-4 px-6 bg-indigo-600 text-white text-center font-bold uppercase">
          Book an Appointment
      </div>
      <form onSubmit={(event) => {event.preventDefault(); handleAppointmentSubmit();}} className="py-4 px-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date" value={appointmentDate} onChange={e => setAppointmentDate(e.target.value)} required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="time" value={appointmentTime} onChange={e => setAppointmentTime(e.target.value)} required/>
        </div>
          
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Reason For Visit
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 h-40"
            type="text" value={appointmentReason} onChange={e => setAppointmentReason(e.target.value)} required>
          </textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
            type="submit">
              Book Appointment
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookingPage