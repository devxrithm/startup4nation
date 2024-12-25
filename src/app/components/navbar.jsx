import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='height-12  flex justify-center mt-12 items-center '>
        <ul className='absolute p-4 flex justify-center items-center gap-5 font-medium text-lg'>
          <li>Home</li>
          <li>About</li>
          <li>Past Events</li>
          <li>Sponsors</li>
          <li>Join Community</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar