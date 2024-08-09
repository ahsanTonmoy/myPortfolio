import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container } from '@mui/material';
import React from 'react';
import { FaHeadSideVirus } from "react-icons/fa";
const MyService = () => {
    const service = [
        {
            title: 'web application',
            description: 'I design and develop amazing Web application that are easy to use, simple, fast and secure.'
        },
        {
            title: 'web development',
            description: 'I develop & modify amazing Web application that are easy to use, simple, fast and secure.'
        },
        {
            title: 'ui/ux design',
            description: 'I design and develop amazing user interface that are easy to use, simple, fast and secure.'
        },
        {
            title: 'graphics design',
            description: 'I design amazing logo, brand image, bannar ect using illustrations.'
        },
    ]
    return (
        <div>
            {/*  */}
            <Container>
                {/*  */}
                <SectionTitle position={'text-center'} TitleContent={'Services'}/>

                {/*  */}
                <Container className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/*  */}
                    {
                        service.map(item=>
                            <Box className='p-10 border rounded-xl grid gap-4 border-[#2a1454]
                            hover: hover:border-white cursor-pointer' key={item}>
                                {/*  */}
                                <div className='text-[#8750f7] hover:text-white text-4xl'>
                                    <FaHeadSideVirus/>
                                </div>
                                {/*  */}
                                <div className=" font-bold uppercase">{item.title}</div>
                                {/*  */}
                                <div className=" text-gray-200 w-5/6">
                                    <article>{item.description}</article>
                                </div>
                            </Box>
                        )
                    }
                </Container>
            </Container>
        </div>
    );
};

export default MyService;