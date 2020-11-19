
import React from 'react';
import './styles.scss';
// import { FcLikePlaceholder } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { CgArrowLeftO } from 'react-icons/cg';
import {FcServices} from 'react-icons/fc';
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
        I enjoy the analysis, logic and processes involved in Backend.
        Always happy to learn something new, I pay a lot of attention to details and I love challenges.
          <h1><FcServices/> <u>Tools:</u></h1><h3><i>Python, Django, Flask, MySQL.</i></h3>

        </p>
      </section>
    </div>
  )
}
export default AboutMe;