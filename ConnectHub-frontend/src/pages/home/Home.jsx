import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css';
import Auth from '../Auth/Auth';
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
        <Auth/>
    </div>
  )
}

export default Home