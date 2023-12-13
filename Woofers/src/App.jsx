import RegisterPage from "./_auth/forms/Register";
import SignInForm from "./_auth/forms/SignInForm";
import AuthLayout from "./_auth/AuthLayout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./_root/pages";
import RootLayout from "./_root/RootLayout";

export default function App() {
  return (
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
        </Route>
      </Routes>
      
    </main>
  )
}
