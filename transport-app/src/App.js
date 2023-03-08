import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Landing} from "./pages/Landing"
import {About} from "./pages/About";
import { Driver } from './pages/Driver';
import {Order} from "./pages/Order"
import {Assignorder} from './pages/Assignorder';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home' element={<Driver></Driver>}></Route> 
        <Route path='/order' element={<Order></Order>}></Route> 
        <Route path='/Assignorder' element={<Assignorder></Assignorder>}></Route> 
        <Route path='/About' element={<About></About>}></Route> 
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
