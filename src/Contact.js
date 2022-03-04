import React from 'react'
import emailjs from 'emailjs-com';
import './contact.css'



function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_39lb6k8', 'template_e950b1d', e.target, 'user_pT3CvDhr4VVlY4O7LmmOG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset();
    
      }
    return (
        <div class="contact" id='opacar3'>
<div className='contact_img'>
        
</div>
                <h2 className='contact_title'>Contacto</h2>
                
                
            <div class="contact_flex">
               <div class="contact_left">
                    <h2>¡Cotiza con nosotros! </h2><br/><br />
        
                    <p>Ingresa tus datos y en breve nos comunicamos contigo.</p><br/>
                    <p>Email: agomarketing@outlook.com</p><br/>
                    <p>Cel: 6629 36 42 33 </p><br/>
                    <p>Hermosillo, Son., Mex.</p><br/>
                    
                
                </div>
             <div class="contact_right">
                <form  /* action="enviar-prueba.php" method="post" */ className="formulario column column--50" onSubmit={sendEmail}>
                    
                    <label for="" className="formulario__label">Nombre</label>
                    <div><input type="text" className="formulario__input-txt" name="nombre"/></div>
                    <label for="" class="formulario__label">Correo electrónico</label>
                    <div><input type="text" className="formulario__input-txt" name="correo"/></div>
                    <label for="" className="formulario__label">Teléfono</label>
                    <div><input type="text" className="formulario__input-txt" name="telefono"/></div>
                        <label for="" className="formulario__label">Mensaje:</label>
                        <div><textarea name="mensaje" id="" cols="30" rows="10" className="formulario__textarea"> </textarea></div>
                            <input type="submit" className="formulario__btn" value="Enviar"></input>
                           </form>
                          </div>
                </div>
           
               

           
    </div>
    )
}

export default Contact
