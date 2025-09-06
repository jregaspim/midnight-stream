import React from "react";
import "../../styles.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">
        {" "}
        © {currentYear} Midnight Stream, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
