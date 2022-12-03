import './App.css';
import AppBarCustom from './components/AppBarCustom';
import { Route, Routes } from "react-router-dom";

import { Home, AuthPage, Dashboard, NotFound , Employee} from './page'

function App() {
  return (
    <div className="App" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/dashBoard' element={<Dashboard />}/>
        <Route path='/employee' element={<Employee />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
