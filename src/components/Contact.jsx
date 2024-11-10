import React from 'react'
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <div id='contact' className='section relative w-full work-sans py-20'>
      <div className='h-full w-full flex-col  flex lpy-10 lg:py-0 px-5 lg:px-20 items-center justify-center gap-10 lg:gap-20'>
        <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3  gap-5 flex-col lg:flex-row justify-between text-xl'>
          <div className='flex flex-col  bg-black/40 rounded-2xl border border-white/20 gap-2 p-5'>
            <div className='font-semibold text-gray-500  text-2xl flex gap-2 items-center'><MdEmail /> Elektron pochta</div>
          <div>info@dominantsoft.com</div>
          </div>
          <div className='group flex flex-col bg-black/40 lg:hover:bg-black/40 rounded-2xl border lg:bg-tea transition-all duration-500 border-white/20 gap-4 p-5'>
            <div className='font-semibold lg:self-center lg:group-hover:self-start  text-gray-500 lg:translate-y-6 lg:group-hover:translate-y-0 transition-all duration-500 text-2xl flex gap-2 items-center'><IoCall /> Bog'lanish</div>
          <div className='lg:group-hover:text-tea lg:group-hover transition-all duration-500 lg:text-transparent'> <a href='tel:+998994684919' className=' underline-offset-8'>+998994684919</a> <span className='w-5 h-3 lg:h-0 flex lg:inline-block'></span> <a href='tel:+998911499913' className='underline-offset-8'>+998911499913</a></div>
          </div>
          <div className='flex flex-col bg-black/40 rounded-2xl border border-white/20 gap-2 p-5'>
          
            <div className='font-semibold  text-gray-500 text-2xl flex gap-2 items-center'> <FaLocationDot /> Manzil</div>
          <div className='leading-10'>O'zbekistan, Tashkent Index, D-2</div>
          </div> 
          <div className='flex gap-2 lg:gap-5 flex-wrap '>
            
            </div>
    </div>
    <div className='flex gap-5 flex-col lg:flex-row'>

      <a href="https://t.me/DOMINANTSOFT" target="_blank" rel="noopener noreferrer" className='flex  items-center  gap-2 bg-black/40 rounded-2xl border border-white/20 px-5 py-3 hover:bg-tea hover:text-navy transition-all duration-300'>
      <FaTelegramPlane />
        Telegram
      </a>
      <a href="https://www.instagram.com/dsd__group" target="_blank" rel="noopener noreferrer" className=' flex  items-center  gap-2 bg-black/40 rounded-2xl border border-white/20 px-5 py-3 hover:bg-tea hover:text-navy transition-all duration-300'>
      <FaInstagram />
        Instagram
      </a>
      <a href="https://youtube.com/@dsd-group?si=Dn1gJAE15nQsQ9aD" target="_blank" rel="noopener noreferrer" className='flex  items-center  gap-2 bg-black/40 rounded-2xl border border-white/20 px-5 py-3 hover:bg-tea hover:text-navy transition-all duration-300'>
      <FaYoutube />
        Youtube
      </a>
        </div>
      </div>
    </div>
  )
}

export default Contact