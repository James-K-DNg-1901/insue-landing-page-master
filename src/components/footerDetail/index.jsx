import React from 'react'

function FooterDetail(props) {
    return (
        <div className='flex flex-col max-md:items-center'>
            <h3 className='mb-3 text-Very-Dark-Violet'>
                {props.title}
            </h3>
            <p className='text-Grayish-Blue cursor-pointer hover:text-Dark-Violet'>{props.line1}</p>
            <p className='text-Grayish-Blue cursor-pointer hover:text-Dark-Violet'>{props.line2}</p>
            <p className='text-Grayish-Blue cursor-pointer hover:text-Dark-Violet'>{props.line3}</p>
            <p className='text-Grayish-Blue cursor-pointer hover:text-Dark-Violet'>{props.line4}</p>
        </div>
    )
}

export default FooterDetail
