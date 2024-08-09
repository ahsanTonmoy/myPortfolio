import Contact from '@/components/ui/contact/Contact';
import React from 'react';

export const metadata = {
    title: 'Contact',
    description: "mern stack developer",
}
const page = () => {
    return (
        <div>
            <div className="wrepperArea">
                {/*  */}
                <div className="">
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default page;