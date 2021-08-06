import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.scss'
import github from "../images/icons/icon-github.svg"
import linkedin from "../images/icons/icon-linkedin.svg"
import mail from "../images/icons/icon-mail.svg"
import resume from "../static/MatthewYeungResume.pdf"

export default function contact() {
    return (
        <Layout>
            <div className={styles.contactPage}>
                <h3>Get in touch</h3>
                <ul>
                    <li><a href="https://github.com/msyeung87" target="_blank" rel="noreferrer"><img src={github} alt="GitHub"/></a></li>
                    <li><a href="https://www.linkedin.com/in/mattyeung/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"/></a></li>
                    <li><a href="mailto:mattyeung87@gmail.com" target="_blank" rel="noreferrer"><img src={mail} alt="Mail"/></a></li>
                </ul>
                <h4>Or check out my <a href={resume} target="_blank" rel="noreferrer">resume</a></h4>
            </div>
        </Layout>
    )
}
