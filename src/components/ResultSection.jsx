import React from 'react'
import { HiOutlineCheck } from 'react-icons/hi'
import { HiOutlineXMark } from 'react-icons/hi2'
import { NavLink, useLocation  } from 'react-router-dom'

const ResultSection = () => {
  const {state} = useLocation();
  const score = state ? state.score : 0

   // Retrieve the user's answers from localStorage
   const userAnswers = [];
   for (let i = 0; i < 10; i++) {
     const answer = localStorage.getItem(`answer_${i}`);
     console.log(answer)
     if (answer) {
       userAnswers.push(JSON.parse(answer));
       console.log(userAnswers)
     }
   }


  return (
    <section className='relative'>
      <span className="absolute h-full w-screen bg-main bg-fixed bg-center bg-cover bg-no-repeat" />
      <div className=' min-h-screen flex items-center justify-center py-10 px-4'>
        <div className="z-10 bg-white w-full max-w-xl md:px-8 p-4 rounded-md">
          <div className='relative flex justify-center border-b border-b-gray-200 items-center mb-10 py-4 '>
            <img src={require('../assets/img/logo.png')} alt="Logo" className=' md:mr-4 mr-2 md:w-10 w-8 h-auto md:absolute left-0' />
            <p className='text-xl font-semibold text'>Final Results</p>
          </div>

          <div className="flex flex-col justify-center text-center pb-6 border-b border-b-gray-200">
            <h1 className='md:text-3xl text-2xl font-semibold text-center md:px-24'>
                {score}/10
            </h1>
            <p className='text-xl'>Your Score</p>
          </div>

          <ol className='list-decimal py-4 px-3 marker:text-gray-400 mb-8'>
            {userAnswers.map((answer, index) => (
            <li key={index}>
              <p>{answer.question}</p>
              <p>{answer.answer}</p>
              <p>{answer.isCorrect ? 'Correct' : 'Incorrect'}</p>
            </li>
          ))}

            {/* <li className='pl-4 border-b border-dashed border-b-gray-300 py-4'>
              <div className='flex justify-between items-center'>
                <p className=' leading-6 text-sm'>
                  Peyton Manning retired after winning Super Bowl XLIX.
                  <span className=' italic font-light block text-gray-400 text-xs'>
                    The correct answer is <span className='font-semibold text-orange'>False</span>.
                    You answered <span className='font-light text-orange'>False</span>.
                  </span>
                </p>
                <HiOutlineCheck className='text-2xl text-green' />
              </div>
            </li>
            <li className='pl-4 border-b border-dashed border-b-gray-300 py-4'>
              <div className='flex justify-between items-center'>
                <p className=' leading-6 text-sm'>
                  Peyton Manning retired after winning Super Bowl XLIX.
                  <span className=' italic font-light block text-gray-400 text-xs'>
                    The correct answer is <span className='font-semibold text-green'>True</span>.
                    You answered <span className='font-light text-orange'>False</span>.
                  </span>
                </p>
                <HiOutlineXMark className='text-2xl text-red font-bold' />
              </div>
            </li> */}
          </ol>
          <NavLink to="/quiz" className="text-xl underline text-blue-900 font-semibold text-center">
             <h1 className="text-center">PLAY AGAIN</h1>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default ResultSection
