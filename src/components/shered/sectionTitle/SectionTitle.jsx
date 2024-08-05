import React from 'react';

const SectionTitle = ({TitleContent, position}) => {
    return (
        <div>
            <div className={` uppercase text-4xl py-5 my-6 sectionTitle font-bold ${position} bg-gradient-to-r from-[#8750f7]  to-white inline-block text-transparent bg-clip-text`}>{TitleContent}</div>
        </div>
    );
};

export default SectionTitle;