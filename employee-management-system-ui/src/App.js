import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddEmployee } from './components/AddEmployee';
import Navbar from './components/Navbar';
import ListEmployees from './components/ListEmployees';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
       <BrowserRouter>
           <Navbar />
           <Routes>
             <Route index element={<ListEmployees />} />
             <Route path='/' element={<ListEmployees />} />
             <Route path='/addEmployee' element={<AddEmployee />} />
             <Route path='/update/:id' element={<UpdateEmployee />} />
           </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
