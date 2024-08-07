"use client"
import * as React from 'react';
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
    return (
        <div className="px-2 md:px-10 py-2">
            <AppBar position="static" className=' bg-transparent p-2 shadow-none'>
                <Container className='p-2' maxWidth="xl">
                    <Toolbar className='flex justify-between' disableGutters>
                        {/* logo */}
                        <div className="brand flex gap-5">
                            <AdbIcon sx={{ display: { xs: '', md: 'flex' }, mr: 1, fontSize: '30px' }} />

                            <div className="py-1 hidden md:block"> ahosant82@gmail.com</div>
                        </div>

                        {/* menus */}

                        <div className="nav">
                            <Menu></Menu>
                        </div>

                        {/* get here */}
                        <div className="">
                            <Button className='border-0 bg-[#6c3ac8] text-white font-bold uppercase rounded-xl px-5' variant="outlined" href="#outlined-buttons">
                                hire me!
                            </Button>
                        </div>

                        <div className="md:hidden">
                            <button className=' text-2xl'><HiOutlineBars3CenterLeft/></button>
                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navigetions;