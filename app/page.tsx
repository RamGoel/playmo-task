
"use client";
import React, { useEffect, useState } from 'react'
import { questionsData } from '@/utils/data';
import { useRouter } from 'next/navigation';
import Question from '@/components/question/question.component';
import Button from '@/components/button/button.component';
import Option from '@/components/option/option.component';
import Input from '@/components/input/input.component';

interface FormDataTypes {
  [key: string]: string | any[]
}
const Form = () => {
  const [index, setIndex] = useState(0)
  const [formData, setFormData] = useState<FormDataTypes>({})
  const [error, setError]= useState('')
  const router = useRouter()
  

  useEffect(() => {
    const timeoutId=setTimeout(() => {
      setError('')
    }, 2000)
    
    return () => {
      clearTimeout(timeoutId)
    }
  },[error])
  return (
    <div className='main-form h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col w-11/12 md:w-1/2 lg:w-1/3'>
        <Question question={questionsData[index].question} />
        <div className='flex flex-col'>
          {
            questionsData[index].choices ? questionsData[index]?.choices?.map((option, i) => {
              return (
                <Option
                  key={i}
                  text={option}
                  handler={() => {
                    if (questionsData[index].questionType === 'single-choice') {
                      setFormData({ ...formData, [questionsData[index].dataKey]: option })
                      return;
                    } else {
                      if (!formData[questionsData[index].dataKey]) {
                        setFormData({
                          ...formData,
                          [questionsData[index].dataKey]: [option]
                        })
                      } else {
                        
                        setFormData({
                          ...formData,
                          [questionsData[index].dataKey] : [...formData[questionsData[index].dataKey], option]
                        })
                        return;
                      }
                    }
                  }}
                  isSelected={formData[questionsData[index].dataKey]?.includes(option)}
                />
              )
            }) : <Input
              value={formData[questionsData[index].dataKey]}
              handler={(val) => setFormData({ ...formData, [questionsData[index].dataKey]: val })}
              inputType={questionsData[index].inputType}
              placeholder={questionsData[index].placeholder}
            />
          }

          <div className='flex items-center justify-between'>

            <Button arrowText='←' handler={() => {
              setIndex(questionsData[index].prevQuestionIndex())
            }} isDisabled={index === 0} />
            <p className='text-sm transition-all text-red-600 error-message'>{error}</p>
            <Button arrowText='→' handler={() => {
              if (!formData[questionsData[index].dataKey]) {
                if (index === 0) {
                  setError('Please enter date of birth')
                } else {
                  setError('Please select an option')
                }
                return
              }
              const val = questionsData[index].nextQuestionIndex(formData[questionsData[index].dataKey])
              if (val !== -1 && val !== undefined) {
                setIndex(val)
              } else {
                setFormData({})
                router.push('/success')
              }
              console.log(formData)
            }} isDisabled={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form