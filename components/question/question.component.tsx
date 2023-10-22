import React from 'react'

const Question = ({question}:{question:string}) => {
  return (
    <label className='text-violet-900 text-xl mb-3'>{question}</label>
  )
}

export default Question