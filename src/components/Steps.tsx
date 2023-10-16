import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext';

interface iStep{
    step: number,
    info: string
}


const Steps = () => {
    
    const { step } = useContext(MainContext)
    let steps: iStep[] = [{step:1, info: 'YOUR INFO'}, {step: 2, info: 'SELECT PLAN'}, {step: 3, info: 'ADD-ONS'}, {step: 4, info: 'SUMMARY'}]
    
    const stepColor = (el : iStep) => {
        if (step === el.step){
            return "text-primary-MarineBlue bg-primary-LightBlue border-primary-LightBlue border-2 rounded-full w-8 h-8 flex items-center justify-center"
        }
        else{
            return "bg-none text-white border-white border-2 rounded-full w-8 h-8 flex items-center justify-center"
        }
    }

    
    
        return (
        <ul className='flex h-40 justify-center space-x-4 m-auto items-center pb-16'>
            {steps.map((el) => 
            <li key={el.step} className={stepColor(el)}>
                <article><p className='hidden md:flex'>STEP</p><span>{el.step}</span></article>
                <p className='hidden md:flex'>{el.info}</p>
            </li>
            )}
        </ul>
    )

}

export default Steps