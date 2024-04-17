import React from 'react'

// ===== Material Icons ===== //
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '../assets/images/InstagramIcon.svg';
import TelegramIcon from '../assets/images/TelegramIcon.svg';
import FacebookIcon from '../assets/images/FacebookIcon.svg';
import XIcon from '../assets/images/XIcon.svg';
import YouTubeIcon from '../assets/images/YouTubeIcon.svg';
import VkIcon from '../assets/images/VkIcon.svg';
import TiktokIcon from '../assets/images/TiktokIcon.svg';
import WhatsappIcon from '../assets/images/WhatsappIcon.svg';


const Footer = () => {
  return (
    <div className='bg-[#303133] flex flex-col items-center mt-[100px] text-white'>
      <div className='flex justify-between my-auto space-x-10 border-b-2 border-[#545454] border-solid w-[1200px]'>
        <img className='footer-images' src="https://tengrinews.kz/tengri_new/img/tengri-news.svg" />
        <img className='footer-images' src="https://tengrinews.kz/guide/img/tengri-life.svg" />
        <img className='footer-images' src="https://tengrinews.kz/guide/img/tengri-sport.svg" />
        <img className='footer-images' src="https://tengrinews.kz/guide/img/tengri-travel.svg" />
        <img className='footer-images' src="https://tengrinews.kz/edu/img/tengri-guide.svg" />
        <img className='footer-images' src="https://tengrinews.kz/guide/img/tengri-edu.svg" />
        <img className='footer-images' src="https://tengrinews.kz/tengri_sport/img/tengri-auto.svg" />
      </div>
      <div className='grid grid-cols-6 pt-7 gap-x-7 border-b-2 border-[#545454] border-solid'>
        <p className='footer-text'>Погода в Казахстане</p>
        <p className='footer-text'>Карта сайта</p>
        <p className='footer-text'>Новости Алматы</p>
        <p className='footer-text'>Новости Астаны</p>
        <p className='footer-text'>Новости Шымкента</p>
        <p className='footer-text'>Новости Караганды</p>
        <p className='footer-text'>Новости Актобе</p>
        <p className='footer-text'>Новости Усть-Каменогорска</p>
        <p className='footer-text'>Новости Уральска</p>
        <p className='footer-text'>Новости Костаная</p>
        <p className='footer-text'>Новости Кызылорды</p>
        <p className='footer-text'>Новости Атырау</p>
        <p className='footer-text'>Новости Актау</p>
        <p className='footer-text'>Новости США</p>
        <p className='footer-text'>Новости России</p>
        <p className='footer-text'>Новости Украины</p>
        <p className='footer-text'>Новости ЕАЭС</p>
        <p className='footer-text'>Новости Узбекистана</p>
        <p className='footer-text'>Энергетика</p>
        <p className='footer-text'>Преступность</p>
        <p className='footer-text'>События</p>
        <p className='footer-text'>Чрезвычайные происшествия</p>
        <p className='footer-text'>Катастрофы</p>
        <p className='footer-text'>Футбол</p>
        <p className='footer-text'>Теннис</p>
        <p className='footer-text'>Киберспорт</p>
        <p className='footer-text'>Бокс</p>
        <p className='footer-text'>Хоккей</p>
        <p className='footer-text'>Политика</p>
        <p className='footer-text'>Новости спорта</p>
      </div>
      <div className='flex space-x-5 text-[12px] items-center'>
        <b>О проекте</b>
        <b>Контакты редакции</b>
        <b>Вакансии</b>
        <b>Реклама</b>
        <p>Редакция{<WhatsAppIcon className='text-[#32A801]' />} <b>+7 (777) 001 44 99</b></p>
        <p>Реклама{<WhatsAppIcon className='text-[#32A801]' />} <b>+7 (700) 3 888 188</b></p>
        <div className='flex space-x-3 py-2'>
          <div><img src={InstagramIcon} /></div>
          <div><img src={TelegramIcon} /></div>
          <div><img src={VkIcon} /></div>
          <div><img src={FacebookIcon} /></div>
          <div><img src={XIcon} /></div>
          <div><img src={YouTubeIcon} /></div>
          <div><img src={TiktokIcon} /></div>
          <div><img src={WhatsappIcon} /></div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Footer