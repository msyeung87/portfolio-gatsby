import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.scss'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function about() {
    return (
        <Layout>
            <div className={styles.aboutPage}>
                <StaticImage
                    src="../images/selfieWithMochi.jpg"
                    alt="Matt Yeung headshot"
                    className={styles.headshot}
                />
                <h3>I'm a Front End Developer working at <a href="https://www.halopowered.com/" target="_blank" rel="noreferrer">Halo Media</a> creating awesome sites for artists. I have a great passion for art. I love implementing technology and art to create intricate and practical applications. In my spare time, I love tinkering on cars and playing fetch with my sweet Poodle, Mochi.</h3>
                <div className="cta">
                    <Link to="/projects">See My Works</Link>
                </div>
            </div>
        </Layout>
    )
}
