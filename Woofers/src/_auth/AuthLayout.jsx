import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AuthLayout = () => {
    const { isAuthenticated } = useContext(AuthContext); // consume the AuthContext

    return (
        <>
          { isAuthenticated ? (
            <Navigate to='/' />
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

export default AuthLayout