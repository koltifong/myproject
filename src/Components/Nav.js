import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <h5 className="text-white h4">Collapsed content</h5>
        <span className="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
   
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active " aria-current="page" href="http://127.0.0.1:5502/index.html"
          >Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#11">Headset</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#22">Mouse</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#33">Monitor</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#44">Keyboard</a>
      </li>
    </ul>
        </div>
    );
};

export default Nav;