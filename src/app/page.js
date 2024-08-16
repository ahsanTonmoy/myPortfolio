'use client'
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
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.6 }} className='Dark'><MySkills></MySkills></motion.div>
      {/*  */}
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.6 }}  className='bgDark'><RecentRork></RecentRork></motion.div>
      {/*  */}
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.6 }} className='Dark'><MyProfile/></motion.div>
      {/*  */}
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.6 }} className='bgDark'><Contact></Contact></motion.div>
    </motion.div>
  );
};

export default HomePage;