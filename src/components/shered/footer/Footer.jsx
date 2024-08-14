'use client'
import { Box, Container } from "@mui/material";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AdbIcon from '@mui/icons-material/Adb';import Menu from "../menu/Menu";

import { usePathname } from 'next/navigation';
 const Footer = () => {
    const pathName = usePathname();
    const page = [

        {
            route: 'home',
            pathName: '/'
        },
        {
            route: 'about',
            pathName: '/about'
        },
        {
            route: 'service',
            pathName: '/service'
        },
        {
            route: 'contact',
            pathName: '/contact'
        },
        {
            route: 'blogs',
            pathName: '/blogs'
        },
    ]
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
                    <ul className={` flex flex-wrap text-center gap-4 justify-center font-semibold uppercase text-sm`}>
                        {page.map((page) => (
                            <Link key={page} className={`${pathName === page.pathName ? 'hover:bg-gradient-to-l bg-gradient-to-r from-[#6c3ccb] to-[#2a1454] rounded-full px-6 py-2' : 'hover:bg-gradient-to-l from-[#6c3ccb] to-[#2a1454] rounded-full px-6 py-2 lg:hover:ml-2'}`} href={page.pathName}>{page.route}</Link>
                        ))}
                    </ul>
                    </Box>

                    {/*  */}
                    <Box>
                        <div className="bg-gradient-to-r from-[#8750f7]  to-white inline-block text-transparent bg-clip-text text-lg">© 2024 All rights reserved by <Link href='/'>Tonmoy</Link></div>
                    </Box>


                </Container>
            </div>
        </div>
    );
};

export default Footer;