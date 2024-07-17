import React from 'react'
import FooterDetail from '../footerDetail'
import iconLogo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import instagram from '../../assets/images/icon-instagram.svg'


function WebFooter() {
    return (
        <div className='w-screen h-64  px-28 py-8 mt-24 flex flex-col justify-between
                        max-md:items-center max-md:h-101'
        >
            <div className='flex justify-between max-sm:flex-col max-sm:h-20'>
                <img className='w-36' src={iconLogo} alt="iconLogo" />
                <div className='flex gap-2'>
                    <img className='cursor-pointer contact' src={facebook} alt="facebook" />
                    <img className='cursor-pointer' src={twitter} alt="twitter" />
                    <img className='cursor-pointer' src={pinterest} alt="pinterest" />
                    <img className='cursor-pointer' src={instagram} alt="instargram" />
                </div>
            </div>
            <div className='flex justify-between
                            max-md:flex-col max-md:items-center
                            font-Kalar font-bold'
            >
                <FooterDetail 
                    title='Our Company'
                    line1='How we work'
                    line2='Why Insure?'
                    line3='View planes'
                    line4='Reviews'
                />
                <FooterDetail 
                    title='Help me'
                    line1='FAQ'
                    line2='Terms of use'
                    line3='Privacy policy'
                    line4='Cookies'
                />
                <FooterDetail 
                    title='Contact'
                    line1='Sales'
                    line2='Support'
                    line3='Live chat'
                />
                <FooterDetail 
                    title='Others'
                    line1='Careers'
                    line2='Press'
                    line3='Licenses'
                />
            </div>
        </div>
    )
}

export default WebFooter
