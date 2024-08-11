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
import bannar1 from '../../assects/image/bannar/Bannar1.png'

const Bannar = () => {
    return (
        <div>
            <Container className='p-2 md:p-10'>
                <Box className=' p-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sectionTitle">
                        {/* text */}
                        <Box className=' grid gap-8'>
                            <div className=" font-bold text-4xl text-[#d9d9d9] "> I am AR Tonmoy</div>

                            <div className=' capitalize md:text-[60px] text-4xl tracking-widest bg-gradient-to-r from-[#7636f8] to-white inline-block text-transparent bg-clip-text font-bold leading-tight	'>mern stack web developer</div>

                            <div className="">
                                I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                            </div>

                            <div className='grid lg:grid-cols-2 gap-4 justify-items-center'>
                                {/* btns */}
                                <Link  href={'https://drive.google.com/file/d/1F5Yc6C4yVOnA_ps691hNneoEYYXG08sQ/view?usp=drive_link'} target="_blank">
                                 <Button className='text-[#8750f7] border-[#8750f7] hover:border-[#8750f7] rounded-full font-bold px-8' variant="outlined" endIcon={<CloudDownloadOutlinedIcon />} >
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
                        </Box>
                        {/* image */}
                        <Box>
                            <Container className='px-8 py-10 grid justify-items-center '>
                                <Box>
                                    <Image className='' src={bannar1} alt='bannar'></Image>
                                </Box>
                            </Container>
                        </Box>
                    </div>
                </Box>
            </Container>

            {/*  */}
            <div className='pt-16'>
                <Silder />
            </div>
        </div>
    );
};

export default Bannar;