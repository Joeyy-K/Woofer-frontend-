import React, { useContext, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/shared/TopBar';
import BottomBar from '../components/shared/BottomBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; 


const RootLayout = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full flex flex-col justify-between'>
      <TopBar />

      <section className='flex-grow w-full flex justify-center '>
        <Outlet />
      </section>

      <BottomBar />
    </div>
  )
}

export default RootLayout;
