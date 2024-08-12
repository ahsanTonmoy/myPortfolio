'use client'
import AboutMe from '@/components/ui/aboutMe/AboutMe';
import React from 'react';
import './style.css'
import MySkills from '@/components/ui/mySkills/MySkills';
import RecentRork from '@/components/ui/recentWork/RecentRork';
import MyProfile from '@/components/ui/myProfile/MyProfile';
import Contact from '@/components/ui/contact/Contact';
import Myinfo from '@/components/pages/about/Myinfo';
import { motion } from "framer-motion"



const HomePage = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, amount: 0.8 }}
    viewport={{ once: true }} className='wrepperArea'>
      {/*  */}
      <div className='bgDark'><Myinfo></Myinfo></div>
      {/*  */}
      <div className='Dark'><MySkills></MySkills></div>
      {/*  */}
      <div className='bgDark'><RecentRork></RecentRork></div>
      {/*  */}
      <div className='Dark'><MyProfile/></div>
      {/*  */}
      <div className='bgDark'><Contact></Contact></div>
    </motion.div>
  );
};

export default HomePage;