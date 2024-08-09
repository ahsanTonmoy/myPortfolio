'use client'
import { Box, Container } from "@mui/material";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AdbIcon from '@mui/icons-material/Adb';import Menu from "../menu/Menu";
 const Footer = () => {
    return (
        <div>
            <div className=" bg-[#0f0715] m-0">
                <Container className="p-4 md:p-10 grid grid-cols-1 justify-items-center text-center gap-6">
                    {/*  */}
                    <Box className='social-icon flex gap-4 flex-wrap'>
                        {/*  */}
                        <Link href={'https://www.facebook.com/profile.php?id=100010579990810'}><FaFacebookF></FaFacebookF></Link>
                        {/*  */}
                        <Link href={'/'}><FaTwitter></FaTwitter></Link>
                        {/*  */}
                        <Link href={'https://www.linkedin.com/in/ahsanur-rahman-tonmoy-1680921b6'}><FaLinkedinIn></FaLinkedinIn></Link>
                        {/*  */}
                        <Link href={'https://github.com/ahsanTonmoy'}><FaGithub></FaGithub></Link>

                    </Box>

                    {/*  */}
                    <Box>
                        <AdbIcon className="text-5xl" />
                    </Box>

                    {/*  */}
                    <Box>
                        <Menu display={`flex flex-wrap gap-3`}></Menu>
                    </Box>

                    {/*  */}
                    <Box>
                        <div className="bg-gradient-to-r from-[#8750f7]  to-white inline-block text-transparent bg-clip-text text-lg">© 2024 All rights reserved by <Link hraf='/'>Tonmoy</Link></div>
                    </Box>


                </Container>
            </div>
        </div>
    );
};

export default Footer;