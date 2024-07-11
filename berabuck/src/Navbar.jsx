import React from 'react';

const Navbar = () => {
  return (
    <div id="navbar">
      <button id="sign-in" className="sign-in-button" >
        Sign In
      </button>
      <button id="level-icon" className="nav-button tnb">
        <span style={{ fontSize: '24px' }}>&#127942;</span>
        <div className="icon-label">level</div>
      </button>
      <button id="group-icon" className="nav-button tnb">
        <span style={{ fontSize: '24px' }}>&#128101;&#65039;</span>
        <div className="icon-label">group</div>
      </button>
    </div>
  );
};

export default Navbar;
