import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { NotAuthorised } from './components/NotAuthorised';
import { PrivateRoute } from './components/PrivateRoutes';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path={"/login"} element={<Login />}/>
      <Route path={"/"} element={<Login />}/>
      <Route path={"/dashboard"} element={<Dashboard />}/>
      <Route path={"/notauthorised"} element= {<NotAuthorised />}/>
     </Routes>
      
    </div>
  );
} 

export default App;
