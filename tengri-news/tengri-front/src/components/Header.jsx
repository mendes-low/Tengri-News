import React from 'react'
import { Link } from 'react-router-dom'

// ===== Material Icons ===== //
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


const Header = () => {
    return (
        <header className='flex flex-col'>
            <div className=' h-[60px] bg-[#303133] flex items-center justify-around'>
                <div>
                    <ul className='flex items-center space-x-5 text-white'>
                        <li className='hover:cursor-pointer hover:border-b-[3.5px] hover:border-[#32A801]'>
                            <Link to='/'>NEWS</Link>
                        </li>
                        <li className='hover:cursor-pointer'>
                            LIFE
                        </li>
                        <li className='hover:cursor-pointer'>
                            SPORT
                        </li>
                        <li className='hover:cursor-pointer'>
                            TRAVEL
                        </li>
                        <li className='hover:cursor-pointer'>
                            GUIDE
                        </li>
                        <li className='hover:cursor-pointer'>
                            EDU
                        </li>
                        <li className='hover:cursor-pointer'>AUTO</li>
                    </ul>
                </div>
                <div className='flex items-center space-x-5 text-[12px] text-white'>
                    <div className='flex items-center  space-x-1.5'>
                        <CloudOutlinedIcon className='' />
                        <p>11°C</p>
                    </div>
                    <div className='flex items-center space-x-0.5'>
                        <AttachMoneyOutlinedIcon className='' />
                        <p>435</p>
                    </div>
                    <div className='flex items-center space-x-1.5'>
                        <EuroOutlinedIcon className='' />
                        <p>455</p>
                    </div>
                    <div className='flex items-center space-x-1.5'>
                        <CurrencyRubleOutlinedIcon className='' />
                        <p>4.6</p>
                    </div>
                    <div className='flex items-center space-x-1.5'>
                        <p>Редакция</p>
                        <WhatsAppIcon className='text-[#32A801]' />
                        <p>+7 (777) 001 44 09</p>
                    </div>
                    <div className='flex items-center space-x-1.5'>
                        <p>Реклама</p>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header