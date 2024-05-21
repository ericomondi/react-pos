import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivateRoutes from "./components/PrivateRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pos" element={<POSPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
