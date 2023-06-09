import "./style.css";

import vk from "./../../img/icons/vk.svg";
import twitter from "./../../img/icons/twitter.svg";
import inst from "./../../img/icons/instagram.svg";
import linked from "./../../img/icons/linkedIn.svg";
import git from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={inst} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={git} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linked} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;