import React from 'react';

export function Portfolio() {
  return (
    <section className='page'>
      <div className='container'>
        <h3 className='d-lg-none'>Swipe the projects to see more...</h3>
        <div className='container-fluid px-0'>
          <div className='portfolio-container'>
            <button className='handle left-handle my-5 d-none d-md-block'>
              <i className='fa-solid fa-chevron-left'></i>
            </button>
            <div className='slider py-5 d-sm-flex'>
              <div>
                <a href='https://github.com/Deon-J-Butler/think-tank'>
                  <h3>ThinkTank</h3>
                  <img
                    src='documentation/images/think-tank.png'
                    alt='ThinkTank'
                  />
                </a>
                <p className='text-box'>
                  ThinkTank is a web application that serves as an archive for
                  users to store innovative ideas. (Click to see the source code
                  and find out more).
                </p>
              </div>
              <div>
                <a href='https://github.com/deepdive-bootcamp-team-pf/pothole-finder'>
                  <h3>Pothole Tracker</h3>
                  <img
                    src='documentation/images/nyc-map.png'
                    alt='Pothole Tracker'
                  />
                </a>
                <p className='text-box'>
                  A web application that allows users to plot potholes on a map
                  that can be viewed by other users. Later releases will give
                  administrative rights to DoT officials to allow them to see a
                  list of potholes by severity and location for them to set a
                  priority for repairs.
                </p>
              </div>
              <div>
                <a href='https://github.com/Deon-J-Butler/pong'>
                  <h3>Pong</h3>
                  <img src='documentation/images/pong.png' alt='Pong' />
                </a>
                <p className='text-box'>
                  Test your skills playing pong against a supercomputer. Be
                  careful, it always goes for the spike.
                </p>
              </div>
              <div>
                <a href='https://github.com/Deon-J-Butler/light-and-dark'>
                  <h3>Light and Dark Mode</h3>
                  <img
                    src='documentation/images/light-dark.png'
                    alt='Light and Dark'
                  />
                </a>
                <p className='text-box'>
                  This is a project showcasing how to turn a website from light
                  to dark mode and vice versa.
                </p>
              </div>
              <div>
                <a href='https://github.com/Deon-J-Butler/netflix-scroll'>
                  <h3>Netflix Scroll</h3>
                  <img
                    src='documentation/images/netflix-scroll.png'
                    alt='Netflix Scroll'
                  />
                </a>
                <p className='text-box'>
                  This project shows how to build and implement netflix scroll
                  into a carousel-like element.
                </p>
              </div>
            </div>
            <button className='handle right-handle my-5 d-none d-md-block'>
              <i className='fa-solid fa-chevron-right'></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
