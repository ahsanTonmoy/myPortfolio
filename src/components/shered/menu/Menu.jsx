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
            <div className={`${display}`}>
                {page.map((page) => (
                    <li key={page} className=' px-4 list-none capitalize'><Link className={`${pathName === page.pathName ? ' border-b-2 border-[#9347cd] p-2' : 'p-2'}`} href={page.pathName}>{page.route}</Link></li>
                ))}
            </div>
        </div>
    );
};

export default Menu;