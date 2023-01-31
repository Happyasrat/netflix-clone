import React, { useState,useEffect } from 'react'
import "./Nav.css";


function Nav() {

 const [show, setShow] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     if (window.scrollY > 100) {
       setShow(true);
     } else {
       setShow(false);
     }
   });
   return () => {
     window.removeEventListener("scroll", () => {});
   };
 }, []);



    return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
          alt="Netflix Logo"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar Logo"
        />
      </div>
    );
}

export default Nav