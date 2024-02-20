import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../../contexts/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditingPage = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState(user.username);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const token = Cookies.get('user');
        let userToken = Cookies.get('userToken');

        const body = {
            username: username
        };

        fetch('http://127.0.0.1:4000/user/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${userToken}`
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.detail) {
                console.error(data.detail);
            } else {
                setUser(data);
                Cookies.set('user', JSON.stringify(data));
                toast.success("Successfully Changed!");
            }
        })
        .catch(error => console.error(error));
        toast.error("Username Already Taken!");
    };

    if (user) {
    return (
        <div className="bg-gray-100 container mx-auto my-1 mb-24">
            <div className="items-center justify-center"><ToastContainer /></div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 border-r">
                    <div className="flex flex-col items-center text-center p-3 py-5">
                        <img className="rounded-full mt-5 w-36" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                        <span className="font-semibold">{user.username}</span>
                        <span className="text-gray-500">{user.email}</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2 border-r">
                    <div className="p-4 py-0 mt-5">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-right font-bold">User Profile</h4>
                        </div>
                        <hr className="my-4 bg-gray-300 h-1"/>
                        <div className="flex flex-wrap mt-5">
                            <div className="w-full">
                                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Username: </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                        </svg>
                                    </span>
                                    <input onChange={handleUsernameChange} type="text" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder={`${user.username}`}/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 mb-10 text-center">
                            <button onClick={handleSubmit} className="text-white py-2 px-24 uppercase rounded bg-indigo-600 hover:bg-indigo-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button">Save Profile</button>
                        </div>
                        <hr className="my-4 bg-gray-100 h-0.5"/>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-3 py-5">
                        <div className="flex justify-between items-center experience">
                            <span className="font-bold">FeedBack</span>
                        </div>
                        <hr className="my-4 bg-gray-100 h-0.5"/>
                        <div className="w-full">
                            <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Any concern you may have post it here:</label>
                            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 h-32" placeholder="Experience"></textarea>
                        </div><br/>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return <p>No user logged in</p>;
    }
}

export default EditingPage