import React from 'react';
import './Portfolio.css';
import profile from './profile.jpg';

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
      <div className="flex about">
        <img src={profile} className="profile-img" alt="Profile"/>
        <p>stuff</p>
      </div>
      <div className="flex">things</div>
    </div>
  );
};
export default Portfolio;
