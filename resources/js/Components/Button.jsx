import React from 'react'

function Button({children, text, link}) {
  return (
    <a className='mt-8' target='_blank' href={link}>
        <div className='flex items-center font-light drop-shadow-xl px-4 p-2.5 h-10 rounded-xl bg-white/30 backdrop-blur-sm ring-1 ring-white/30 hover:bg-black/15 transition-all'>
            <p>{text}</p>
        </div>
    </a>
  )
}

export default Button