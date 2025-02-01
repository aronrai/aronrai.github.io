import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className='contact div'>
      <h2>Contact Me</h2>
      <div className="contact-logos">
      <a href="https://wa.me/+919564120965" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp color="white" size={30}/> +91 9564120965
      </a>
      <a href="tel:+919564120965">
        <FaPhone color="white" size={30} />+91 9564120965
      </a>
      <a href="mailto:aron.dumi.rai@gmail.com">
        <FaEnvelope color="white" size={30} />aron.dumi.rai@gmail.com
      </a>
      </div>
    </div>
  )
}

export default Contact;