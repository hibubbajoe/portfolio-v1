
import React, { useState, useContext, useEffect } from 'react';
import { RevealerContext } from '../contexts/RevealerContext';
import '../styles/landing-page.css'

const LandingPage = () => {

    const revealerContext = useContext(RevealerContext);
    const [actionBtn, setActionBtn] = useState("")
    const [revealerNav, setRevealerNav] = useState(() => { })
    const [revealerNavToggle, setRevealerNavToggle] = useState(false);

    useEffect(() => {
        setActionBtn(document.querySelector(".nav-btn-js"));
        setRevealerNav(window.revealer({
            revealElementSelector: ".nav-js",
            options: {
                anchorSelector: ".nav-btn-js",
            },
        }));
    }, []);



    const handleClick = () => {
        if (!revealerNav.isRevealed()) {
            revealerNav.reveal();
            actionBtn.setAttribute("data-open", true);
            console.log('Jag är orange bakgrund')
            // setRevealerNavToggle(true)
        } else {
            revealerNav.hide();
            actionBtn.setAttribute("data-open", false)
            console.log('Jag är svart bakgrund')
            // setRevealerNavToggle(false);

        }
    }

    return (

        <div>
            <header>
                <div>
                    <button className="header__button nav-btn-js" onClick={handleClick} type="button"></button>
                    <nav className="header__nav nav-js" data-active="true">
                        <ul className="header__menu">
                            {/* <li className="header__menu-item home-btn"><a href="#">Home</a></li> */}
                            <li className="header__menu-item portfolio-btn"><a href="portfolio">Portfolio</a></li>
                            <li className="header__menu-item about-btn"><a href="about">About</a></li>
                            <li className="header__menu-item contact-btn"><a href="contact">Contact</a></li>
                        </ul>
                        <ul className="socials">
                            <li className="socials-item">
                                <a href="https://www.instagram.com/hibubbajoe/" target="_blank" className="instagram-btn">Instagram</a>
                            </li>
                            <li className="socials-item">
                                <a href="https://githu.com/hibubbajoe" target="_blank" className="github-btn">Github</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <h1>Roobinn <br /> ***<br />Hhedluundd</h1>
        </div>

    )
}

export default LandingPage;