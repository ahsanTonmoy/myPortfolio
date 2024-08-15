"use client"
import { Box, Button, Container } from '@mui/material';
import React from 'react';
import './style/style.css'
// 
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import Silder from './Silder';
import Image from 'next/image';
import bannar1 from '../../assects/image/bannar/13_generated.png'
import { motion } from "framer-motion"
import { animate } from "framer-motion/dom"

// 
// 
const Bannar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .6 }}>
            <Container className='p-2 md:p-10'>
                <Box className=' p-4 py-0'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sectionTitle">
                        {/* image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2.7 }} className='lg:hidden block'>
                            <Container className=' py-4 grid justify-items-center '>
                                <Box className=''>
                                    <Image className='w-fit' src={bannar1} alt='bannar'></Image>
                                </Box>
                            </Container>
                        </motion.div>
                        {/* text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }} className=' grid gap-8'>
                            <div>
                                <div className="leading-tight font-bold uppercase text-4xl text-[#d9d9d9] ">hello. I am Tonmoy</div>
                            </div>

                            <div className=' uppercase md:text-[50px] text-4xl tracking-widest bg-gradient-to-r from-[#7636f8] to-white inline-block text-transparent bg-clip-text font-bold leading-tight'>full stack (mern) <br/> web developer</div>

                            <div className="">
                                I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                            </div>

                            <div className='grid lg:grid-cols-2 gap-4 justify-items-center lg:justify-items-start'>
                                {/* btns */}
                                <Link href={'https://drive.google.com/file/d/1F5Yc6C4yVOnA_ps691hNneoEYYXG08sQ/view?usp=drive_link'} target="_blank">
                                    <Button className='text-[#8750f7] text-base border-[#8750f7] hover:border-[#8750f7] w-full rounded-full font-bold px-12' variant="outlined" endIcon={<CloudDownloadOutlinedIcon />} >
                                        download cv
                                    </Button>
                                </Link>


                                {/*  */}

                                <Box className='social-icon flex gap-4 flex-wrap justify-center'>
                                    {/*  */}
                                    <Link href={'https://www.facebook.com/profile.php?id=100010579990810'}><FaFacebookF></FaFacebookF></Link>
                                    {/*  */}
                                    <Link href={'/'}><FaTwitter></FaTwitter></Link>
                                    {/*  */}
                                    <Link href={'https://www.linkedin.com/in/ahsanur-rahman-tonmoy-1680921b6'}><FaLinkedinIn></FaLinkedinIn></Link>
                                    {/*  */}
                                    <Link href={'https://github.com/ahsanTonmoy'}><FaGithub></FaGithub></Link>
                                </Box>
                            </div>
                        </motion.div>
                        {/* image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2.7 }} className='hidden lg:block'>
                            <Container className=' py-10 grid justify-items-center '>
                                <Box className=''>
                                    <Image className='w-fit' src={bannar1} alt='bannar'></Image>
                                </Box>
                            </Container>
                        </motion.div>
                    </div>
                </Box>
            </Container>

            {/*  */}
            <div className='pt-16'>
                <Silder />
            </div>
        </motion.div>
    );
};

export default Bannar;