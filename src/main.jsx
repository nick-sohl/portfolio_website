import React, { useEffect, useState, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { motion } from 'framer-motion';

import App from './App.jsx'

import NavbarProjects from './components/projects/NavbarProjects.jsx'
import BottomNavigation from './components/bottomNavigation.jsx'
import Footer from './components/Footer.jsx'

import Error from './components/Error.jsx'

import WeatherApp from './components/projects/weather-app/WeatherApp.jsx'
import EcommerceShop from './components/projects/ecommerce_shop/EcommerceShop.jsx'
import Menu from './components/projects/restaurant-menu/RestaurantMenu'
import ToDo from './components/projects/todo-list/ToDoList.jsx'
import Ajax from  './components/projects/ajax-load-user/Ajax'

import Resume from "./components/resume/Resume"

import ScrollToTop from './components/ScrollToTop.jsx';

// Localization
import './i18next';
import { I18nextProvider } from 'react-i18next';

import './index.css'

const Main = () => {

  // Theme Toggle Function
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const router = createBrowserRouter([
  
    {
      path: "/",
      element: <div>
          <App
            theme={theme}
            handleToggle={handleToggle}
          />
          <BottomNavigation />
      </div>,
      errorElement: <Error />,
    },
  
    // Error Page
    {
      path: "*",
      element: <div><Error /></div>
    },
  
    // Projects
  
    {
      path: "weather-app",
      element: <div>
        <ScrollToTop />
        <NavbarProjects
          theme={theme}
          handleToggle={handleToggle}
        />
        <WeatherApp />
        <Footer />
      </div>
    },
    {
      path: "ecommerce-shop",
      element: <div>
        <ScrollToTop />
        <NavbarProjects
          theme={theme}
          handleToggle={handleToggle}
        />
        <section className='w-full h-[100vh]'>
          <EcommerceShop />
        </section>
        <Footer />
      </div>
    },
    {
      path: "menu",
      element: <div>
        <ScrollToTop />
        <NavbarProjects
          theme={theme}
          handleToggle={handleToggle}
        />
        <section className='w-full h-[100vh]'>
          <Menu />
        </section>
        <Footer />
      </div>
    },
    {
      path: "todo-list",
      element: <div>
        <ScrollToTop />
        <NavbarProjects
          theme={theme}
          handleToggle={handleToggle}
        />
        <ToDo />
        <Footer />
      </div>
    },
    {
      path: "ajax",
      element: <div>
        <ScrollToTop />
        <NavbarProjects
          theme={theme}
          handleToggle={handleToggle}
        />
        <Ajax />
        <Footer />
      </div>
    },

    // Resume
    {
      path: "resume",
      element: <div>
        <ScrollToTop />
        <NavbarProjects
          theme={theme}
          handleToggle={handleToggle}
        />
        <Resume />
        <Footer />
      </div>
    }
  
  ]);

  return (
    <React.StrictMode>
        <RouterProvider router={router} basename={"/index.html"} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div className='w-full h-screen text-xl font-bold flex justify-center items-center text-center'></div>}>
    {/* Uses React Suspense API, to prevent React rendering the app until they are loaded.*/}
    <I18nextProvider>
        <Main />
    </I18nextProvider>
  </Suspense>
);