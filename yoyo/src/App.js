import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';
import Register from './Components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './Components/StateBasics';
import Use from './Components/Use';
import Viewdata from './Components/Viewdata';

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      
      <Navbar/>
      <Routes>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/u' element={<StateBasics/>}/>
        <Route path='/c'element={<Counter/>}/>
        <Route path='/use' element={<Use/>}/>
        <Route path='/view' element={<Viewdata/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
