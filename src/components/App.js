import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { authOperations } from '../redux/auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import { Triangle } from 'react-loader-spinner';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import DiagramView from '../views/DiagramView';
import HomeView from '../views/HomeView/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

// lazy-loading pages:
const NotFoundView = lazy(() =>
  import('../views/NotFoundView' /* webpackChunkName: "404-page" */),
);
const CurrencyView = lazy(() =>
  import(
    '../views/CurrencyView/CurrencyView' /* webpackChunkName: "currency-page" */
  ),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);
  return (
    !isFetchingCurrentUser && (
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
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterView replace to="/login" />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginView replace to="/" />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Navigate replace to="/home" />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomeView />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagram"
              element={
                <PrivateRoute>
                  <DiagramView />
                </PrivateRoute>
              }
            />
            <Route
              path="/currency"
              element={
                <PrivateRoute>
                  <CurrencyView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>

        <ToastContainer
          transition={Zoom}
          autoClose={4000}
          toastStyle={{ backgroundColor: '#f3b8b8', color: '#000000' }}
        />
      </>
    )
  );
}

export default App;
