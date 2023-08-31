import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';
import icon1 from '../imgs/icons8-home-32(1).png';
import icon2 from '../imgs/icons8-schedule-32.png';
import icon3 from '../imgs/icons8-course-32.png';
import icon4 from '../imgs/icons8-graduation-32.png';
import icon5 from '../imgs/icons8-performance-32.png';
import icon6 from '../imgs/icons8-megaphone-32.png';

function Sidebar() {
  return (
    <div className="fixed-top">
      <div className="fixed-sidebar">
        <h3 className="sidebar-title">Coligo</h3>
        <Nav className="flex-column navSide">
          <Nav.Item>
            <NavLink to="/dashboard"  className="nav-link">
              <img src={icon1} alt="home" className="img-fluid pe-3" />
              Dashboard
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="#" className="nav-link">
              <img src={icon2} alt="home" className="img-fluid pe-3" />
              Schedule
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="#" className="nav-link">
              <img src={icon3} alt="home" className="img-fluid pe-3" />
              Courses
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="#" className="nav-link">
              <img src={icon4} alt="home" className="img-fluid pe-3" />
              Gradebook
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="#" className="nav-link">
              <img src={icon5} alt="home" className="img-fluid pe-3" />
              Performance
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/announcement" className="nav-link">
              <img src={icon6} alt="home" className="img-fluid pe-2" />
              Announcement
            </NavLink>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;