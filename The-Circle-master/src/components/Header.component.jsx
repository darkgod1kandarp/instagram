import React from "react";
import Logo from "./Logo.component";

const Header = ({ activeUserImage }) => (
  <header>
    <div className="fl">
      <button type="button">
        {/* <img src={activeUserImage} alt="User Settings" /> */}
        <img src={`${activeUserImage}`} alt="User Settings" />
      </button>
    </div>

    <div className="fl">
      <Logo />
    </div>

    <div className="fl">
      <button type="button">
        <img src="/images/misc/messages.png" alt="View Messages" />
      </button>
    </div>
  </header>
);

export default Header;
