import React from 'react'

interface iStep{
    step: number,
    info: string
}
const Steps = () => {
    
    let steps: iStep[] = [{step:1, info: 'YOUR INFO'}, {step: 2, info: 'SELECT PLAN'}, {step: 3, info: 'ADD-ONS'}, {step: 4, info: 'SUMMARY'}]
    
        return (
        <ul className='flex h-40 justify-center space-x-4 m-auto items-center'>
            {steps.map((el) => 
            <li key={el.step} className='border-white border-2 rounded-full w-8 h-8 flex items-center justify-center text-white'>
                <article><p className='hidden md:flex'>STEP</p><span>{el.step}</span></article>
                <p className='hidden md:flex'>{el.info}</p>
            </li>
            )}
        </ul>
    )

}

export default Steps