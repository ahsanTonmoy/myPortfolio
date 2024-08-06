import AboutMe from '@/components/ui/aboutMe/AboutMe';
import Bannar from '@/components/ui/Bannar';
import React from 'react';
import './style.css'
import MySkills from '@/components/ui/mySkills/MySkills';
import RecentRork from '@/components/ui/recentWork/RecentRork';
import MyProfile from '@/components/ui/myProfile/MyProfile';
import Head from 'next/head';



const HomePage = () => {
  return (
    <div className='wrepperArea'>
    
      {/*  */}
      <div className='bannar'><Bannar /></div>
      {/*  */}
      <div> </div>
      <div className='Dark'>
        <AboutMe></AboutMe>
      </div>
        
      {/*  */}
      <div className='bgDark'>
        <MySkills></MySkills>
      </div>

      {/*  */}
      <div className='Dark'><RecentRork></RecentRork></div>
      {/*  */}
      <div className='bgDark'>
        <MyProfile/>
      </div>
    </div>
  );
};

export default HomePage;