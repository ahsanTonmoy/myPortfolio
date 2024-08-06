import AboutMe from '@/components/ui/aboutMe/AboutMe';
import Bannar from '@/components/ui/Bannar';
import React from 'react';
import './style.css'
import MySkills from '@/components/ui/mySkills/MySkills';
import RecentRork from '@/components/ui/recentWork/RecentRork';
import MyProfile from '@/components/ui/myProfile/MyProfile';
import Head from 'next/head';
import Contact from '@/components/ui/contact/Contact';



const HomePage = () => {
  return (
    <div className='wrepperArea'>
      {/*  */}
      <div className='bannar'><Bannar /></div>
      {/*  */}
      <div className='bgDark'><AboutMe></AboutMe></div>
      {/*  */}
      <div className='Dark'><MySkills></MySkills></div>
      {/*  */}
      <div className='bgDark'><RecentRork></RecentRork></div>
      {/*  */}
      <div className='Dark'><MyProfile/></div>
      {/*  */}
      <div className='bgDark'><Contact></Contact></div>
    </div>
  );
};

export default HomePage;