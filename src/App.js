import './App.css';
import logo from './images/logo.svg';
import chevronDown from './images/icon-arrow-down.svg';
import chevronUp from './images/icon-arrow-up.svg';
import desktop from './images/image-hero-desktop.png';
import mobile from './images/image-hero-mobile.png';
import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';
import iconMenu from './images/icon-menu.svg';
import closeMenu from './images/icon-close-menu.svg';
import todo from './images/icon-todo.svg';
import calender from './images/icon-calendar.svg';
import reminders from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';
import { useState } from 'react';


function App() {
  const [openFeatures, setOpenFeatures] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".links")
    const menuButton = document.querySelector(".menu-button")

    navbar.classList.toggle("open")

    if (navbar.classList.contains("open")) {
      menuButton.src = closeMenu
    } else {
      menuButton.src = iconMenu
    }
  }

  return (
    <>

      {/* Navigation Bar */}
      <header className='navbar'>
          <img className='logo' src={logo} alt="" />
          <nav className='links'>

            <div className='features'>
              <button onClick={() => setOpenFeatures(!openFeatures)}>
                Features{" "}
                {openFeatures ? (
                  <img src={chevronUp} alt="" />
                ) : (
                  <img src={chevronDown} alt="" />
                )} 
              </button>
              {openFeatures && (
                <ul className='features-dropdown'>
                  <li><img src={todo} alt="" /> <span>Todo List</span></li>
                  <li><img src={calender} alt="" /> <span>Calender</span></li>
                  <li><img src={reminders} alt="" /> <span>Reminders</span></li>
                  <li><img src={planning} alt="" /> <span>Planning</span></li>
                </ul>
              )}
            </div>

            <div className='company'>
              <button onClick={() => setOpenCompany(!openCompany)}>
                Company{" "}
                {openCompany ? (
                  <img src={chevronUp} alt="" />
                ) : (
                  <img src={chevronDown} alt="" />
                )} 
              </button>
              {openCompany && (
                <ul className='company-dropdown' >
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              )}
            </div>

            <div className='careers'>
              <button>
                Careers
              </button>
            </div>

            <div className='about'>
              <button>
                About
              </button>
            </div>

            <div className='login'>
              <button>
                Login
              </button>
            </div>

            <div className='register'>
              <button>
                Register
              </button>
            </div>
          </nav>

        <div className='menu'>
          <button onClick={handleOpenMenu}>
            <img src={iconMenu} alt="" className='menu-button'/>
          </button>
        </div>

      </header>


      {/* Hero Section */}
      <div className='heroSection'>
        <div className='heroImg'>
            <picture>
                <source media="(min-width: 768px)" srcSet={desktop}/>
                <img className='hero-images' src={mobile} alt="" />
            </picture>
        </div>

        <div className='heroBody'>
            <h2>Make remote work</h2>
            <p>Get your team in sync, no matter your location. 
               Streamline processes, create team rituals, and 
               watch productivity soar.</p>
            <button>Learn More</button>
            <div className='affiliates'>
              <img className='databiz' src={databiz} alt="" />
              <img className='audiophile' src={audiophile} alt="" />
              <img className='meet' src={meet} alt="" />
              <img className='maker' src={maker} alt="" />
            </div>
        </div>
      </div>






    </>
  );
}

export default App;
