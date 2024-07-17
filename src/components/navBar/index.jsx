import React, { useState } from 'react'
import iconLogo from '../../assets/images/logo.svg'
import iconClose from '../../assets/images/icon-close.svg'
import iconHamburger from '../../assets/images/icon-hamburger.svg'

function NavBar() {

    const [openMenu, setOpenMenu] = useState(false)
    const [Menu, setMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(!openMenu)
        setMenu(!Menu)
    }

    return (
        <div
        className='
            w-screen h-22 py-3 px-28 max-[500px]:px-3
            flex justify-between items-center
            max-[500px]:gap-48
            bg-white text-Grayish-Blue text-xs 
            uppercase font-Kalars font-bold max-md:relative'
        >
            <img src={iconLogo} alt="logo" />
            <div
            className={`
                w-auto max-md:absolute z-30 bg-white
                flex justify-center items-center gap-6 
                max-md:h-48 max-md:w-full max-[500px]:w-screen max-md:flex-col
                max-md:bg-Very-Dark-Violet top-14 left-0
                ${Menu ? '' :'max-md:hidden'}`} 
            >
                <p className='cursor-pointer hover:text-Dark-Violet max-md:text-Very-Light-Gray hover:max-md:text-Grayish-Blue'>blog</p>
                <p className='cursor-pointer hover:text-Dark-Violet max-md:text-Very-Light-Gray hover:max-md:text-Grayish-Blue'>how we work</p>
                <p className='cursor-pointer hover:text-Dark-Violet max-md:text-Very-Light-Gray hover:max-md:text-Grayish-Blue'>account</p>
                <div className='
                    w-32 h-10 flex justify-center items-center
                    cursor-pointer border-2
                    max-md:border-Very-Light-Gray max-md:text-Very-Light-Gray
                    border-Very-Dark-Violet text-Very-Dark-Violet
                    hover:border-Very-Light-Gray
                    hover:bg-Very-Dark-Violet hover:text-Very-Light-Gray
                    hover:max-md:border-Grayish-Blue hover:max-md:text-Grayish-Blue'
                >
                    view plans
                </div>
            </div>
            <img onClick={handleClick} className='md:hidden cursor-pointer ' src={openMenu ? iconClose : iconHamburger} alt="menu-icon" />
        </div>
    )
}

export default NavBar
