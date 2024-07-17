import React, { useEffect, useState } from 'react'
import introImageDesk from '../../assets/images/image-intro-desktop.jpg'
import introImageMobile from '../../assets/images/image-intro-mobile.jpg'
import patternIntroLeft from '../../assets/images/bg-pattern-intro-left-desktop.svg'
import patternIntroRight from '../../assets/images/bg-pattern-intro-right-desktop.svg'
function WebIntro() {

    return (
        <div className=' w-screen
                bg-Dark-Violet h-96 pt-12
                max-[740px]:pt-0 max-[740px]:h-100
                relative z-0'
        >
            <div className='
                flex gap-3 justify-center 
                max-[740px]:flex-col-reverse max-[740px]:items-center
                '
            >
                <div className='w-94 h-99 flex flex-col justify-start gap-6 max-md:items-center max-md:w-screen max-md:p-5 text-center'>
                    <hr className='bg-Grayish-Blue w-24 border mb-6' />
                    <h1 className='
                        w-82 text-Very-Light-Gray
                        font-DM-serif-display text-5xl
                        leading-9'>
                        Humanizing your insurance.
                    </h1>
                    <p className='text-2xs tracking-wide text-Very-Light-Gray'>
                        Get your life insurance coverage easier and faster. We blend our expertise 
                        and technology to help you find the plan that's right for you. Ensure you 
                        and your loved ones are protected.
                    </p>
                    <div className='
                            w-32 h-10 flex justify-center items-center
                            cursor-pointer border-2 uppercase font-Kalar font-bold
                            border-Very-Light-Gray text-Very-Light-Gray
                            hover:bg-Very-Light-Gray hover:text-Dark-Violet'
                        >
                            view plans
                    </div>
                    <hr className='w-24 border border-Dark-Violet mt-48'/>
                </div>  
                <img className='w-80 h-96 max-[400px]:w-screen' src={introImageDesk} alt="introImage" />
                <img className='w-32 absolute left-0 top-52 max-sm:top-80' src={patternIntroLeft} alt="patternIntroLeft" />
                <img className='w-80 absolute right-0 top-0' src={patternIntroRight} alt="patternIntroright" />
            </div>
        </div>
    )
}

export default WebIntro
