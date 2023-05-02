import logo from './logo.svg';
import './App.css';
// import Input from './Component/Input';
// import Contact from './Component/Contact';
import Nav from './Component/Nav';
import { Route,Routes } from 'react-router-dom'
import Contact from './Component/Contact';
import Maps from './Component/Maps';
import Sidebar from './Component/Sidebar';





function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Contact />}/>
      <Route path="/maps and Charts" element={<Maps />}/>
      <Route  path="/sidebar" element ={<Sidebar />}/>
      </Routes>
     
    {/* <Input /> */}
    {/* <Contact /> */}
    
     
    </div>
  );
}

export default App;
