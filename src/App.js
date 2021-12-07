import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        {/* <Route exact path="/" element={<HomePage />} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
