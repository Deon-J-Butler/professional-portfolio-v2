import React from 'react';

export function Skills() {
  return (
    <section className='page'>
      <div className='container'>
        <div id='expertise' className='col-md-8 mt-4'>
          <p className='text-box'>
            My expertise includes FullStack JavaScript Development, Front-End
            Development using common HTML5 and CSS3 or popular frameworks like
            Bootstrap, and (unpopular opinion) I really enjoy Back-End
            Development. I am also currently self-learning WordPress and PHP!
          </p>
        </div>
        <div className='row m-5'>
          <div className='col-lg-2 text-center align-items-center justify-content-center d-flex mt-4 mb-2 me-2 slide-in from-left'>
            <span className='fas fas--skills'>
              <i className='fa-solid fa-people-group'></i>
            </span>
          </div>
          <div className='col-lg-9 text-box text-box--skills slide-in from-right'>
            <h3>Soft Skills:</h3>
            <p>
              Interpersonal Skills, Verbal and Written Communication,
              Problem-Solving, Attention to Detail, Time Management,
              Adaptability, Creativity, Leadership
            </p>
          </div>
        </div>
        <div className='row m-5'>
          <div className='col-lg-2 text-center align-items-center justify-content-center d-flex mt-4 mb-2 me-2 slide-in from-left'>
            <span className='fas fas--skills'>
              <i className='fa-solid fa-graduation-cap'></i>
            </span>
          </div>
          <div className='col-lg-9 text-box text-box--skills slide-in from-right'>
            <h3>Certifications:</h3>
            <p>
              Bachelor's of Science in Information Technology (Concentration:
              Programming), Fullstack Web Development Bootcamp, Associate of
              Arts in Korean, Advanced Interpersonal Skills, Open Source
              Intelligence (OSINT) Certified
            </p>
          </div>
        </div>
        <div className='row m-5'>
          <div className='col-lg-2 text-center align-items-center justify-content-center d-flex mt-4 mb-2 me-2 slide-in from-left'>
            <span className='fas fas--skills'>
              <i className='fa-solid fa-code'></i>
            </span>
          </div>
          <div className='col-lg-9 text-box text-box--skills slide-in from-right'>
            <h3>Technical Skills:</h3>
            <p>
              Java, JavaScript, Python, MySQL, MongoDB, HTML5, CSS3, Bootstrap,
              React, GitHub, Bash/Shell
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
