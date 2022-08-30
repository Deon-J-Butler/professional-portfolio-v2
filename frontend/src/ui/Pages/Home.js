import React from 'react';

export function Home() {
  return (
    <section className='page'>
      <div className='container'>
        <div className='row page-banner_content'>
          <div className='col-lg-4 pt-5'>
            <img src='documentation/images/prof-waving.gif' alt='Placeholder' />
          </div>
          <div className='col-lg-8 px-4'>
            <h1 className='display-5 fw-bold'>Hello, World!</h1>
            <p className='fs-5 text-box'>
              My name is Deon. I'm a military veteran that proudly served in the
              U.S. Army for more than eight years before realizing that my true
              calling is in development. Once I had that epiphany, I packed up
              my belongings and moved to Northern Virginia to pursue a career in
              development!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
