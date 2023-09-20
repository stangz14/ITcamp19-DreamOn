import React from 'react'
import { Link } from 'react-router-dom' 

function CommentForm() {
  return (
    <div className=" flex justify-center items-center w-screen h-screen flex-col">
       <div className='p-6 rounded-lg flex flex-col justify-center items-center w-auto h-auto bg-slate-200/80'>
       <div className='px-4 w-auto bg-white rounded-md drop-shadow-2xl'>
          <h1 className='text-3xl text-center'>Username</h1>
          <h2 className='text-2xl text-center'>Dream Name</h2>
       </div>
      <form className="w-96">
        <div className="mb-6">
          <label className="bg-white drop-shadow-lg block table px-2.5 mb-2 text-sm font-medium dark:text-white rounded">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border drop-shadow-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="bg-white drop-shadow-lg table block px-2.5 rounded mb-2 text-sm font-medium dark:text-white">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            className="drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <Link 
            className="w-full flex justify-center items-center drop-shadow-2xl"
            to={"/home"}>
          <button
            type="submit"
            className="drop-shadow-2xl text-black bg-[#eea139] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Link>
      </form>
      </div>
    </div>
  )
}

export default CommentForm