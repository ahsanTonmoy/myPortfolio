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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* text */}
                        <Box className=' grid gap-8'>
                            <div className=" font-bold text-3xl">I am A.R Tonmoy</div>

                            <div className=' capitalize font-extrabold text-[#a685e9] opacity-90 text-5xl  tracking-widest'>mern stack <br /> web developer</div>

                            <div className="">
                                I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                            </div>

                            <div className='grid lg:grid-cols-2 gap-4'>
                                {/* btns */}
                                <Button className='text-[#8750f7] border-[#8750f7] hover:border-[#8750f7] rounded-full font-bold px-4' variant="outlined" endIcon={<CloudDownloadOutlinedIcon />} >
                                    download cv
                                </Button>

                                <Box className='social-icon flex gap-2 flex-wrap justify-center'>
                                    {/*  */}
                                    <Link href={'/'}><FaFacebookF></FaFacebookF></Link>
                                    {/*  */}
                                    <Link href={'/'}><FaTwitter></FaTwitter></Link>
                                    {/*  */}
                                    <Link href={'/'}><FaLinkedinIn></FaLinkedinIn></Link>
                                    {/*  */}
                                    <Link href={'/'}><FaGithub></FaGithub></Link>

                                </Box>
                            </div>
                        </Box>
                        {/* image */}
                        <Box>
                            <Container className='p-4 grid justify-items-center'>
                                <Box>
                                    <Image className='' src={bannar1} alt='bannar'></Image>
                                </Box>
                            </Container>
                        </Box>
                    </div>
                </Box>
            </Container>

            {/*  */}
            <div className=' pb-36'>
                <Silder />
            </div>
        </div>
    );
};

export default Bannar;