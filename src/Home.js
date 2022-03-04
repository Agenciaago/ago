import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInternetExplorer} from '@fortawesome/free-brands-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faBullhorn} from '@fortawesome/free-solid-svg-icons';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import Carrusel1 from './Carrusel1.js'
import './home.css'
import serv1 from './img/servicios/asesoria.png'
import serv2 from './img/servicios/capacitacion1.png'
import serv3 from './img/servicios/ingenieria1.png'
import serv4 from './img/servicios/integracion.png'
import serv5 from './img/servicios/reparaciones.png'
import Anahi from './img/perfil/anahix.PNG'
import Contact from './Contact.js'
/* import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'; */



function Home() {
  return (
    <div className='home'>
        <Carrusel1/>
        <div className="btn_ver_mas">Ver más</div>
        <div className="nosotros">
            <h1 className='blue'>¿Quiénes somos?</h1>
            <br />
            <p>Somos un grupo creativo especialista en comunicación y marketing digital, con metas específicas para cada proyecto.
               Nuestra convicción es hacer realidad las ideasde nuestros clientes y cumplir los objetivos de su empresa.
               Tenemos una visión global y estratégica que en ejecución también denota nuestra capacidad específica y operativa. Estamos enfocados en hacer crecer cada proyecto.
            </p>
        </div>
        <div className='que_hacemos'>
            <div className="que_hacemos_flex">
                <div className="box">
                    {/* <img src={serv1} alt="" /> */}
                    {/* <FontAwesomeIcon icon={faBrowser} /> */}
                    <FontAwesomeIcon className='social' icon={faCopyright} /><br /><br /><br />
                   
                    
                    <h3>BRANDING Y COMUNICACIÓN DE MARCA</h3>
                    <br /><br />
                    <li>Naming</li>
                    <li>Logotipos</li>
                    <li>Manual de identidad</li>
                </div>
                <div className="box">
                    {/* <img src={serv2} alt="" /> */}
                    <FontAwesomeIcon className='social' icon={faUsers} /><br /><br /><br />
                    <h3>CAMPAÑAS PUBLICITARIAS</h3>
                    <br /><br />
                    <li>Creatividad</li>
                    <li>Adaptaciones BTL Y ATL</li>
                    <li>Plan de medios</li>
                </div>

                <div className="box">
                {/* <img src={serv3} alt="" /> */}
                {/* <FontAwesomeIcon icon={faMegaphone} /> */}
                <FontAwesomeIcon className='social' icon={faBullhorn} /><br /><br /><br />
                    <h3>MARKETING DIGITAL</h3>
                    <br /><br />
                    <li>Campañas CPC</li>
                    <li>SEO On-Site</li>
                    <li>Inbound y Email mkt</li>
                    <li>Redes Sociales</li>
                </div>
                <div className="box">
                <FontAwesomeIcon className='social' icon={faInternetExplorer} /><br /><br /><br />
                {/* <img src={serv4} alt="" /> */}
                    <h3>DESARROLLO WEB</h3>
                    <br /><br />
                    <li>Sitios web</li>
                    <li>Landing pages</li>
                    <li>E-Commerce</li>
                    <li>Banners y Rich Media</li>
                </div>
                <div className="box">
                {/* <img src={serv5} alt="" /> */}
                <FontAwesomeIcon className='social' icon={faUserTie} /><br /><br /><br />
                    <h3>ASESORÍA A NUEVOS EMPRENDEDORES</h3>
                    <br /><br />
               </div>
                
            </div>
        </div>
        <div className="btn_cotiza">Cotiza</div>
        <div className="desc">
            <p>"Profesional apasionada por la comunicación digital y emprendedora-reflexiva es la mejor manera de presentarme contigo. Al igual que tú soy emprendedora digital y con mi equipo, trabajamos para emprendedores y empresas, de las que formamos parte en su historia y crecimiento. Soy asesora en redes sociales para emprendedores digitales y fan de las reflexiones de desarrollo personal."</p>
            <div className='desc_flex'>
                <div className='datos_left'>
            
                </div>
                <div className='datos_right'>
              <div>
              <h2>Anahí González</h2>    
                   <h4 className='gray'>DIRECTORA DE PROYECTOS</h4>    
                   <br />
                   <h2>OFICINA</h2>
                   <p>Próximamente</p>
                   <p>Hermosillo, Sonora</p>
                   <p>CP 83240</p>
                   <br />
                   <h2>CONTACTO</h2>
                   <p>hola@agenciaago.com.mx</p>
                   <p>662 936 42 33</p>
              </div>
                   <div>
                       <img src={Anahi} alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* -----------Contact----------------- */}
        <Contact/>
    </div>
  )
}

export default Home