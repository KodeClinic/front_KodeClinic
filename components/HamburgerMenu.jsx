import React from 'react';

export default function HamburgerMenu({ isVisible }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
            <div className="px-3 bg-white flex flex-col w-[328px] rounded-[20px] lg:w-[800px] lg:[870px]">
                
            </div>
        </div>
    );
}
