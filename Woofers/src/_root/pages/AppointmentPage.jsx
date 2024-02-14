import React, { useEffect, useState  } from 'react';

const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([]);

    const fetchUserAppointments = async () => {
        try {
          const response = await fetch('http://127.0.0.1:4000/appointments/me/', {
            headers: {
              'Authorization': `Token ${localStorage.getItem('userToken')}`
            }
          });
          if (response.ok) {
            const data = await response.json();
            console.log('Appointments:', data); 
            setAppointments(data);
          } else {
            console.error('Failed to fetch user appointments');
          }
        } catch (error) {
          console.error('Error fetching user appointments:', error);
        }
      };

      useEffect(() => {
        fetchUserAppointments();
      }, []);

      const deleteAppointment = async (id) => {
        console.log('Deleting appointment with id:', id);
        try {
          const response = await fetch(`http://127.0.0.1:4000/appointments/${id}/delete/`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Token ${localStorage.getItem('userToken')}`
            }
          });
          if (!response.ok) {
            throw new Error('Failed to delete appointment');
          }
          // Remove the deleted appointment from the state
          setAppointments(appointments.filter(appointment => appointment.id !== id));
        } catch (error) {
          console.error('Error deleting appointment:', error);
        }
      };

  return (
    <div className="bg-gray-100 container mx-auto mb-24">
        <div className="mt-3 relative text-center w-full py-4 rounded bg-blue-500">
           <h1 className="text-white font-bold px-3">
                Your Appointments
            </h1> 
        </div>
         {appointments.length > 0 && (
            <div className="border-l-2 border-gray-500 pl-8 text-center font-semibold items-center">
              {appointments.map((appointment, index)  => (
                <div key={index}>  
                    <p className="p-2"> You have an appointment with {appointment.veterinary.first_name} {appointment.veterinary.last_name} on The {appointment.date} at {appointment.time}</p>
                    <p className="p-2">Reason for visit: </p>
                    <p className="p-2">{appointment.reason_for_visit}</p>
                    <button onClick={() => deleteAppointment(appointment.id)}
                     className="mt-4 text-white py-1 px-3 uppercase rounded bg-blue-500 hover:bg-blue-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button">Cancel</button>
                    <hr className="my-4 bg-gray-300 h-0.5"/>
                </div>
              ))}
            </div>
          )}
    </div>
  )
}

export default AppointmentPage