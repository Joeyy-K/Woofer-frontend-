import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext); // consume the AuthContext

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      { isAuthenticated ? (
        <Navigate to='/home' />
      ) : (
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout;
