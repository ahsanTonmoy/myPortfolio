'use client'
import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container } from '@mui/material';
import React from 'react';
import aboutimg from '../../../assects/image/about.webp'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/animetions/Varients/fadeIn';
const Myinfo = () => {
    return (
        <div>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
            >
                <Container className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/*  */}
                    <Box className='border border-[#2a1454] p-8 rounded-md grid gap-2'>
                        {/*  */}
                        <SectionTitle TitleContent={'Achievements in my professional life.'} />

                        {/* content */}
                        <Box>
                            Since beginning my journey as a web developer nearly 1 years ago, I &apos;ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.
                        </Box>

                        {/*  */}
                        <Box>
                            <button className='bg-[#8750f7] capitalize font-bold px-6 py-2 rounded-full'>contact me</button>
                        </Box>
                    </Box>
                    {/*  */}
                    <Box className='border border-[#2a1454] p-4 rounded-md'>

                        <Container className=''>
                            {/* title */}
                            <div className='font-bold text-xl uppercase'>
                                mern stack developer
                            </div>

                            {/*  */}
                            <div className=' py-4'>
                                As a mern stack developer, I work closely with clients to understand their needs and goals for their software or website.
                            </div>

                            {/*  */}

                            <div>
                                <Image width='100%' src={aboutimg} alt='' />
                            </div>
                        </Container>
                    </Box>
                </Container>
            </motion.div>

        </div>
    );
};

export default Myinfo;