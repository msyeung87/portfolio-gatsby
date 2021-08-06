import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.scss'

export default function index() {
  return (
    <Layout>
      <div className={styles.homePage}>

        <div>
          <h2>Hello, I'm <span>Matt Yeung</span>.</h2>
          <h3>I'm a Front End Developer and Artist.</h3>
          <div className="cta">
            <Link to="/about">More about me</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
