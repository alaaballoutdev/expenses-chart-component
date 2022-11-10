import React from 'react'
import  logo from  '../logo.svg';
const Balance = () => {
  return (
    <div className='island'>
      <div> 
        <p className='title-balance'>My balance</p>
        <p className='balance'>$921.48</p>
      </div>
      <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Balance
