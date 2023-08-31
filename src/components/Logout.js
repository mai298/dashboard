import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actoins';
import { useNavigate } from 'react-router-dom';
import '../logout.css';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
  <>
    <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Logout;