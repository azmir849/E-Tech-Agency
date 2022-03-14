import React from 'react';
import banner from '../../../image/hero-img.png'
import NavBar from '../../Shared/Navbar/Navbar.js';
import './Header.css'
import Fade from 'react-reveal/Fade';
import { HeroBg, VideoBg } from './VideoBg';
import Video from "../../../image/bg.mp4";

const Header = () => {
    return (
        <section className="header">
        <NavBar/>
        {/* For video background */}
        {/* <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg> */}
            <div className="row w-100">
                <div className="row col-md-10 mx-auto mt-5">
                    <div className="col-md-7 titleArea order-2 order-lg-1">
                        <Fade duration={2000} left>
                            <h2 className="headerTitle text-center"><span className="headerHighlight">Websites, Softwares, Design & Digital Marketing ...</span></h2>
                            <p className="miniTitle text-center">Grow Your Business With Us. Your trusted Partner</p>
                            <p className="headerContent text-center">Years of experience with talented team members that help you stairs up.</p>
                          <div className='text-center'>  <a href="#services"><button className="branBtn">Get Started</button></a></div>
                        </Fade>
                    </div>
                    <Fade duration={2000} right>
                        <div className="col-md-5 img order-1 order-lg-2">
                            <img src={`${banner}`} alt="" className="img-fluid"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Header;