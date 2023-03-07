import React, { useEffect, useState } from 'react'
import questions from '../data/questions.json'
import { useNavigate } from 'react-router-dom'

const QuizSection = () => {
  const [questionIndices, setQuestionIndices] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState();
  const [score, setScore] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.clear();
    // Pick 10 random question indices from the list
    const indices = [];
    while (indices.length < 10) {
      const randomIndex = Math.floor(Math.random() * questions.results.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    setQuestionIndices(indices);
    setCurrentQuestionIndex(0);
  }, []);

  function handleAnswer(answer) {
    // Check if the user's answer is correct and update the score
    const isCorrect = answer === questions.results[questionIndices[currentQuestionIndex]].correct_answer;
    const correctAnswer = questions.results[questionIndices[currentQuestionIndex]].correct_answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Store the user's answer in localStorage
    const questionIndex = questionIndices[currentQuestionIndex];
    const question = questions.results[questionIndex].question;
    localStorage.setItem(`answer_${currentQuestionIndex}`, JSON.stringify({
      question: question,
      answer: answer,
      correct_answer: correctAnswer,
      isCorrect: isCorrect
    }));

    // After the user has answered, move on to the next question
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < 10) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      navigate('/result', {state: {score}})
    }
  }


  if (questionIndices.length === 0 || currentQuestionIndex === null) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions.results[questionIndices[currentQuestionIndex]];

  return (
    <section className='relative'>
      <span className="absolute h-full w-screen bg-main bg-fixed bg-center bg-cover bg-no-repeat" />
      <div className=' min-h-screen flex items-center justify-center py-10 px-4'>
      {
        currentQuestion !== undefined
        ?
          (

            <div className="z-10 bg-white w-full max-w-xl md:px-8 p-4 rounded-md">
              <div className='flex md:justify-between md:flex-row flex-col justify-center border-b border-b-gray-200 items-center mb-10 pb-4'>
                <div className='flex items-center'>
                  <img src={require('../assets/img/logo.png')} className=" w-8 mr-2" alt="" />
                  <p className='text-lg font-semibold text'>Category: {currentQuestion.category}</p>
                </div>
                <span className='text-sm font-medium'>
                  {currentQuestionIndex + 1} of 10
                </span>
              </div>




                <h1 className='my-24 md:text-3xl text-2xl font-normal text-center md:px-24'>
                  {currentQuestion.question}
                </h1>


              <div className="flex items-center justify-center mb-6 gap-8">
                <button className='bg-green px-5 py-2 rounded-md text-white text-xl'  onClick={() => handleAnswer('True')} >
                  True
                </button>
                <button className='bg-orange px-5 py-2 rounded-md text-white text-xl' onClick={() => handleAnswer('False')} >
                  False
                </button>
              </div>
            </div>
          )
        :
        (
          <div>
            <p>No Questions</p>
          </div>
        )
      }

      </div>
    </section>
  )
}

export default QuizSection
