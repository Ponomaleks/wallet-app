import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/login',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <div>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</div>;
  // return (
  //   <Route {...routeProps}>
  //     {shouldRedirect ? <Redirect to={redirectTo} /> : children}
  //   </Route>
  // );
}
