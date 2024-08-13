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

    const [menu, setMenu] = useState(false);
    return (
        <div className="px-2 md:px-16 py-2">
            <div className=' bg-transparent p-2 shadow-none'>
                <Container className='p-2'>
                    <Toolbar className='flex justify-between' >
                        {/* logo */}
                        <div className="brand flex gap-5">
                            <AdbIcon sx={{ display: { xs: '', md: 'flex' }, mr: 1, fontSize: '30px' }} />

                            <Link href={'mailto:ahosant82@gmail.com'} className="py-1 hidden md:block cursor-pointer"> ahosant82@gmail.com</Link>
                        </div>

                        {/* get here */}
                        <div className=" flex gap-8">
                            {/* menus */}

                            <div className="nav mt-2">
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    <Menu display={'flex'} />
                                </Box>
                            </div>
                            <Button className='bg-gradient-to-r hover:bg-gradient-to-l from-[#6c3ccb] to-[#2a1454] border-0 hover:border-0 border-[#6c3ccb] text-white font-bold uppercase rounded-full px-8 py-2 hidden lg:block' variant="outlined" href="#outlined-buttons">
                                hire me!
                            </Button>
                            
                        </div>

                        <div className="lg:hidden">
                            <button className=' text-2xl' onClick={() => setMenu(!menu)}>{!menu ? <HiOutlineBars3CenterLeft /> : <RiCloseLargeFill />}</button>
                            {/*  */}

                        </div>

                    </Toolbar>
                </Container>
            </div>
            {
                menu ?
                    <div className='sideBar w-full fixed left-0 top-0  z-40'>
                        <div className='bg-[#0f0715] w-80 py-4 h-screen'>
                        <div className=" grid justify-items-end gap-8 px-4 py-2 text-xl" onClick={() => setMenu(!menu)}>
                        <RiCloseLargeFill />
                        </div>
                        <Menu display={'grid gap-2 my-4'}></Menu>
                    </div>
                    </div>
                    :
                    null
            }

        </div>
    );
};

export default Navigetions;