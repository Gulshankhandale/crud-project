import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import AllUsers from './Components/AllUsers';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddUser from './Components/AddUser';

function App() {
  return <>
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<AllUsers/>}/>
  <Route path='/adduser' element={<AddUser/>}/>

  </Routes>

  </BrowserRouter>
  
  
  </>
}

export default App;
