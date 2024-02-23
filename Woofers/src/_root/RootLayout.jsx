import React, { useContext, useEffect } from 'react'; // import useContext and useEffect
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/shared/TopBar';
import BottomBar from '../components/shared/BottomBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // import the AuthContext\


const RootLayout = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext); // consume the AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); // replace '/home' with the path you want to redirect authenticated users to
    }
  }, [isAuthenticated, navigate]);


  if (isLoading) {
    return <div>Loading...</div>; // or your custom loading component
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
