import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer'>
      <div className='social_icons'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Agoagencia"><FontAwesomeIcon icon={faFacebook}/></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/agenciaagomx/"><FontAwesomeIcon icon={faInstagram}/></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="HTTPS://WWW.LINKEDIN.COM/MWLITE/IN/AGOMARKETING"><FontAwesomeIcon icon={faLinkedin}/></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCoK5cT8fDiroErP3DZ1TpQw"><FontAwesomeIcon icon={faYoutubeSquare}/></a>
        </div>
        <div className='footer_text'>
          <br />
        Copyright © 2022 - Agencia AGO
        </div>
    </div>
  )
}

export default Footer