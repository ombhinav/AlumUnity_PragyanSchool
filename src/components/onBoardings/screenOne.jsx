import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../helper/navbar';

const ScreenOne = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/onboarding2');
    };

    return (
        <>
            <div className='overflow-hidden'>
                <Navbar />
                <div className='w-full min-h-screen text-gray-100 bg-[#1f2e44] overflow-hidden flex flex-col lg:flex-row'>

                    <div className='lg:w-1/3 flex justify-center items-center image1'>
                        <img className='lg:h-[60vh] m-8' src="Images/LoginImages/StudentImage.png" alt="" />
                    </div>

                    <div className='lg:w-1/3 flex flex-col justify-between py-3 items-center mt-0 title'>
                        <div className='my-auto flex flex-col gap-12 items-center'>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='font-bold p-3'>AlumnUnity</h1>
                                <p className='text-gray-500'>Connecting the School community</p>
                            </div>
                            <div><img className='lg:h-[40vh]' src="Images/logoHome.png" alt="" /></div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3 className='font-semibold text-xl text-center p-4'>Let's get Started</h3>
                                <button
                                    className='bg-indigo-900'
                                    onClick={handleStartClick}
                                >
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/3 flex justify-center items-center image2'>
                        <img className='lg:h-[60vh] mt-8' src="Images/LoginImages/AlumniImage.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default ScreenOne;
