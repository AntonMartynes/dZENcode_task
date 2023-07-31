import React, { ChangeEvent } from "react";
import { Logo } from "../Logo";
import './Header.scss';
import { useSearchParams } from "react-router-dom";
import { TopMenu } from "../TopMenu";

export const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <Logo />
          <div>
            <input 
              className="seqrch-input"
              type="text"
              placeholder="Search"
              onChange={handleSearchFilter}
            />
          </div>
          <TopMenu />
        </div>
      </div>
    </header>
  );
}