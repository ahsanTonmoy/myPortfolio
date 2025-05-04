import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container } from '@mui/material';
import React from 'react';

import Image from 'next/image';
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link';
import { projects } from '@/utills/projects';
const RecentRork = () => {
    return (
        <div>
            <Container className=''>
                {/*  */}
                <Box className=''>
                    <SectionTitle TitleContent={'my recent work :-'}/>
                </Box>

                {/* content */}
                <Box className=' p-3 md:p-12 rounded-md '>
                    <Box className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {
                            projects.map(item => 
                                <Link href={`/${item.id}`} className='h-[500px] p-4 md:p-10 pb-0 bgDark hover:border border-[#7636f8] rounded-xl relative item cursor-pointer' key={item}>
                                    <Image className='rounded-xl' src={item.image} fill alt={item.title}></Image>

                                    <Box className='bg-gradient-to-r from-[#814cec] to-[#2a1454] p-4 rounded-2xl absolute bottom-5 left-4 md:left-5 w-11/12 mx-auto gap-4 grid hoverCnt capitalize'>
                                        <div className="text-2xl font-bold ">{item.title}</div>
                                        <div className="">{item.description}</div>
                                        <div className="absolute right-6 top-1/3 font-black text-3xl"><BsArrowUpRight/></div>
                                    </Box>
                                </Link>
                            )
                        }
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default RecentRork;