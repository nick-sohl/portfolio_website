// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='w-full h-full'>
//       <footer className="footer footer-center p-4 bg-base-100/75 backdrop-blur-md text-base-content fixed left-0 right-0 bottom-0 border-t-[1px] border-white/20 z-50">
//           <div>
//               <p>Copyright © 2023 - Coded with Love by Nick</p>
//           </div>
//       </footer>
//     </div>
//   )
// }

// export default Footer

import React, { useState, useEffect } from 'react';

// import {AiFillGithub} from 'react-icons/ai'
// import {LiaLinkedinIn} from 'react-icons/lia'
// import {AiOutlineInstagram} from 'react-icons/ai'

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
    <div className='w-full h-full'>
      <footer className="footer footer-center p-4 bg-base-100/75 backdrop-blur-md text-base-content fixed left-0 right-0 bottom-0 border-t-[1px] border-base-content/50 z-50">
          <div>
              <p>Copyright © 2023 - Coded with Love by Nick</p>
          </div>
      </footer>
    </div>
  ) : null;
}

export default BottomNavigation;
