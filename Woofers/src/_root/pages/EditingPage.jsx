import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const EditingPage = () => {
    const { user, setUser } = useContext(UserContext);

    if (user) {
    return (
        <div className="bg-gray-100 container mx-auto my-1 mb-24">
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
                        <hr className="my-4 bg-gray-100 h-0.5"/>
                        <div className="flex flex-wrap mt-5">
                            <div className="w-full">
                                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Email: </label>
                                <div className="relative mb-6">
                                    <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                        </svg>
                                    </span>
                                    <input type="text" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${user.email}`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-5">
                            <div className="w-full">
                                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Username: </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                        </svg>
                                    </span>
                                    <input type="text" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${user.username}`}/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 mb-10 text-center">
                            <button className="text-white py-2 px-24 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button">Save Profile</button>
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
                            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-32" placeholder="Experience"></textarea>
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