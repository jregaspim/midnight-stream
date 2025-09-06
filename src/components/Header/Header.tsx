import React from "react";
import "../../styles.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="header-title">Midnight Stream</h1>
      <h2 className="app-subttile">
        It's time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
};

export default Header;
