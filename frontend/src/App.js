import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivateRoutes from "./components/PrivateRoute";
import ForgotPasswordPage from "./components/ForgotPassword";
import ResetPasswordPage from "./components/ResetPasswords";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/Layout";
import AccountSettings from "./pages/AccountSettings";
import BarcodePage from "./pages/BarcodePage";
import Security from "./components/Security";
import Info from "./components/Info";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./components/AddProduct";

// import Prod
function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        progressClassName="toast-progress-bar"
      />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/pos" element={<POSPage />} />
            <Route path="/barcode-page" element={<BarcodePage />} />
            <Route path="/security" element={<Security />} />
            <Route path="/info" element={<Info />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
