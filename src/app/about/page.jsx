import React from 'react';
import '../style.css';
import MyProfile from './../../components/ui/myProfile/MyProfile';
import { Container } from '@mui/material';
import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import MySkills from '@/components/ui/mySkills/MySkills';
import Myinfo from '@/components/pages/about/Myinfo';
export const metadata = {
    title: 'about',
    description: "mern stack developer",
  
  };
const page = () => {
    return (
        <div className='wrepperArea'>
            {/*  */}
            <div className="bgDark"><Myinfo/></div>
            {/*  */}
            <div className="">
                <div>
                    {/*  */}
                    <SectionTitle TitleContent={'my profile'} position={'text-center'}/>
                    {/*  */}
                    <div><MyProfile/></div>
                </div>
            </div>

            {/*  */}

            <div className="">
                <MySkills/>
            </div>
        </div>
    );
};

export default page;