import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from '../Assets/Software.png';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='Software' src={image} />

                    <div className="body-content">
                        <div className="body-headline">Archuna R</div>
                        <div className="body-text">Frontend Developer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/Archunaaaa" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/archuna-ramakrishnan" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default Body;
