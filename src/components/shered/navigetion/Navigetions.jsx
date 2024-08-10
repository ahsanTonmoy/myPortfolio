"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import AdbIcon from '@mui/icons-material/Adb';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Menu from '../menu/Menu';
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
const Navigetions = () => {
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

    const [menu, setMenu]= useState(false);
    return (
        <div className="px-2 md:px-10 py-2">
            <AppBar position="static" className=' bg-transparent p-2 shadow-none'>
                <Container className='p-2' maxWidth="xl">
                    <Toolbar className='flex justify-between' disableGutters>
                        {/* logo */}
                        <div className="brand flex gap-5">
                            <AdbIcon sx={{ display: { xs: '', md: 'flex' }, mr: 1, fontSize: '30px' }} />

                            <Link href={'mailto:ahosant82@gmail.com'} className="py-1 hidden md:block cursor-pointer"> ahosant82@gmail.com</Link>
                        </div>

                        {/* menus */}

                        <div className="nav">
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Menu display={'flex'} />
                            </Box>
                        </div>

                        {/* get here */}
                        <div className="">
                            <Button className='border-0 bg-[#6c3ac8] text-white font-bold uppercase rounded-xl px-5 hidden lg:block' variant="outlined" href="#outlined-buttons">
                                hire me!
                            </Button>
                        </div>

                        <div className="lg:hidden">
                            <button className=' text-2xl' onClick={()=>setMenu(!menu)}>{!menu ? <HiOutlineBars3CenterLeft />:<RiCloseLargeFill/>}</button>
                            {/*  */}

                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
            {
                menu ?      
                <div className='bg-[#542f9c] w-full h-screen p-4 absolute left-0 top-20 z-40 '>
                <Menu display={'grid gap-4'}></Menu>
            </div>
            :
            null
            }
            
        </div>
    );
};

export default Navigetions;