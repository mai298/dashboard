import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actoins';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import Dashboard from './Dashboard';

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginUser());
    navigate('/dashboard');
  };

  return (
    
    <div className="welcome">
      <div className="row">
        <div className="col-lg-12">
                <h1>WELCOME TO DASHBOARD WEBSITE!</h1>

        </div>
      </div>
    
      {isLoggedIn ? (
        
        <Dashboard />        
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      
      </div>
    
  );
}

export default Home;
