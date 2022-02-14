import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import { Triangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import DiagramView from '../views/DiagramView';
import HomeView from '../views/HomeView/HomeView';

// lazy-loading pages:
const NotFoundView = lazy(() =>
  import('../views/NotFoundView' /* webpackChunkName: "404-page" */),
);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Triangle
            height="200"
            width="200"
            color="#ff6596"
            ariaLabel="loading"
            className="Loader"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/diagram" element={<DiagramView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <ToastContainer
        transition={Zoom}
        autoClose={4000}
        toastStyle={{ backgroundColor: '#f3b8b8', color: '#000000' }}
      />
    </>
  );
}

export default App;
