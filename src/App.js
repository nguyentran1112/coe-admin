import './App.css';
import Loading from './components/Loading';
import { Route, Routes } from "react-router-dom";

import { Home, AuthPage, Dashboard, NotFound ,Client} from './page'
import Auth from './container/Auth';
import Employee from './container/Employee';
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
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
