import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { AsideBar } from './components/AsideBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Groups } from './pages/Groups';
import { Orders } from './pages/Orders';
import { Products } from './pages/Products';
import { Settings } from './pages/Settings';
import { Users } from './pages/Users';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="main__container">
          <AsideBar />
          <div className="main__side">
            <Routes>
              <Route path="/" element={<Navigate to="/orders" />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              
              <Route path='*' element={<Navigate to="/orders" />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
