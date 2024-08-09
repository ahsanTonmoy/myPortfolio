import React from 'react';

const SectionTitle = ({ TitleContent, position }) => {
    return (
        <div>
            <div className={`${position}`}>
                <div className={` capitalize text-4xl py-5 my-6 sectionTitle font-bold   bg-gradient-to-r from-[#8750f7]  to-white inline-block text-transparent bg-clip-text`}>{TitleContent}</div>
            </div>
        </div>
    );
};

export default SectionTitle;