import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HealthTips from './pages/HealthTips';
import Dashboard from './pages/Dashboard';
import DoctorAI from './pages/DoctorAI';
import HealthNews from './pages/HealthNews';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <div className='max-w-[100vw] max-h-[100vh] ' >



      <Routes >
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/doctorai' element={<DoctorAI></DoctorAI>}></Route>
        <Route path='/healthnews' element={<HealthNews></HealthNews>}></Route>
        <Route path='/healthtips' element={<HealthTips></HealthTips>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
