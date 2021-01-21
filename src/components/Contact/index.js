import React from 'react';
import './styles.scss';
import Resume from '../../assets/Martina_SofíaOjeda.pdf';
import { VscGithub, VscFileCode } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { HiOutlinePhone} from 'react-icons/hi';


const Contact = () => {
  return(
    <section className='contact'>
    <div className='iconsContainer'>
      <li><a href="https://github.com/ojedamartisof?tab=repositories" target="_blank"><VscGithub fontSize={40} /></a></li>
      <li><a href={Resume} download ><VscFileCode fontSize={40}/></a></li>
      <li><a href="https://www.linkedin.com/in/martina-sofia-ojeda/" target="_blank" ><SiLinkedin fontSize={40}/></a></li>
    </div>
  <div className='mailLocation'>
    <span ><HiOutlineMail fontSize={25}/><p className='mail'>ojedamartinasofia@gmail.com</p></span>
    <span><HiOutlinePhone fontSize={25}/><p className='mail'>(+56) 9 59679839</p></span>
    <span><HiLocationMarker fontSize={25}/><p className='mail'>Santiago, Chile</p></span>
    <span><p className='mail'><h3>Skills:</h3> Python, Django, Flask, Golang, MySQL, Javascript, ReactJs, Bootstrap, HTML5, CSS3, Sass, Git.</p></span>
   </div> 
</section>

  )
}
export default Contact;