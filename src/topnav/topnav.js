import './topnav.css';
import React, { useState, useEffect } from 'react';


//Topnav bar

const Topnav = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, isNavVisible]);
  
    return (
      <nav className={'top-navbar ' + (isNavVisible ? 'visible' : 'hidden')}>
         <div className="topnav-container"> 
            <div>
                Logo
            </div>
            <div>
                Speisekarte
            </div>
            <div>
                DE & Sidebar
            </div>
        </div>
      </nav>
    );
  };
  

export default Topnav;




