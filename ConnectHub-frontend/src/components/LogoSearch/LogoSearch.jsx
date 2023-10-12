import React from 'react'
// import Logo from '../../img/logo.png'
import Chub from '../../img/chub.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
   <div className="LogoSearch">
   <div className="logo-img">
       <img className='logoimg' src={Chub} alt="C-Hub"/>
       </div>
       <div className="Search">
           <input type="text" placeholder='#Explore' />
           <div className="s-icon">
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default LogoSearch