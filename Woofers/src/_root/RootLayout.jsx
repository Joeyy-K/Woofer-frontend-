import React from 'react';
import TopBar from '../components/shared/TopBar';
import BottomBar from '../components/shared/BottomBar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='w-full'>
      <TopBar />

      <section className='flex justify-center items-center py-6'>
      <Outlet />
      </section>

      <BottomBar />
    </div>
  )
}

export default RootLayout