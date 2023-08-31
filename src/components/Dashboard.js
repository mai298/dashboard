import React from 'react';
import Sidebar from './Sidebar';
import '../dashboard.css';
import '../NavBar.css';
import NavBar from './NavBar';
import '../Sidebar.css';
import exam from '../imgs/3986158-removebg-preview.png';


function Dashboard() {

  return (
    <>
<NavBar/>
      <Sidebar />

      <div className="exam pt-5 pb-5  mx-auto mt-3">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
<h2 >Exam time</h2>
<p >here we are ,are you ready to fight?</p>
<button className='exambtn mt-5'>View exams tips</button>
            </div>
            <div className="col-lg-4 ms-auto">
              <img src={exam} alt="exam" className='img-fluid' />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;