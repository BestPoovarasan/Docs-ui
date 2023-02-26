import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Profile from './components/profile/Profile';


function App() {
  const isloggedin = useSelector(state => state.isloggedin);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {isloggedin &&
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </>
          }{" "}
        </Routes>
      </main>
    </>
  );
}

export default App;
