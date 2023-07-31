import React from 'react';
import './Logo.scss';
import logo from '../../images/logo.png';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img className="logo__image" src={logo} alt="logo" />
      <span className="logo__text">inventory</span>
    </div>
  );
};