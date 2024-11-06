import React from 'react'

function Contact() {
  return (
    <div id='contact' className='section relative w-full work-sans lg:h-screen min-h-screen'>
      <div className='h-full w-full flex-col lg:flex-row flex py-20 lg:py-0 px-5 lg:px-20 items-center justify-center gap-20'>
        <div className='flex lg:w-1/3 gap-5 flex-col p-5 text-xl'>
          <div className='flex flex-col  bg-black/40 rounded-2xl border border-white/20 gap-2 p-5'>
            <div className='font-semibold text-gray-500  text-2xl'>Elektron pochta</div>
          <div>info@dominantsoft.com</div>
          </div>
          <div className='flex flex-col bg-black/40 rounded-2xl border border-white/20 gap-2 p-5'>
            <div className='font-semibold  text-gray-500 text-2xl'>Bog'lanish</div>
          <div>+998994684919 <span className='w-10 inline-block'></span> +998911499913</div>
          </div>
          <div className='flex flex-col bg-black/40 rounded-2xl border border-white/20 gap-2 p-5'>
            <div className='font-semibold  text-gray-500 text-2xl'>Manzil</div>
          <div>Toshkent, O'zbekiston</div>
          </div>
          <div className='flex gap-2 lg:gap-5 flex-wrap '>
      <a href="https://t.me/DOMINANTSOFT" target="_blank" rel="noopener noreferrer" className='bg-black/40 rounded-2xl border border-white/20 px-5 py-3 hover:bg-tea hover:text-navy transition-all duration-300'>
        Telegram
      </a>
      <a href="https://www.instagram.com/dsd__group" target="_blank" rel="noopener noreferrer" className='bg-black/40 rounded-2xl border border-white/20 px-5 py-3 hover:bg-tea hover:text-navy transition-all duration-300'>
        Instagram
      </a>
      <a href="https://youtube.com/@dsd-group?si=Dn1gJAE15nQsQ9aD" target="_blank" rel="noopener noreferrer" className='bg-black/40 rounded-2xl border border-white/20 px-5 py-3 hover:bg-tea hover:text-navy transition-all duration-300'>
        Youtube
      </a>
    </div>
        </div>
        <div className='rounded-2xl h-40 lg:h-1/2 w-full lg:w-1/3 bg-black/40 border border-white/20'>
          <div>MAP</div>
        </div>
      </div>
    </div>
  )
}

export default Contact