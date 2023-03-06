import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeSection = () => {
  return (
    <section className='relative'>
      <span class="absolute h-full w-screen bg-main bg-fixed bg-center bg-cover bg-no-repeat" />
      <div className=' min-h-screen flex items-center justify-center py-10 px-4'>
        <div className="z-10 bg-white w-full max-w-xl md:px-8 py-14 rounded-md">
          <img src={require('../assets/img/zeniark-logo.png')} alt="Logo" className='mb-10 md:w-60 w-48 h-auto block mx-auto' />

          <div className="flex flex-col justify-center items-center text-center">
            <h1 className='mb-4 text-2xl font-semibold'>
              Welcome to the Trivia Challenge!
            </h1>
            <p className='text-sm font-semibold'>
              You will be presented with 10 True of False questions.
            </p>

            <p className=' bg-blue-900 text-white md:text-lg text-base font-medium px-10 py-3 rounded-xl my-12'>
              Can You Score 10/10?
            </p>

            <NavLink to="/quiz" className="text-xl underline text-blue-900 font-semibold">
              LET'S START!
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
