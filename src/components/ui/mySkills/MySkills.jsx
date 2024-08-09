

import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Container, Box } from '@mui/material';
import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
const MySkills = () => {
    const skills = [
        {
            title: 'html',
            svg: <ImHtmlFive/>,
            persent: '100%',
        },
        {
            title: 'css',
            svg: <SiCss3/>,
            persent: '100%',
        },
        {
            title: 'javascript',
            svg: <TbBrandJavascript/>,
            persent: '100%',
        },
        {
            title: 'react js',
            svg: <FaReact/>,
            persent: '90%',
        },
        {
            title: 'next js',
            svg: <FaReact/>,
            persent: '90%',
        },
        {
            title: 'node',
            svg: <DiNodejs/>,
            persent: '90%',
        },
        {
            title: 'express',
            svg: <SiExpress/>,
            persent: '80%',
        },
        {
            title: 'mongodb',
            svg: <SiMongodb/>,
            persent: '80%',
        },
        {
            title: 'figma',
            svg: <IoLogoFigma/>,
            persent: '80%',
        },
        {
            title: 'graphics design',
            svg: <SiAdobeillustrator/>,
            persent: '70%',
        },
        
    ]
    return (
        <div>
            <Container>
                {/* sec titlt */}
                <SectionTitle position={'text-center'} TitleContent={'my skills'}/>

                <Box className=' '>
                    <Container className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 lg:gap-20 gap-12'>
                        {
                            skills.map(item => 
                                <Box key={item}>
                                    <Box className='bg-[#0f0715] p-4 py-8 grid justify-items-center gap-4 text-3xl rounded-lg border border-[#2a1454] hover:bg-[#7636f8] cursor-pointer'>
                                        <div className="text-4xl">{item.svg}</div>
                                        <div className="text-base text-slate-300">{item.persent}</div>
                                    </Box>

                                    <Box className='text-center p-2 font-semibold uppercase text-[#8750f7] text-sm'>{item.title}</Box>
                                </Box>
                            )
                        }
                    </Container>
                </Box>
            </Container>
        </div>
    );
};

export default MySkills;