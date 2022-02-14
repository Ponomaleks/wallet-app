import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import DiagramView from '../views/DiagramView';
import HomeView from '../views/HomeView/HomeView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/diagram" element={<DiagramView />} />
      </Routes>

      {/* Wallet app */}

      {/* <DiagramView /> */}

      {/* Toast container has to be on the top level after Routes */}

      <ToastContainer
        transition={Zoom}
        autoClose={4000}
        toastStyle={{ backgroundColor: '#c57d7d', color: '#000000' }}
      />
    </>
  );
}

export default App;
