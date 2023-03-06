import React from 'react'

const QuizSection = () => {
  return (
    <section className='relative'>
      <span class="absolute h-full w-screen bg-main bg-fixed bg-center bg-cover bg-no-repeat" />
      <div className=' min-h-screen flex items-center justify-center py-10 px-4'>
        <div className="z-10 bg-white w-full max-w-xl md:px-8 p-4 rounded-md">
          <div className='flex md:justify-between md:flex-row flex-col justify-center border-b border-b-gray-200 items-center mb-10 pb-4'>
            <div className='flex items-center'>
              <img src={require('../assets/img/logo.png')} alt="Logo" className=' mr-4 md:w-10 w-8 h-auto block mx-auto' />
              <p className='text-lg font-semibold text'>Category: Geography</p>
            </div>
            <span className='text-sm font-medium'>
              1 of 10
            </span>
          </div>

          <h1 className='my-24 md:text-3xl text-2xl font-normal text-center md:px-24'>
              Greenland is almost as big as Africa
          </h1>

          <div className="flex items-center justify-center mb-6 gap-8">
            <button className='bg-green px-5 py-2 rounded-md text-white text-xl'>
              True
            </button>
            <button className='bg-orange px-5 py-2 rounded-md text-white text-xl'>
              False
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuizSection
