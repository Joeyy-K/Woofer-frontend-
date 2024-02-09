import RegisterPage from "./_auth/forms/Register";
import SignInForm from "./_auth/forms/SignInForm";
import AuthLayout from "./_auth/AuthLayout";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { HomePage, ProfilePage, VetsPage, SettingsPage, VetPage, EditingPage } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import { UserProvider } from "./contexts/UserContext";
import { fetchCSRFToken } from "./components/cookie/csrf";
import { useEffect } from "react";

export default function App() {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchCSRFToken();
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('currentPath', location.pathname);
  }, [location]);

  useEffect(() => {
    const savedPath = window.sessionStorage.getItem('currentPath');

    if (savedPath) {
      navigate(savedPath);
    }
  }, []);

  return (
    <UserProvider>
      <main className='flex h-screen'>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route index element={<SignInForm />} />
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/veterinaries" element={<VetsPage />} />
            <Route path="/veterinary/:id" element={<VetPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/editing" element={<EditingPage />} />
          </Route>
        </Routes>     
      </main>
    </UserProvider>
  )
}
