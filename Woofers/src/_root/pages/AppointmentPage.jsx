import React, { useEffect, useState  } from 'react';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([]);

    let csrftoken = Cookies.get('csrftoken');

    const fetchUserAppointments = async () => {
        try {
          const response = await fetch('http://127.0.0.1:4000/appointments/me/', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${Cookies.get('userToken')}`,
              'X-CSRFToken': csrftoken
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
              'Authorization': `Token ${Cookies.get('userToken')}`,
              'X-CSRFToken': csrftoken
            }
          });
          if (!response.ok) {
            throw new Error('Failed to delete appointment');
          }

          setAppointments(appointments.filter(appointment => appointment.id !== id));
          toast.success("Appointment Deleted!");
        } catch (error) {
          console.error('Error deleting appointment:', error);
          toast.error("Failed to Delete Appointment!");
        }
      };

      return (
        <div className="bg-gray-100 container mx-auto mb-40">
          <div className="items-center justify-center"><ToastContainer /></div>
          <div className="mt-3 relative text-center w-full py-4 rounded bg-indigo-600">
            <h1 className="text-white font-bold px-3">
              Your Appointments
            </h1> 
          </div>
          {appointments.length > 0 ? (
            <div className="border-l-2 border-gray-500 pl-8 text-center">
              {appointments.map((appointment, index)  => (
                <div key={index} className="mt-3 font-medium text-base justify-center">
                  <p>We have successfully scheduled your next appointment</p>
                  <hr className="my-4 bg-gray-300 h-0.5"/>
                  <div className="mt-5 flex flex-col md:flex-row justify-center">
                    <div className="text-left mx-12 font-medium">
                      <p>It will be on:</p>
                      <hr className="my-4 bg-gray-300 h-0.5"/>
                      <p className="mt-2">{new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="mt-2">Check In {new Date(`1970-01-01T${appointment.time}Z`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                    </div>
                    <div className="text-left mx-12 font-medium">
                      <p>You will be with:</p>
                      <hr className="my-4 bg-gray-300 h-0.5"/>
                      <p className="mt-2">Veterinarian {appointment.veterinary.first_name} {appointment.veterinary.last_name}</p>
                    </div>
                    <div className="text-left mx-12 font-medium">
                      <p>Reason for visit:</p>
                      <hr className="my-4 bg-gray-300 h-0.5"/>
                      <p className="mt-2">{appointment.reason_for_visit}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col md:flex-row justify-center">
                    <div className="flex m-2 h-24 w-64">
                      <div className="flex flex-col text-left bg-indigo-600 text-white text-xs self-center pl-12 pr-4 py-2 -ml-12 rounded-r-full">
                        <h3 className="text-lg">Bring A Mask</h3>
                        <p className="w-64 text-xs overflow-x-auto">Practice Safety</p>
                      </div>
                    </div>
                  <div className="flex text-center m-2 h-24 w-64">
                    <div className="flex flex-col text-left bg-gray-800 text-white text-xs self-center pl-12 pr-8 py-2 -ml-12 rounded-r-full">
                      <h3 className="text-lg">Payment Method</h3>
                      <p className="w-64 text-xs ">Credit and Debit cards accepted</p>
                    </div>
                  </div>
                  <div className="flex text-center m-2 h-24 w-64">
                    <div className="flex flex-col text-left bg-red-800 text-white text-xs self-center pl-12 pr-4 py-2 -ml-12 rounded-r-full">
                      <h3 className="text-lg">Insurance card And ID</h3>
                      <p className="w-64 text-xs  overflow-x-auto">are required.</p>
                    </div>
                  </div>
                  </div>  
                  <button onClick={() => deleteAppointment(appointment.id)}
                    className="mt-5 text-white py-1 px-3 rounded bg-gray-800 hover:bg-gray-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button">Cancel</button>
                  <hr className="my-4 bg-gray-300 h-0.5"/>
                </div>
              ))}
            </div>
            ) : (
              <div className="mt-3 relative text-center w-full h-full py-4 rounded bg-gray-200">
                <h2 className="">
                  You have no appointments scheduled!
                </h2>
              </div>
          )}
        </div>
      )
      
}

export default AppointmentPage