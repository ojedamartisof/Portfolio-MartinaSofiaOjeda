
import React from 'react';
import './styles.scss';
// import { FcLikePlaceholder } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { CgArrowLeftO } from 'react-icons/cg';
// import {DiPython} from 'react-icons/di';
// import{SiDjango} from 'react-iconos/di';
const AboutMe = () => {
  return (
    <div className='container'>
      <div className='btn'>
        <Link to='/'>
          <CgArrowLeftO fontSize={50} />
        </Link>
      </div>
      <section className='aboutMe'>
        <p>
          <h5>I am enthusiastic, self-taught, and proactive. I enjoy team work and exploring new technologies. My goal is to find a company where I can gain experience while increasing my coding knowledge. I studied in a Full Stack Development Bootcamp and took different online courses.</h5>
        </p>
      </section>
    </div>
  )
}
export default AboutMe;