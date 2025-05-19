import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Halak from './Halak';
import HalAdat from './HalAdat';
import Balaton from './Balaton';
import Horgaszok from './Horgaszok';

function App() {


  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Halak />} />
        <Route path='/hal/:id' element={<HalAdat />} />
        <Route path='/balaton' element={<Balaton />} />
        <Route path='/horgaszok' element={<Horgaszok />} />
      </Routes>

    </div>
  );
}

export default App;