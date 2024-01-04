import React, { useContext, useEffect } from 'react'; // import useContext and useEffect
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/shared/TopBar';
import BottomBar from '../components/shared/BottomBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // import the AuthContext\


const RootLayout = () => {
  const { isAuthenticated } = useContext(AuthContext); // consume the AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate]);

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

export default RootLayout;
