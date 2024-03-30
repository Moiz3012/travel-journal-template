import React from 'react'
import Path from '../imgs/Path.png'
 function Header() {
  return (
   <header className='journal--header'>
    <img src={Path} alt='World Icon Logo' className='earth--logo'></img>
    <p>my travel journal.</p>
   </header>
  )
}
export default Header;