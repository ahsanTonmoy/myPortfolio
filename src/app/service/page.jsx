import MyService from '@/components/pages/services/MyService';
import React from 'react';
import '../style.css'
import MyProject from '@/components/pages/services/MyProject';
export const metadata = {
    title: 'Service',
    description: "mern stack developer",
  
  };
const page = () => {
    return (
        <div>
            <div className="wrepperArea">
                {/* service info */}
                <div className="bgDark"><MyService/></div>
                {/*  */}
                <div className=""><MyProject/></div>
            </div>
        </div>
    );
};

export default page;