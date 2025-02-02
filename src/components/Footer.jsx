import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p style={{textAlign: 'center', padding: '100px 0px 20px 0px'}}>
        Made with <span><FaHeart style={{fontSize: '0.7rem', color: 'white'}} /></span> by Aron Rai.
      </p>
    </footer>
  )
}

export default Footer;