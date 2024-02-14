import React, { useState, useContext } from 'react';
import { VetContext } from '../../contexts/VetContext';

const BookingPage = () => {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [appointmentReason, setAppointmentReason] = useState('');
    const { vetId } = useContext(VetContext);
    const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

    const handleAppointmentSubmit = async () => {
        try {
          const response = await fetch('http://127.0.0.1:4000/appointments/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${localStorage.getItem('userToken')}`, 
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

          setIsAppointmentBooked(true);  
      
          const data = await response.json();
          console.log('Appointment created:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      };


  return (
    <div className="max-w-md mx-auto mt-10 mb-24 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="text-2xl py-4 px-6 bg-blue-500 text-white text-center font-bold uppercase">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-40"
                type="text" value={appointmentReason} onChange={e => setAppointmentReason(e.target.value)} required></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Book Appointment
            </button>
        </div>

    </form>
    {isAppointmentBooked && <p>Appointment booked successfully!</p>}
</div>
  )
}

export default BookingPage