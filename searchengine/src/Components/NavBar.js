
import React from 'react';
import { Link } from 'react-router-dom'
import aboutme from '../assets/images/aboutme.png'
import redirect from '../assets/images/redirect.png'
import './NavBar.css'

export default class NavBar extends React.Component { 


    renderCourseLinks(){
        return(
            <div className="course-links dropdown">
                <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Course Links</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="https://www.zybooks.com/" target="_blank" rel="noopener noreferrer">Zybooks {this.renderRedirectIcon()}</a>
                    <a className="dropdown-item" href="https://Tophat.com" target="_blank" rel="noopener noreferrer">TopHat {this.renderRedirectIcon()} </a>
                    <a className="dropdown-item" href="https://drive.google.com/drive/u/1/folders/1AsHhIFfQ3yNE_m2z4wswRfKh77K0UH9w" target="_blank" rel="noopener noreferrer">Google Drive {this.renderRedirectIcon()}</a>
                    <a className="dropdown-item" href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools {this.renderRedirectIcon()}</a>
                </div>
            </div>
        );
    }

    renderRedirectIcon(){
        return(<img src={redirect} className="redirect" alt=""></img>);
    }

    renderHome(){
        return(
            <div className="browser-specs home" >
                <Link to='./'> HOME </Link>
            </div>
        );
    }


    renderBrowserSpecs(){
        return(
            <div className="browser-specs">
                <Link className="nav-link" to="/browserspecs">BowserSpecs</Link>
            </div>
        );
    }


    renderAboutMeIcon(){
        return(
            <div className="dropdown-menu-right nav-icon" >
                <div className="nav-icon-wrap" data-toggle="dropdown">
                    <img src={aboutme} className="about-me-icon rounded-circle" alt=""></img>    
                </div>
                <div className="dropdown-menu icon-dropdown-menu">
                        <h6 className="dropdown-header">Developer</h6>
                        <div className="dropdown-item" >Nelson Zeas</div>
                        <a className="dropdown-item" href="https://github.com/zeasnelson">Github</a>
                        <div className="dropdown-divider"></div>
                        <h6 className="dropdown-header">Contact Me</h6>
                        <div className="dropdown-item" >zeasnelson@gmail.com</div>
                        <a className="dropdown-item" href="https://www.linkedin.com/in/zeasnelson/">LinkedIn</a>
                </div>
            </div>
        );
    }
    render(){
        return(

                <div className="container nav-bar mt-2">
                    <div className="row m-auto">
                        <div className="col-sm-12">
                            {this.renderHome()}
                            {this.renderBrowserSpecs()}
                            {this.renderCourseLinks()}
                            {this.renderAboutMeIcon()}
                        </div>
                    </div>
                </div>
              
        );
    }

}