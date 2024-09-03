import { Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menu = ({display}) => {
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
            <div className={`${display} font-bold uppercase text-base`}>
                {page.map((page) => (
                    <Link key={page.id} className={`${pathName === page.pathName ? 'bg-gradient-to-l from-[#7636f8] to-white inline-block text-transparent bg-clip-text px-6 py-1 ' : 'bg-gradient-to-r from-[#7636f8] to-white inline-block hover:text-transparent bg-clip-text px-6 lg:py-1 py-2'}`} href={page.pathName}>{page.route}</Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;