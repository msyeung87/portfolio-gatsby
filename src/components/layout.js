import React from 'react'
import Header from './Header'
import { Link } from 'gatsby'
import '../styles/global.scss'

import siteLogo from '../images/my-logo.png'

export default function Layout({children}) {
    return (
        <div className="layout">
            <div className="left-logo-container">
                <Link to="/"><img src={siteLogo} alt="MY Logo"/></Link>
            </div>
            <div class="main-container">
                <Header />
                <div className="body-container">
                    {children}
                </div>
                <footer>
                    <p>&copy; {new Date().getFullYear()} Matt Yeung</p>
                </footer>
            </div>
        </div>
    )
}