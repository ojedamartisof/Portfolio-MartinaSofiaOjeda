
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
        <h5> I enjoy the analysis, logic and processes involved in BackEnd.
        Always happy to learn something new, I pay a lot of attention to details and I love challenges.</h5>
          <h1><u>Skills:</u></h1><h3>Python • Django • Flask • MySQL</h3>

        </p>
      </section>
    </div>
  )
}
export default AboutMe;