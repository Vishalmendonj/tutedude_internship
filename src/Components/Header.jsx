import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
      <img src="src\assets\tutedude_image.png" alt="" className='tutedude'/>
      <div className='light' id='assignment'>My Assignment</div>
      <div className='light' id='mentor'>Chat with Mentor</div>
      <div className='dark'><img src="src\assets\profile.png" alt="" />  Profile Name</div>
    </>
  )
}

export default Header
