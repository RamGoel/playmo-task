
"use client";
import React, { useEffect, useState } from 'react'
import { questionsData } from '@/utils/data';
import { useRouter } from 'next/navigation';
const Form = () => {

  const [index, setIndex] = useState(0)
  const [currentValue, setCurrentValue] = useState<any>(null)
  const ref = React.useRef(null);
  const router = useRouter()
  useEffect(() => {
    // @ts-ignore
    ref?.current?.focus()
  }, [])

  return (
    <div className='main-form h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col w-1/3'>
        <label className='text-violet-900 text-xl mb-3'>{questionsData[index].question}</label>

        <div className='flex flex-col'>
          {
            questionsData[index].choices ? questionsData[index]?.choices.map((option, i) => {
              return (
                <button
                  key={i}
                  className={`rounded-lg border-2 py-2 my-2 ${currentValue === i ? 'bg-violet-900' : 'border-gray-300'}`}
                  onClick={() => setCurrentValue(i)}
                >
                  <p className={`text-md text-black ${currentValue === i ? 'text-white' : ''}`}>{option}</p>
                </button>
              )
            }) : <input
              ref={ref}
              onChange={(e) => setCurrentValue(e.target.value)}
              className='p-3 w-full focus-visible:outline-none border-2 rounded-xl border-violet-900 text-violet-900'
              type={questionsData[index].inputType}
              placeholder={questionsData[index].placeholder}
            />
          }

          <button disabled={currentValue == null} onClick={() => {
            console.log(currentValue)
            const val = questionsData[index].nextQuestionIndex(currentValue)
            if (val !== -1 && val !== undefined) {
              setIndex(val)
            } else {
              router.push('/success')
            }
            setCurrentValue(null)
          }} className={`${currentValue===null?'bg-gray-300':'bg-violet-900'} h-12 w-12 rounded-full mt-2`}
            style={{ marginLeft: 'auto' }}>
            <p className={` ${currentValue === null ? 'text-black' : 'text-white'} text-xl`}>→</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form