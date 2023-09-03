import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actoins';
import { useNavigate } from 'react-router-dom';
import '../logout.css';
import { useTranslation } from 'react-i18next';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
  <>
    <button onClick={handleLogout}>{t('logout')}</button>
    </>
  );
}

export default Logout;