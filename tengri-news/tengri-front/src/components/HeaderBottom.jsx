import React, { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const HeaderBottom = ({ search, changeSearch }) => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='flex items-center justify-between '>
            <div className='flex space-x-8 items-center'>
                <div className='flex space-x-3 items-center'>
                    <MenuIcon className='w-full h-full' style={{ fontSize: '37px' }} />
                    <div><img src="https://tengrinews.kz/tengri_new/img/logo.svg" /></div>
                </div>
                <div className='flex space-x-3 items-center'>
                    <b>Новости</b>
                    <b>Статьи</b>
                    <b>Что будет с Казахстаном?</b>
                </div>
            </div>
            <div>
                {showSearch && <input
                    value={search}
                    className='border-2 rounded-lg border-[#02ac02] outline-none'
                    type="search"
                    placeholder='Поиск новостей...'
                    onChange={(e) => changeSearch(e.target.value)}
                />}
            </div>
            <div className='flex items-center space-x-2'>
                <div className='grid place-items-center text-[#02ac02] 
                    font-semibold text-xl rounded-full bg-gray-200 p-2'>
                    KZ
                </div>
                <div className='grid place-items-center text-[#02ac02] 
                    font-semibold text-xl rounded-full bg-gray-200 p-2'>
                    <SearchIcon className='' onClick={() => setShowSearch(!showSearch)} />
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom