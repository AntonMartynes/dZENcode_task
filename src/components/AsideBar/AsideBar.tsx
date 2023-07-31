import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';
import './AsideBar.scss';

export const AsideBar: React.FC = () => {
  return (
    <div className="aside-bar">
      <div className="user-container">
        <div className="user-container__image" />
          <Link to='/settings'>
            <div className="user-container__btn"> </div>
          </Link>
        
      </div>
      <div className="navList">
        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/orders"
        >
          Orders
        </NavLink>

        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/groups"
        >
          Groups
        </NavLink>

        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/products"
        >
          Products
        </NavLink>

        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/users"
        >
          Users
        </NavLink>

        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};