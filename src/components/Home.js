import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actoins';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import Dashboard from './Dashboard';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';


function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleLogin = () => {
    dispatch(loginUser());
    navigate('/dashboard');
  };

  return (
    
    <div className="welcome">
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
                <h1>{t('welcome-home')}</h1>

        </div>
        <LanguageSelector/>
      </div>
      </div>
    
      {isLoggedIn ? (
        
        <Dashboard />        
      ) : (
        <button onClick={handleLogin}>{t('login')}</button>
      )}
      
      </div>
    
  );
}

export default Home;
