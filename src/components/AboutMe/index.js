
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
          <h5>I am enthusiastic, self-taught, and proactive. I enjoy team work and I spend most of the time exploring new technologies and methodologies. My goal is to find a job where I can gain experience and increase my coding knowledge. I studied in a Full Stack Development Bootcamp and take a lot of courses.</h5>
        </p>
      </section>
    </div>
  )
}
export default AboutMe;