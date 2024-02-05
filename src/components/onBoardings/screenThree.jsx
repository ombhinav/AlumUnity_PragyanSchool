import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScreenThree = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/login');
    };

    const handleSkipClick = () => {
        navigate('/login');
    };

    return (
        <div className='bg-[#1f2e44] h-screen overflow-hidden  overflow-y-scroll'>
            <div className='flex flex-col gap-4 lg:w-3/5 mx-auto items-center justify-center p-8'>
                <h2 className='text-gray-200 font-bold text-4xl text-center'>
                    Showcase your Journey
                </h2>
                <img className='w-full' src="Images/onboarding/path.png" alt="" />
                <h3 className='text-gray-300 font-semibold text-lg text-center'>
                    Average student to IIT topper
                </h3>
                <div className='flex w-full p-2 m-6 gap-4 lg:gap-12 justify-center'>
                    <button
                        className='bg-gray-500 text-white px-4 py-2 rounded'
                        onClick={handleSkipClick}
                    >
                        Skip
                    </button>
                    <button
                        className='bg-indigo-900 text-white px-4 py-2 rounded'
                        onClick={handleNextClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScreenThree;
