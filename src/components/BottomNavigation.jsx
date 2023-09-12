import React, { useState, useEffect } from 'react';

import {AiFillGithub} from 'react-icons/ai'
import {LiaLinkedinIn} from 'react-icons/lia'
import {AiOutlineInstagram} from 'react-icons/ai'

function BottomNavigation() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [scrollingTimer, setScrollingTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      clearTimeout(scrollingTimer); // Clear any existing timer

      // Show the navigation while scrolling
      setShowNavigation(true);

      // Set a timer to hide navigation after a moment of no scrolling
      const timer = setTimeout(() => {
        setShowNavigation(false);
      }, 4000); // Adjust the timeout duration as needed

      setScrollingTimer(timer);

      // Store the current scroll position for the next comparison
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, scrollingTimer]);

  return showNavigation ? (
    <nav className="bottom-navigation">
      <div className='fixed left-0 right-0 bottom-16 w-full flex justify-center z-50'>
        <ul className="menu menu-horizontal bg-base-200/75 backdrop-blur-md rounded-box border-[1px] border-primary">
          <li>
            <a href='https://github.com/nick-sohl' target="_blank" className="tooltip" data-tip="GitHub">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> */}
              <AiFillGithub className='h-5 w-5' />
            </a>
          </li>
          <li>
            <a href='https://linkedin.com/in/nick-sohl-4a5206210' target="_blank" className='tooltip' data-tip="LinkedIn">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
              <LiaLinkedinIn className='h-5 w-5' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/nick_sohl/' target="_blank" className='tooltip' data-tip="Instagram">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> */}
              <AiOutlineInstagram className='h-5 w-5' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  ) : null;
}

export default BottomNavigation;
