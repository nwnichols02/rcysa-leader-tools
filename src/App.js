import logo from './logo.svg';
import './App.css';
import React from 'react';
// import {Route} from 'react-router';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Callings from './components/Callings';
import Login from './components/Login';
import Agendas from './components/Agendas';
import SignUp from './components/SignUp';
import RecentlySpake from './components/RecentlySpake';
import PrayerList from './components/PrayerList';
import Settings from './components/Settings';
import NewCalling from './components/NewCalling';
import EditCalling from './components/EditCalling';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/callings' element={<Callings/>}></Route>
          <Route path='/agendas' element={<Agendas/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/recentlyspake' element={<RecentlySpake/>}></Route>
          <Route path='/prayerlist' element={<PrayerList/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
          <Route path='/newcalling' element={<NewCalling/>}></Route>
          <Route path='/editcalling' element={<EditCalling/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
