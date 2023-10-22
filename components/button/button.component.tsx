import React from 'react'

interface ButtonStateProps {
    arrowText: string,
    handler: () => void,
    isDisabled: boolean

}
const Button = ({ arrowText, handler, isDisabled }: ButtonStateProps) => {
    return (
        <button
            disabled={isDisabled}
            onClick={handler}
            className={`${ isDisabled? 'bg-gray-300' : 'bg-violet-900'} h-12 w-12 rounded-full mt-2`}
        >
            <p className={` ${isDisabled ? 'text-black' : 'text-white'} text-xl`}>{arrowText}</p>
        </button>
    )
}

export default Button