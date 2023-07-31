import React, { useEffect, useState } from "react";
import moment from "moment";

import './TopMenu.scss';

export const TopMenu: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  
  return (
    <div className="menu">
      <div className="menu__item">
        <div className="menu__item__text">Today</div>
      </div>

      <div className="menu__item">
        <div className="menu__item__currentDay">
          {moment().format('DD MMM, YYYY')}
        </div>

        <div className="menu__item__clockIcon"></div>

        <div className="menu__item__current-time">
          {moment(time.getTime()).format('LTS')}
        </div>
      </div>
    </div>
  )
}