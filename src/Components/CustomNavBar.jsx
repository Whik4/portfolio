import {React, useEffect, useState} from 'react'
import SiteLogo from '../images/favicon3.svg';
import SiteTitle from '../images/favico-title.svg';

export default function CustomNavBar() {
    
    const [navColor, setNavColor] = useState(false);

    const [navOpen, setNavOpen] = useState(false);

    var showDropMenu = () => {
        setNavOpen(!navOpen);
    }

    useEffect(()=>{
        const scrollHandler = function(){
            if(window.scrollY>100){
                setNavColor(true);
            }
            else{
                setNavColor(false);
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    
    return (
        <div>
            <nav className={`nav-bar ${(navColor || navOpen) && "nav__black"}`}>
                {/* drop down nav bar menu */}
                <div className="drop-nav">
                    <div className="drop-down-nav">
                        <div className="nav-logo"><img src={SiteLogo} className="site-logo"></img></div>
                        <div className="ham-logo">
                            {!navOpen && <a onClick={showDropMenu}><i class="fas fa-bars" id="ham-ico"></i></a>}
                            {navOpen && <a onClick={showDropMenu}><i class="fas fa-times" id="cross-ico"></i></a>}
                        </div>
                    </div>
                    {navOpen && <div className="drop-down-menu">
                        <ul className="nav-item-list">
                            <li className="nav-item"><a href="#" onClick={showDropMenu}>Home</a></li>
                            <li className="nav-item"><a href="#projects" onClick={showDropMenu}>Projects</a></li>
                            <li className="nav-item nav-btn-item">
                                <div className="nav-button">
                                    <a className="nav-btn" href="mailto:amanm3620@gmail.com">Contact me</a>
                                </div>
                            </li>
                        </ul>
                    </div>}
                </div>
                {/* span out nav bar */}
                <div className="nav-span">
                    <ul className="nav-item-list">
                        <li className="nav-item nav-logo"><img src={SiteLogo} className="site-logo"></img></li>
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#projects">Projects</a></li>
                        <li className="nav-item nav-btn-item">
                            <div className="nav-button">
                                <a className="nav-btn" href="mailto:amanm3620@gmail.com">Contact me</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
