import React from 'react'

const AboutUsPage = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mb-24">
        <div className="sm:w-1/2 ">
            <div className="image object-center text-center">
                <img src="/images/platypus.png" style={{ width: '50%' }}/>
            </div>
        </div>
        <div className="sm:w-1/2 p-3">
            <div className="text">
                <span className="text-gray-500 border-b-2 font-medium border-indigo-600 uppercase">About us</span>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Woofers</span>
                </h2>
                <p className="text-gray-700 font-medium">
                 Woofers is dedicated to connecting users with the most locally available and qualified veterinarians throughout Kenya.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage
