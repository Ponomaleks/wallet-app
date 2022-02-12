import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div
      className="App"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
      }}
    >
      Wallet app
      {/* Toast container has to be on the top level after Routes */}
      <ToastContainer
        transition={Zoom}
        autoClose={4000}
        toastStyle={{ backgroundColor: '#c57d7d', color: '#000000' }}
      />
    </div>
  );
}

export default App;
