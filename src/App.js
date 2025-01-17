import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Student from './pages/Student';
import Forgotpassword from './pages/Forgotpassword';
import Changepassword from './pages/Changepassword';
import Sidebar from './pages/Sidebar';
import Addbook from './pages/Addbook';
import Viewbooks from './pages/Viewbooks';
import Viewstudents from './pages/Viewstudents';
import Editprofile from './pages/Editprofile';
import Studeditprofile from './pages/Studeditprofile';
import Viewreservation from './pages/Viewreservation';
import { ToastContainer } from 'react-toastify';

import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/forgot' element={<Forgotpassword/>}/>
        <Route path='/change' element={<Changepassword/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/addbook' element={<Addbook/>}/>
        <Route path='/viewbook' element={<Viewbooks/>}/>
        <Route path='/viewstudent' element={<Viewstudents/>}/>
        <Route path='/editprofile' element={<Editprofile/>}/>
        <Route path='/studeditprofile' element={<Studeditprofile/>}/>
        <Route path='/viewreservation' element={<Viewreservation/>}/>
        
        
      </Routes>
      <Footer/>
      <ToastContainer/>

     
    </div>
  );
}

export default App;
