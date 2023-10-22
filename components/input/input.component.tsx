import React, { useEffect, useRef } from 'react'

interface InputStateProps {
    handler: (value: string) => void,
    inputType: string,
    placeholder: string,
    value: any
}
const Input = ({handler,value, inputType, placeholder}:InputStateProps) => {
    const ref = useRef(null);

    useEffect(() => {
        // @ts-ignore
        ref?.current?.focus()
    }, [])
    return (
        <input
            ref={ref}
            value={value}
            onChange={(e) => handler(e.target.value)}
            className='p-3 w-full focus-visible:outline-none border-2 rounded-xl border-violet-900 text-violet-900'
            type={inputType}
            placeholder={placeholder}
        />
    )
}

export default Input