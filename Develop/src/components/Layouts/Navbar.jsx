import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/nameLogo.png';
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const gitHubLink = "https://github.com/PC-Vic";
    const navigate = useNavigate()

    return (
        <nav className="navbar">
            <img onClick={() => {navigate('/')}} src={Logo} alt="logo" className="logo" />
            <div className="sidebar-links">
                <Link to="/about" className="home-link">ABOUT</Link>
                <Link to="/projects" className="forum-link">PROJECTS</Link>
                <Link to="/contact" className="users-link">CONTACT</Link>
            </div>

            <div className='nav-icons-container'>
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                </a>    
                <Link>
                <FontAwesomeIcon icon={faLinkedin} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;