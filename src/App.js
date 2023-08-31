import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';
  import Home from './components/Home';
  import './Home.css';
  import RequireAuth from './components/RequireAuth';
  import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
  
  function App() {
    return (
    
      <Provider store={store}>

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<RequireAuth component={Dashboard} />} />
              </Routes>
      
      </Router>
      </Provider>
    );
  }
  
export default App;
