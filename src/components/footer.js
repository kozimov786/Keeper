import React from 'react'

export default function Footer() {
  return (
      <div className='container fixed-bottom'>
        <p className='text-center'>Copyright Reserved {new Date().getFullYear()}</p>
    </div>
  )
}
