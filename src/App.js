import './App.css';
import Loading from './components/Loading';
import { Route, Routes } from "react-router-dom";

import { Home, AuthPage, Dashboard, NotFound, MapPage, API} from './page'
import Auth from './container/Auth';
import Maintenance from './container/Maintenance';
import Employee from './container/Employee';
import Client from './container/Client';
function App() {
  
  return (
    <div className="App" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashBoard' element={<Dashboard />}/>
        <Route path='/employee' element={<Employee />}/>
        <Route path='/client' element={<Client />}/>
        <Route path='/maintenance' element={<Maintenance />}/>
        <Route path='/map' element={<MapPage />}/>
        <Route path='/api' element={<API />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
