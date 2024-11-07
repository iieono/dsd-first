import React from 'react'

function Footer() {
  return (
    <div className='section w-full flex justify-between relative text-black  text-3xl  p-10 pr-20 bg-tea'>
      <div className='flex gap-20'>
        <div className='flex items-center lg:items-start gap-3'><img src='/dsd-logo.png' className='h-12'></img>
        <div className='font-semibold'>DSD</div>
        </div>
        <div className='flex gap-3 text-lg lg:text-xl flex-col'>
          <div><a href='https://t.me/DOMINANTSOFT'>Telegram</a></div>
          <div><a href='https://www.instagram.com/dsd__group'>Instagram</a></div>
          <div><a href='https://youtube.com/@dsd-group?si=Dn1gJAE15nQsQ9aD'>Youtube</a></div>
        </div>
      </div>
      <div>
        <div className='hidden lg:flex gap-3 items-end text-xl flex-col'>
          <div><a href='#about'>Biz haqimizda</a></div>
          <div><a href='#services'>Xizmatlar</a></div>
          <div><a href='#contact'>Bog'lanish</a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer