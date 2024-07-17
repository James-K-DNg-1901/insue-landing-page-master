import React from 'react'
import Element from '../element'
import iconSnappy from '../../assets/images/icon-snappy-process.svg'
import iconAffordable from '../../assets/images/icon-affordable-prices.svg'
import iconPeople from '../../assets/images/icon-people-first.svg'
import FinalBox from '../finalBox'

function WebBody() {
    return (
        <div className=' w-screen max-md:h-auto flex flex-col items-center
                     justify-center mt-48 gap-10'
        >
            <div className='w-101 max-[800px]:w-64 flex justify-start max-md:justify-center'>
                <h2 className='text-4xl text-Very-Dark-Violet font-DM-serif-display'>
                    We're Different
                </h2>
            </div>
            <div className='w-101 max-[800px]:w-screen flex justify-between items-center max-md:flex-col'>
                <Element
                    img={iconSnappy}
                    title='Snappy Process'
                    paragraph="Our application process can be completed in minutes, 
                            not hours. Don't get stuck filling in tedious forms."
                />
                <Element
                    img={iconAffordable}
                    title='Affordable Prices'
                    paragraph="We don't want you worrying about high monthly costs. Our prices may be low, 
                            but we still offer the best coverage possible."
                />
                <Element
                    img={iconPeople}
                    title='People First'
                    paragraph="Our plans aren't full of conditions and clauses to prevent payouts. We make 
                            sure you're covered when you need it."
                />
            </div>
            <FinalBox/>
        </div>
    )
}

export default WebBody
