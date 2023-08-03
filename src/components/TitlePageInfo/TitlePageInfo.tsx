import React from 'react';

type Props = {
  name: string;
  count: number;
};

export const TitlePageInfo: React.FC<Props> = ({ name, count }) => {
  return (
    <div className="title-info">
      <span className="title-info__name">{ name }</span>
      {' / '}
      <span className="title-info__count">{ count }</span>
    </div>
  );
};