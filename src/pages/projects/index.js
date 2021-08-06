import { graphql } from 'gatsby'
import React from 'react'
import Masonry from 'react-masonry-component';
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.scss'
import Img from 'gatsby-image'

export default function index({data}) {
    const projects = data.projects.nodes

    return (
        <Layout>
            <div className={styles.projectPage}>
       
                <Masonry
                    className={styles.projectsContainer} // default ''
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    
                    {projects.map(project => (
                        <div key={project.id} className={styles.nodeProject}>
                            <div className={styles.projectContent}>
                                <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
                                <div className={styles.nodeOverlay}>
                                    <a href={"//" + project.frontmatter.domain} target="_blank" rel="noreferrer">{[project.frontmatter.title]}</a>
                                </div>   
                            </div> 
                        </div>
                        
                    ))}
                    
                </Masonry>
            </div>
        </Layout>
    )
}


export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
            nodes {
                frontmatter {
                    title
                    domain
                    image {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                id
            }
        }
    }
`