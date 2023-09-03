import React from 'react';

  const Announcement = ({ imgSrc, name, specialization, content }) => {
    return (
      <div>
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
        <p>{specialization}</p>
        <p>{content}</p>
      </div>
    );
  };
  
export default Announcement;