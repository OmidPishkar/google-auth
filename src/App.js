
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import {AuthContextProvider} from './context/AuthContext'

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singin' element={<SingIn/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
