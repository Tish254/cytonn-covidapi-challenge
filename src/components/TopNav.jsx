import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import Logo from "./Logo";
import PageTitle from "./PageTitle";

const TopNav = ({toggleNavOnClick}) => {
  
  return (
    <div
      className="flex-row top__nav"
      style={{
        width: "100%",
      }}
    >
      <div className="mobile-nav__logo">
        <Logo />
      </div>
      <PageTitle />
      <AiOutlineMenuUnfold className="mobile-nav__toggle-icon" onClick={toggleNavOnClick}/>
    </div>
  );
};

export default TopNav;
