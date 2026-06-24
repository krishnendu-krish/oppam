import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import HomePage from "./pages/Home";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import StudentsPage from "./pages/StudentsPage";
import UsersPage from "./pages/UsersPage";

import AboutPage from "./pages/AboutPage";


import DashboardPage from "./pages/DashboardPage";

import TherapistsPage from "./pages/TherapistsPage";

import TherapistDetailPage from "./pages/TherapistDetailPage";
import TherapistRegister from "./pages/therapist/TherapistRegister";

import WaitingApproval from "./pages/therapist/WaitingApproval";


import AdminDashboard from "./pages/admin/AdminDashboard";
import TherapistVerification from "./pages/admin/TherapistVerification";
import UserManagement from "./pages/admin/UserManagement";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";

function App() {

  return (

    <Routes>

      {/* Pages with Navbar + Footer */}

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/students"
          element={<StudentsPage />}
        />

        <Route
          path="/users"
          element={<UsersPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

      </Route>


      {/* Auth pages WITHOUT Navbar/Footer */}

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

<Route

  path="/dashboard"

  element={<DashboardPage />}

/>

<Route

path="/therapists"

element={<TherapistsPage />}

/>
<Route

path="/therapists/:id"

element={<TherapistDetailPage />}

/>



<Route
  path="/therapist-register"
  element={<TherapistRegister />}
/>

<Route
  path="/waiting-approval"
  element={<WaitingApproval />}
/>
<Route
  path="/admin-dashboard"
  element={<AdminDashboard />}
/>
<Route
  path="/admin/therapists"
  element={<TherapistVerification />}
/>

<Route
  path="/admin/users"
  element={<UserManagement />}
/>



<Route
  path="/admin/analytics"
  element={<Analytics />}
/>

<Route
  path="/admin/settings"
  element={<Settings />}
/>


    </Routes>

  );

}

export default App;