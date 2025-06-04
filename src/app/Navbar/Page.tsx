'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaStar } from "react-icons/fa";
// import Dashboard from '../DashboardSearchbar/Page';
// import Page from '../Table/Page';


const Page = () => {
  const pathname = usePathname();

  const menuItems = [
    { to: '/', label: 'Dashboard', icon: FaHome },
    { to: '/table', label: 'table', icon: VscGraph },
    { to: '/billing', label: 'billing', icon: FaMoneyBills },
    { to: '/rtl', label: 'Rtl', icon: IoIosRocket },
  ];

  const accountItems = [
    { to: '/profile', label: 'Profile', icon: FaUser },
    { to: '/signin', label: 'Sign In', icon: MdAssignment },
    { to: '/signup', label: 'Sign Up', icon: HiMiniWrenchScrewdriver },
  ];

  const renderNavItem = (item) => {
    const Icon = item.icon;
    const isActive = pathname === item.to;

    return (
      <Link href={item.to} key={item.to} className="block">
        <div
          className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all ${isActive ? 'bg-[#1a1f37] text-white' : 'text-white'
            }`}
        >
          <div
            className={`w-7 h-7 p-[6px] rounded-lg flex items-center justify-center transition-all ${isActive ? 'bg-[#0075ff]' : 'bg-[#1a1f37]'
              }`}
          >
            <Icon />
          </div>
          {item.label}
        </div>
      </Link>
    );
  };

  return (
    <>
      <div className=' py-3 h-screen overflow-y-auto z-50'>
        <div className=' rounded-lg'>
          <div className='flex justify-center'>
            <Link href="/dashboard" className='text-[15px]  tracking-wider'>
              VISION UI FREE
            </Link>
          </div>
          <hr className="h-[1px] border-0 bg-gradient-to-r from-transparent via-white to-transparent mt-3" />
          <div className='pl-2'>
            <div className='space-y-2 mt-5 text-[14px]'>
              {menuItems.map(renderNavItem)}
            </div>

            <div className='mt-4'>
              <h4 className='text-[15px] '>Account Pages</h4>
            </div>

            <div className='space-y-2 mt-5 text-[14px] '>
              {accountItems.map(renderNavItem)}
            </div>
          </div>

          <div className='mt-[20px] mr-4'>
            <div className='p-3 bg-blue-500 rounded-xl'>
              <FaStar className='bg-white h-7 w-7 p-2 text-[#0075FF] rounded-lg' />
              <div className='my-2'>
                <h5 className='text-[14px]'>Need help ?</h5>
                <p className='text-[13px]'>Please Check your docs</p>
              </div>
              <button className='px-5 py-2 rounded-lg bg-[#1a1f37] text-[10px] w-full'>DOCUMENTATION</button>
            </div>

            <div className='my-3'>
              <button className='px-5 py-2 bg-blue-400 text-[#ffffff] text-[14px] rounded-lg w-full'>
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

