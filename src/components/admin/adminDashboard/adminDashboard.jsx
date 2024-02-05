import React from 'react'
import NavBar from '../../helper/navbar';

const adminDashboard = () => {
  return (
    <>
    <div className='bg-indigo-100 h-screen'>
        <div className='w-5/6  mx-auto'>
            <div >
                <NavBar></NavBar>
            </div>
            <div className='flex pt-4'>

                <div className='text-6xl text-gray-500 font-bold pb-6 pt-4 '>
                    Dashboard
                    <div className='flex justify-evenly'>
                        <div className='pt-5 pr-10'><button className=' text-[25px] h-16 rounded-full w-[250px]'>Student</button></div>
                        <div className='pt-5 px-10'><button className='text-[25px] h-16  rounded-full w-[250px]'>Faculty</button></div>
                        <div className='pt-5 pl-10 pr-20'><button className='text-[25px] h-16  rounded-full w-[250px]'>Alumni</button></div>
                    </div>
                    <form>
                        <label>
                            <input className='text-[20px] rounded-full' placeholder='Enter Name' type="text" name="name" />
                        </label>
                    </form>
                </div>   
                <div className=' bg-slate-300 rounded-xl p-6  m-0 text-blue-900 pt-8 font-extrabold'>Queries and Complaints
                    <div>
                        <ul>
                            <li className='text-black py-3 pt-6 font-semibold'> 
                                - Regarding portal technicalities
                            </li>
                            <li className='text-black py-3 font-semibold'>
                               - Annual day delay announcement
                            </li>
                            <li className='text-black py-3 font-semibold'>
                               - Exam dates postponement due to annual day celebrations
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    <div className='pt-10'>
    <table>
        <thead>
          <tr>
            <th className=' pt- 10 pr-14 border text-lg font-semibold min-w-[30px] text-black'>S.No</th>
            <th className=' pt- 10 px-20 border text-lg font-semibold min-w-[30px] text-black'>Name</th>
            <th className=' pt- 10 px-20 border text-lg font-semibold min-w-[30px] text-black'>Reg No.</th>
            <th className=' pt- 10 px-20 border text-lg font-semibold min-w-[30px] text-black'>Date of Registration</th>
            <th className=' pt- 9 px-20 10border text-lg font-semibold min-w-[30px] text-black'>Username</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
    </div>
            <div className='pt-3'>
                <Data
                sno = "1"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
                <Data
                sno = "2"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
                <Data
                sno = "2"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
                <Data
                sno = "2"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
                <Data
                sno = "2"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
                <Data
                sno = "2"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
                <Data
                sno = "2"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
                <Data
                sno = "2"
                Name ="Navin"
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="nvnie123"
                />
            </div>
            
        </div>
        <div className='static'>

    <div style={{background: "#163560"}} className='h-40 w-40 rounded-full absolute bottom-0 left-0'></div>
    <div style={{ background: "black", opacity: "50%" }} className='h-28 w-80 rounded-3xl absolute bottom-0 left-80'></div>        </div>
    </div>

    

    </>
  )
}

const Data = (props) => {
    return (
        <>
      <table>
        
        <tbody>
          
            <tr>
              <td className=' pr-20 border text-base min-w-[30px]  text-gray-700 '>{props.sno}</td>
              <td className=' px-20 border text-base min-w-[30px]  text-gray-700 '>{props.Name}</td>
              <td className=' px-20 border text-base min-w-[30px]  text-gray-700 '>{props.regNo}</td>
              <td className=' px-28 border text-base min-w-[30px]  text-gray-700 '>{props.dateOfRegistration}</td>
              <td className=' px-32 border text-base min-w-[30px]  text-gray-700 '>{props.username}</td>
            </tr>

            
          
        </tbody>
      </table>
      
      </>
    );
  };

export default adminDashboard
