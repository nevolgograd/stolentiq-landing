import * as React from "react";

import project from 'assets/images/Project-33.png';
import woodman from 'assets/images/woodman.png';
import startupVillage from 'assets/images/Startup-Village.png';
import logo from 'assets/images/logo_white.svg';
import arrowDown from 'assets/images/icon-arrow-down.svg';
import arrowUp from 'assets/images/icon-arrow-up.svg';
import soundcloud from 'assets/images/soundcloud.svg';
import behance from 'assets/images/behance.svg';
import vimeo from 'assets/images/vimeo.svg';
import bandcamp from 'assets/images/bandcamp.svg';
import facebook from 'assets/images/facebook.svg';
import vk from 'assets/images/vk.svg';
import instagram from 'assets/images/instagram.svg';


const Portfolio: React.FC = (): JSX.Element => {
    return (
        <section className="full-height" id="portfolio">
            <div className="full-height-inner">
                <div className="items-wrap">
                    <div className="item">
                        <div className="item__header">
                            <h5>
                                Startup Village (Director’s cut) Startup Village (Director’s
                                cut)
                            </h5>
                        </div>
                        <div className="item__image">
                            <img src={startupVillage} alt="Startup Village" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Project 33</h5>
                        </div>
                        <div className="item__image">
                            <img src={project} alt="Project 33" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Woodman</h5>
                        </div>
                        <div className="item__image">
                            <img src={woodman} alt="Woodman" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Startup Village (Director’s cut)</h5>
                        </div>
                        <div className="item__image">
                            <img src="images/Startup-Village.png" alt="Startup Village" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Startup Village (Director’s cut)</h5>
                        </div>
                        <div className="item__image">
                            <img src="images/Startup-Village.png" alt="Startup Village" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Startup Village (Director’s cut)</h5>
                        </div>
                        <div className="item__image">
                            <img src="images/Startup-Village.png" alt="Startup Village" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Startup Village (Director’s cut)</h5>
                        </div>
                        <div className="item__image">
                            <img src="images/Startup-Village.png" alt="Startup Village" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Startup Village (Director’s cut)</h5>
                        </div>
                        <div className="item__image">
                            <img src="images/Startup-Village.png" alt="Startup Village" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__header">
                            <h5>Startup Village (Director’s cut)</h5>
                        </div>
                        <div className="item__image">
                            <img src="images/Startup-Village.png" alt="Startup Village" />
                        </div>
                        <div className="item__text">
                            <p>music and sound design for 2d animation</p>
                        </div>
                    </div>
                </div>
                <a href="#fan" className="link-to-section down">
                    <span className="link-text">FUN</span>
                    <img src="images/icon-arrow-down.svg" alt="down" />
                </a>
            </div>
        </section>
    );
}

export {Portfolio}