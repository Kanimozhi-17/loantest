import styling from "../styles/bottom.module.css";
import { Button } from "@mui/material";
import { AiFillApple } from 'react-icons/ai'; 
import { FaWindows } from 'react-icons/fa';
import { MdAndroid } from "react-icons/md";
import logo from "../styles/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Bottom_content(){
return(
    <div>
        <footer>
            <div className={styling.fisrt_section}>
            <h3>Try Whitepace today</h3>
            <p>Get started for free.</p>
            <p>Add your whole team as your needs grow.</p>
            <Button variant="contained" color="primary" className={styling.button}>Try whitepace Free &#8594;</Button>
            <p>On a big team?Contact sales</p>
            <div className={styling.icons}>
            <AiFillApple size={25}></AiFillApple>
            <FaWindows size={25}></FaWindows>
            <MdAndroid size={25}></MdAndroid>
            </div>
            </div>
            <div className={styling.footer_content}>
                <section>
            <img src={logo} alt="logo.img"></img>
            <p>whitepace was created for the new ways we live and work.We make a better workspace around the world</p>
            </section>

            <section>
                <ul>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Customer Service</a></li>
                </ul>
            </section>

            <section>
                <ul>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Guides & tutorials</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </section>

            <section>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Media Kit</a></li>
                </ul>
            </section>

            <section>
                <h6>Try It Today</h6>
                <p>Get started for free.</p>
            <p>Add your whole team as your needs grow.</p>
            <Button variant="contained" color="primary" className={styling.button}>Start Today &#8594;</Button>
            </section>
            </div>
            <div className={styling.forTab}>
            <div className={styling.bottom_change_row}>
            <ul>
                <li>
                <select className={styling.lan_dropdown}>
                    <option>&#x1F310; English</option>
                    <option>&#x1F310; Tamil</option>
                </select></li>
                
                    <li><a href="#">Terms & Privacy</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Status</a></li>
                    <li><a href="#">&#x00A9; 2021 Whitepace LCC.</a></li>
                </ul>
            </div>
            <span></span>
            <div className={styling.bottom_icons}>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
            </div>
        </footer>
    </div>
)
}

export default Bottom_content