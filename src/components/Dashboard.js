import React from 'react';
import Sidebar from './Sidebar';
import '../dashboard.css';
import '../NavBar.css';
import NavBar from './NavBar';
import '../Sidebar.css';
import exam from '../imgs/3986158-removebg-preview.png';
import { useTranslation } from 'react-i18next';
import Announcement from './Announcement';
import { useEffect, useState } from 'react';



function Dashboard() {
  const { t } = useTranslation();

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/announcements')
      .then(response => response.json())
      .then(data => {
        setAnnouncements(data);
      })
      .catch(error => {
        console.error('Error fetching announcements:', error);
      });
  }, []);
  

return(
  <>
<NavBar/>
      <Sidebar />

      <div className="exam pt-5 pb-5  mx-auto mt-3">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
<h2 >{t('exam-time')}</h2>
<p >{t('exam-para')}</p>
<button className='exambtn mt-5'>{t('exam-btn')}</button>
            </div>
            <div className="col-lg-4 ms-auto">
              <img src={exam} alt="exam" className='img-fluid' />
              
            </div>
          </div>
        </div>
      </div>

      <section className='announce pt-5 pb-5 .bg-secondary mx-auto mt-3'>
        <div className="container">
<h2>{t('announcement')}</h2>
<p>{t('para-announce')}</p>
          <div className="row">
            <div className="col-lg-3">
            {announcements.map(announcement => (
        <Announcement
          key={announcement.id}
          imgSrc={announcement.imgSrc}
          name={announcement.name}
          specialization={announcement.specialization}
          content={announcement.content}/>
          ))}
            </div>
          </div>
        </div>


      </section>
      
        </>
  );
}

export default Dashboard;