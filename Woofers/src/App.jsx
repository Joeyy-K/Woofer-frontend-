import RegisterPage from "./_auth/forms/Register";
import SignInForm from "./_auth/forms/SignInForm";
import AuthLayout from "./_auth/AuthLayout";
import { Routes, Route } from "react-router-dom";
import { HomePage, ProfilePage, VetsPage, SettingsPage, VetPage } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
      <main className='flex h-screen'>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SignInForm />} />
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/veterinaries" element={<VetsPage />} />
            <Route path="/veterinary/:id" element={<VetPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>     
      </main>
    </UserProvider>
  )
}
