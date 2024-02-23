import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { UserProvider } from "./contexts/UserContext";
import { VetProvider } from "./contexts/VetContext";
import { fetchCSRFToken } from "./components/cookie/csrf";

const RegisterPage = lazy(() => import('./_auth/forms/Register'));
const SignInForm = lazy(() => import('./_auth/forms/SignInForm'));
const AuthLayout = lazy(() => import('./_auth/AuthLayout'));
const RootLayout = lazy(() => import('./_root/RootLayout'));
const HomePage = lazy(() => import('./_root/pages/HomePage'));
const ProfilePage = lazy(() => import('./_root/pages/ProfilePage'));
const VetsPage = lazy(() => import('./_root/pages/VetsPage'));
const SettingsPage = lazy(() => import('./_root/pages/SettingsPage'));
const VetPage = lazy(() => import('./_root/pages/VetPage'));
const EditingPage = lazy(() => import('./_root/pages/EditingPage'));
const BookingPage = lazy(() => import('./_root/pages/BookingPage'));
const AppointmentPage = lazy(() => import('./_root/pages/AppointmentPage'));
const ContactUsPage = lazy(() => import('./_root/pages/ContactUsPage'));
const AboutUsPage = lazy(() => import('./_root/pages/AboutUsPage'));

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
        <Suspense fallback={<div>Loading...</div>}>
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
              <Route path="/veterinary/:id" element={<VetProvider><VetPage /></VetProvider>}/>
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/editing" element={<EditingPage />} />
              <Route path="/booking" element={<VetProvider><BookingPage /></VetProvider>} />
              <Route path="/appointment" element={<AppointmentPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/about" element={<AboutUsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </UserProvider>
  )
}
