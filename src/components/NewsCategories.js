import React, { Component } from 'react'

export default class NewsCategories extends Component {
  render() {
    return (
      <div className='bg-black'>
        <div className='sm:w-auto md:w-3/4 sm:text-xs md:text-base bg-red mx-auto py-4 text-white'>
          <ul className='text-sm text-center flex flex-row grid grid-cols-4 justify-between text-md sm:grid sm:grid-cols-4 sm:text-center md:flex'>
            <li className='hover:text-teal-400 hover:scale-105  duration-200 font-bold'>
              <a href="/" className="">Top Headlines</a>
            </li>
            <li className='hover:text-teal-400  hover:scale-105 duration-200 font-bold'>
              <a href="/business" className="">Business</a>
            </li>
            <li className='hover:text-teal-400 hover:scale-105 duration-200 font-bold'>
              <a href="/entertainment" className=" ">Entertainment</a>
            </li>
            <li className='hover:text-teal-400 hover:scale-105 duration-200 font-bold'>
              <a href="/general" className=" ">General</a>
            </li>
            <li className='hover:text-teal-400 hover:scale-105 duration-200 font-bold'>
              <a href="/health" className=" ">Health</a>
            </li>
            <li className='hover:text-teal-400 hover:scale-105 duration-200 font-bold'>
              <a href="/science" className=" ">Science</a>
            </li>
            <li className='hover:text-teal-400 hover:scale-105 duration-200 font-bold'>
              <a href="/sports" className=" ">Sports</a>
            </li>
            <li className='hover:text-teal-400 hover:scale-105 duration-200 font-bold'>
              <a href="/technology" className=" ">Technology</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
