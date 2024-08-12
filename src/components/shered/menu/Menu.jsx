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
            <div className={`${display} font-semibold uppercase text-sm`}>
                {page.map((page) => (
                    <Link key={page} className={`${pathName === page.pathName ? 'hover:bg-gradient-to-l bg-gradient-to-r from-[#6c3ccb] to-[#2a1454] lg:rounded-full px-6 py-1 ' : 'hover:bg-gradient-to-l from-[#6c3ccb] to-[#2a1454] lg:rounded-full px-6 lg:py-1 py-2 lg:hover:ml-2'}`} href={page.pathName}>{page.route}</Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;