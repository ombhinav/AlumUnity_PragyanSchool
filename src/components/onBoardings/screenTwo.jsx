import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScreenTwo = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/onboarding3');
    };

    const handleSkipClick = () => {
        navigate('/login');
    };

    return (
        <div className='w-full bg-[#1f2e44]'>
            <div className='flex flex-col lg:flex-row h-screen w-full justify-center items-center gap-12 mx-auto'>
                <div className='lg:w-1/2'>
                    <img className='w-full' src="Images/onboarding/group.png" alt="" />
                </div>
                <div className='lg:w-1/2 flex flex-col justify-center items-center'>
                    <h2 className='w-full lg:w-2/3 mx-auto text-center text-xl font-semibold text-gray-200'>
                        Unlock the full potential of your school memories. Join AlumUnity, where the past meets the present, and connections last a lifetime
                    </h2>
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
        </div>
    );
};

export default ScreenTwo;
