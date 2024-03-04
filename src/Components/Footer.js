import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: archunaramakrishnan@gmail.com</p>
                <p className="footer-contact-access">Mobile: +91 9788806655</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php"><i><FaFacebook /></i></a>
                    <a href="https://www.instagram.com/_archunaa"><i><FaInstagram /></i></a>
                    <a href="https://x.com/archuna574186"><i><FaTwitter /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;