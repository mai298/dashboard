import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';

function RequireAuth({ component: Component }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Component />
      ) : (
        <Home/>
      )}
    </>
  );
}

export default RequireAuth;