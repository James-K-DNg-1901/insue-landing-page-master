import React from 'react'

function Element(props) {
    return (
        <div className='w-64 h-44 flex flex-col max-md:items-center '>
            <img
                className='w-12 mb-3' 
                src={props.img} alt="iconElement" />
            <h2 className='font-DM-serif-display text-lg text-Very-Dark-Violet mb-2'>{props.title}</h2>
            <p className='text-xs text-Grayish-Blue'>
                {props.paragraph}
            </p>
        </div>
    )
}

export default Element