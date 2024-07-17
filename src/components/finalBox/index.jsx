import React from 'react'
import patternHWW from '../../assets/images/bg-pattern-how-we-work-desktop.svg'

function FinalBox() {
    return (
        <div className='w-101 h-40 bg-Dark-Violet text-Very-Light-Gray
                        px-14 flex justify-between items-center
                        relative max-md:w-96 max-md:h-64 max-md:p-10
                        max-md:flex-col max-sm:w-screen'
        >
            <h2 className='w-80 max-[800px]:w-64 font-DM-serif-display text-4xl max-md:text-center'>
                Find out more about how we work
            </h2>
            <div className='w-40 h-10 flex justify-center items-center
                        border-2 border-Very-Light-Gray cursor-pointer
                        font-medium hover:bg-Very-Light-Gray
                        hover:text-Dark-Violet z-10'>
                How we work
            </div>
            <img className='absolute w-72 right-0 z-0 max-md:h-64 max-md:top-0' src={patternHWW} alt="hww" />
        </div>
    )
}

export default FinalBox
