import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container } from '@mui/material';
import React from 'react';
import bistroBoss from '../../../assects/image/work/bistroBoss.png'
import Image from 'next/image';
import { BsArrowUpRight } from "react-icons/bs";const RecentRork = () => {
    const projects= [
        {
            title: 'bistro boss Restaurant',
            shots: bistroBoss,
            description: 'Online Food Order & restaurent booking system'
        },
        {
            title: 'bistro boss Restaurant',
            shots: bistroBoss,
            description: 'Online Food Order & restaurent booking system'
        },
        {
            title: 'bistro boss Restaurant',
            shots: bistroBoss,
            description: 'Online Food Order & restaurent booking system'
        },
        {
            title: 'bistro boss Restaurant',
            shots: bistroBoss,
            description: 'Online Food Order & restaurent booking system'
        },
    ]
    return (
        <div>
            <Container className=''>
                {/*  */}
                <Box className=''>
                    <SectionTitle TitleContent={'my recent work :-'}/>
                </Box>

                {/* content */}
                <Box className='bg-gradient-to-r from-[#302941]  to-[#0f0715] p-6'>
                    <Box className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            projects.map(item => 
                                <Box className='p-10 pb-0 bgDark rounded-xl relative item' key={item}>
                                    <Image src={item.shots} alt={item.title}></Image>

                                    <Box className='bg-gradient-to-r from-[#814cec] to-[#2a1454] p-4 rounded-2xl absolute bottom-5 left-5 w-11/12 mx-auto gap-4 grid hoverCnt'>
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