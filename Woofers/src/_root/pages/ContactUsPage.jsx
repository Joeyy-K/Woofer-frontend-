import React from 'react'

const ContactUsPage = () => {
  return (
    <section className="w-full relative container bg-gray-100 text-white">
        <div className="mx-auto px-5">
            <form
                action="https://getform.io/f/7axP2lay"
                method="POST"
            >
            <div className="mb-12 flex w-full flex-col text-center bg-indigo-600 py-6 rounded-xl">
            <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to us! Whether you have a question,
                feedback,
            </p>
            </div>
            <div className="border-gray-500 mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap ">
                <div className="w-1/2 p-2">
                <div className="relative">
                    <input type="text" id="name" name="name" className="peer w-full rounded border border-white bg-white py-1 px-3 text-base leading-8 text-black placeholder-transparent shadow transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
                </div>
                </div>
                <div className="w-1/2 p-2">
                <div className="relative">
                    <input type="email" id="email" name="email" className="peer w-full rounded border border-white bg-white bg-opacity-90 py-1 px-3 text-base leading-8 text-black placeholder-transparent shadow transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
                </div>
                </div>
                <div className="mt-4 w-full p-2">
                <div className="relative">
                    <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-white bg-white bg-opacity-90 py-1 px-3 text-base leading-6 text-black placeholder-transparent shadow transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2" placeholder="Message"></textarea>
                    <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
                </div>
                </div>
                <div className="w-full p-2">
                    <button className="mx-auto flex rounded-xl border-0 bg-gray-800 py-2 px-4 text-lg text-white hover:bg-gray-700 focus:outline-none">Send</button>
                </div>
            </div>
            </div>
            </form>
        </div>
    </section>
  )
}

export default ContactUsPage