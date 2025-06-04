import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faUser, faGear, faBell, faHouse, faCartPlus,
  faGlobe, faRadio, faFile
} from '@fortawesome/free-solid-svg-icons';
import { FaUsers, FaRocket, FaShoppingCart, FaWrench } from 'react-icons/fa';
import Domi from '../DashboardSearchbar/Animations/Domi';
import Domi2 from '../DashboardSearchbar/Animations/Domi2';
import Graph from './Graph/Graph';
import Linegraph from './Graph/Linegraph';
// import Linegraph from './Linegraph';
export default function Page() {


  const stats = [
    { label: 'Users', value: '2,984', icon: <FaUsers />, progress: 70 },
    { label: 'Clicks', value: '2.42M', icon: <FaRocket />, progress: 50 },
    { label: 'Sales', value: '$2,400', icon: <FaShoppingCart />, progress: 60 },
    { label: 'Items', value: '320', icon: <FaWrench />, progress: 40 },
  ];

  return (
    <div className='w-full pl-4 pt-2 '>
      {/* Top Navigation */}
      <div className="flex sticky top-2 z-99 hover:shadow-[0_0_10px_0_rgba(0,0,0,0.3)] shadow-white justify-between border border-gray-600 rounded-lg px-4 py-1 bg-[#0F1535]">
        <div>
          <ul className='flex text-[12px] items-center'>
            <li className='text-[14px] text-gray-600 mx-1'><FontAwesomeIcon icon={faHouse} /></li>
            <li className='mx-1'>/</li>
            <li className='mx-1 text-sm'>Dashboard</li>
          </ul>
          <span className='font-bold'>Dashboard</span>
        </div>
        <div className='relative flex items-center'>
          <div>
            <input
              type="text"
              className='rounded-xl bg-[#0F1535] border border-gray-400 text-[12px] py-2 outline-none pl-8 w-60 pr-4'
              placeholder='Type here...'
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute top-[14px] w-[18px] left-2 text-gray-400 ' />
          </div>
          <div className='ml-4 flex items-center'>
            <div className='flex mr-4'>
              <FontAwesomeIcon icon={faUser} className='bg-white w-5  mr-2 cursor-pointer text-black p-1 rounded-full' />
              <button className='text-[14px] font-normal cursor-pointer'>Sign In</button>
            </div>
            <FontAwesomeIcon icon={faGear} className='mx-1 w-3 cursor-pointer' />
            <FontAwesomeIcon icon={faBell} className='mx-1 w-3 cursor-pointer' />
          </div>
        </div>
      </div>

      {/* Statistic Cards */}
      <div className='flex justify-between gap-4 mt-4'>
        {[
          { title: "Today's Money", value: "$53,000", icon: faRadio },
          { title: "Today's Users", value: "2,300", icon: faFile },
          { title: "New Clients", value: "+3,462 ", icon: faGlobe },
          { title: "Total Sales", value: "$103,430", icon: faCartPlus }
        ].map((item, index) => (
          <div key={index} className='flex justify-between items-center   bg-[#0F1535] rounded-2xl px-4 py-3 w-1/4'>
            <div>
              <h6 className='text-[12px]'>{item.title}</h6>
              <h5 className='text-[18px]'>{item.value} <span className='text-green-600 text-[12px] font-bold'>+53%</span></h5>
            </div>
            <FontAwesomeIcon className='p-2 w-[38px] bg-blue-600 rounded-2xl' icon={item.icon} />
          </div>
        ))}
      </div>

      {/* Welcome, Satisfaction, Referral Tracking */}
      <div className="flex justify-between my-4 gap-6">
        {/* Welcome Card */}
        {/* <div className="bg-[url('/images/cardimgfree.webp')] bg-center bg-cover rounded-xl p-4 w-2/5 h-64 text-white"> */}
        <div className="fish bg-center bg-cover rounded-xl p-4 w-2/5 h-64 text-white">
          <div>
            <h6 className='text-[16px] text-gray-300'>Welcome Back,</h6>
            <h5 className='text-[30px] font-bold'>Mark Johnson</h5>
            <p className='text-[10px] text-gray-400'>Glad to see you again! Ask me anything.</p>
            <div className="flex justify-start items-end h-32">
              <button className='text-white flex items-center gap-2'>
                <span className='text-[14px]'>Tap to Record</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34">
                  <path fill="white" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Satisfaction Rate */}
        <div className="gradient relative rounded-xl w-3/10 bg-[#0F1535] text-white p-4">
          <h6 className='text-[16px] font-bold'>Satisfaction Rate</h6>
          <span className='text-[12px] text-[#979EAE]'>From all projects</span>
          <div className="z-[-10]">
            <Domi />
          </div>

          <div className='absolute top-44'>
            <div className='flex justify-between '>
              <div className='bg-black flex justify-between   p-3 rounded-xl z-9 w-[15rem] text-center'>
                <div className='text-[12px]'>0%</div>
                <div>
                  <h6 className='text-2xl font-bold'>95%</h6>
                  <span className='text-[#979EAE] text-[12px]'>Based on likes</span>
                </div>
                <div className='text-[12px]'>100%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Tracking */}
        <div className="gradient rounded-xl w-3/10 bg-[#0F1535] text-white p-4">
          <div className='flex justify-between items-center'>
            <h6 className='text-[16px] font-bold'>Referral Tracking</h6>
            <span>...</span>
          </div>
          <div className='flex justify-between mt-6 gap-4'>
            <div>
              <div className='bg-black py-3 max-w-[80px] px-4 rounded-xl mb-4'>
                <span className='text-[#979EAE] text-[12px]'>Invited</span><br />
                <span className='text-md font-Medium'>145 People</span>
              </div>
              <div className='bg-black py-3 px-4 rounded-xl'>
                <span className='text-[#979EAE] text-[12px]'>Bonus</span><br />
                <span className='text-md font-bold'>1,465</span>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <Domi2 />
            </div>
          </div>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-[58.5%_40%] gap-4">
        <div>
          <Graph />
        </div>

        <div className=''>
          <div className='bg-[#0F1535] rounded-xl h-[190px] text-white'>
            <Linegraph />
          </div>
          <div>
            <div>
              <h6>Active Users</h6>
              <p className='text-[10px]'><span className='text-green-700'>+5</span> than last week</p>
            </div>
            <div className="flex justify-between mt-4">
              {stats.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start min-w-[60px]">
                  <div className="flex items-center gap-2 py-2">
                    <div className="bg-blue-600 p-1 rounded-md text-xs">{item.icon}</div>
                    <span className="text-xs text-gray-300">{item.label}</span>
                  </div>
                  <div className="text-sm font-bold">{item.value}</div>
                  <div className="w-full h-1 bg-gray-700 mt-1 rounded-full relative overflow-hidden">
                    <div
                      className="h-1 bg-blue-600 rounded-full absolute top-0 left-0"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

      {/* Table Chart */}
      <div className='my-6'>
        {/* <TableChart /> */}
        <div className='bg-[#0F1535] rounded-xl p-6 text-white'>Table Chart Placeholder</div>
      </div>
    </div>
  );
}
