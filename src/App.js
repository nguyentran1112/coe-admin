import './App.css';
import Loading from './components/Loading';
import { Route, Routes } from "react-router-dom";

import { Home, AuthPage, Dashboard, NotFound , Employee} from './page'
import Auth from './container/Auth';
function App({auth}) {
  return (
    <div className="App" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashBoard' element={<Dashboard />}/>
        <Route path='/employee' element={<Employee />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
