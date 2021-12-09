import logo from './logo.svg';
import './App.css';
import Layout from './compoents/Layout';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
         
             <Routes>

                   <Route path='/' element={<Home/>}/>
                   <Route path='/projects' element={<Projects/>}/>
                   <Route path='/courses' element={<Courses/>}/>
                   <Route path='/contact' element={<Contact/>}/>

             </Routes>

         </BrowserRouter>

    </div>
  );
}

export default App;
