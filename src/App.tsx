import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage, RegisterPage } from "./pages/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
