import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container } from '@mui/material';
import React from 'react';

import Image from 'next/image';
import { BsArrowUpRight } from "react-icons/bs";
// image
import bistroBoss from '../../../assects/image/work/bistroBoss.png';
import fruitBrust from '../../../assects/image/work/fruit-brust.jpg';
import phTube from '../../../assects/image/work/ph-tube.jpg';
import gameHunt from '../../../assects/image/work/game-hunting.jpg';
import summerSale from '../../../assects/image/work/summer-sale.jpg';
export const projects= [
        {
            title: 'bistro boss Restaurant',
            shots: bistroBoss,
            description: 'Online Food Order & restaurent booking system'
        },
        {
            title: 'fruit brust',
            shots: fruitBrust,
            description: 'Online fruit shop , best food for online'
        },
        {
            title: 'ph tube',
            shots: phTube,
            description: 'online video sharing platform'
        },
        {
            title: 'game hunt',
            shots: gameHunt,
            description: 'Online  gameing platfurm chose you febarite game'
        },
    ]
const RecentRork = () => {
    
    return (
        <div>
            <Container className=''>
                {/*  */}
                <Box className=''>
                    <SectionTitle TitleContent={'my recent work :-'}/>
                </Box>

                {/* content */}
                <Box className=' border-[#2a1454] bg-black p-3 md:p-12 rounded-md '>
                    <Box className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {
                            projects.map(item => 
                                <Box className=' p-4 md:p-10 pb-0 bgDark hover:border border-[#7636f8] rounded-xl relative item cursor-pointer' key={item}>
                                    <Image className=' h-[500px]' src={item.shots} alt={item.title}></Image>

                                    <Box className='bg-gradient-to-r from-[#814cec] to-[#2a1454] p-4 rounded-2xl absolute bottom-5 left-4 md:left-5 w-11/12 mx-auto gap-4 grid hoverCnt capitalize'>
                                        <div className="text-2xl font-bold ">{item.title}</div>
                                        <div className="">{item.description}</div>
                                        <div className="absolute right-6 top-1/3 font-black text-3xl"><BsArrowUpRight/></div>
                                    </Box>
                                </Box>
                            )
                        }
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default RecentRork;