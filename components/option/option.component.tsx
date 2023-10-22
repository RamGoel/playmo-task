import React from 'react'

interface OptionStateProps {
    text: string,
    handler: () => void,
    isSelected: boolean
}
const Option = ({text, handler, isSelected}:OptionStateProps) => {
  return (
      <button
          className={`rounded-lg border-2 py-2 my-2 ${isSelected? 'bg-violet-900' : 'border-gray-300'}`}
          onClick={handler}
      >
          <p className={`text-md text-black ${isSelected? 'text-white' : ''}`}>{text}</p>
      </button>
  )
}

export default Option