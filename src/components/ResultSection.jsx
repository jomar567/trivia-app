import React from 'react'

const ResultSection = () => {
  return (
    <section className='relative'>
      <span class="absolute h-full w-screen bg-main bg-fixed bg-center bg-cover bg-no-repeat" />
      <div className=' min-h-screen flex items-center justify-center py-10 px-4'>
        <div className="z-10 bg-white w-full max-w-xl md:px-8 p-4 rounded-md">
          <div className='relative flex justify-center border-b border-b-gray-200 items-center mb-10 py-4 '>
            <img src={require('../assets/img/logo.png')} alt="Logo" className=' md:mr-4 mr-2 md:w-10 w-8 h-auto md:absolute left-0' />
            <p className='text-xl font-semibold text'>Final Results</p>
          </div>

          <div className="flex flex-col justify-center text-center pb-6 border-b border-b-gray-200">
            <h1 className='md:text-3xl text-2xl font-semibold text-center md:px-24'>
                3/10
            </h1>
            <p className='text-xl'>Your Score</p>
          </div>

          <ol className='list-decimal py-4 px-3 marker:text-gray-400'>
            <li className='pl-4 border-b border-dashed border-b-gray-300 py-4'>
              <div className='flex justify-between items-center'>
                <p className=' leading-6 text-sm'>
                  Peyton Manning retired after winning Super Bowl XLIX.
                  <span className=' italic font-light block text-gray-400 text-xs'>
                    The correct answer is False. You answered False.
                  </span>
                </p>
                <p>check</p>
              </div>
            </li>
            <li className='pl-4 border-b border-dashed border-b-gray-300 py-4'>
              <div className='flex justify-between items-center'>
                <p className=' leading-6 text-sm'>
                  Peyton Manning retired after winning Super Bowl XLIX.
                  <span className=' italic font-light block text-gray-400 text-xs'>
                    The correct answer is False. You answered False.
                  </span>
                </p>
                <p>check</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default ResultSection
