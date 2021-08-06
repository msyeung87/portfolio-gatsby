import * as React from "react"
import { Link } from 'gatsby'
import * as headerStyles from "../styles/header.module.scss"
import hamburger from "../images/header/hamburger.png"
import closeX from "../images/header/closeX.svg"
import siteLogo from '../images/my-logo.png'

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            showMenu : false,
        };
    
        this.showMenu = this.showMenu.bind(this);
    }
  
    showMenu(event) {
        event.preventDefault();
        
        this.setState({
        showMenu: !this.state.showMenu,
        });
    }
  
    render () {

    const showMenu = this.state.showMenu;
    let navButton;
    let navMenu;

    if(showMenu) {
        navButton = <input type="image" alt="Close menu" id={headerStyles.closeX} src={closeX} onClick={this.showMenu}/>;

        navMenu = 
        <div id={headerStyles.navMobileFullscreenContainer}>
            <div id={headerStyles.navMobileFullscreen}>
                <nav id={headerStyles.navMobileItems}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                </nav>
            </div>
        </div>;
    }

    else {
        navButton = <input type="image" alt="Open menu" id={headerStyles.hamburger} src={hamburger} onClick={this.showMenu}/>;
        navMenu = 
        <div >
            <div id={headerStyles.navMobileFullscreenShrink}>
                
            </div>
        </div>;
    }

    return (
        <header id={headerStyles.headerContent}>

            <nav id={headerStyles.navigation}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div class={headerStyles.headerLogo}>
                <Link to="/"><img src={siteLogo} alt="MY Logo"/></Link>
            </div>
            <nav id={headerStyles.navigationMobile}>
                {navMenu}
                {navButton}
            </nav>

        </header>
      );
    }
}