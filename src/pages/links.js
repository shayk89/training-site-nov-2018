import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const Links = () => (
  <StaticQuery
    query={graphql`
      query LinksQuery {
        allLinksYaml {
          edges {
            node {
              name
              description
              posted_by
              url
            }
          }
        }
      }
    `}
    render={({ allLinksYaml: { edges } }) => (
      <Layout>
        <div>
          <h2 style={{ marginBottom: '40px' }}>Our favorite links</h2>
          {edges.map(({ node }) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '5px' }}>{node.name}</h3>
                <p style={{ marginBottom: '15px' }}>{node.description}</p>
                <p style={{ marginBottom: '10px' }}>
                  Posted by {node.posted_by}
                </p>
                <p style={{ marginBottom: '5px' }}>
                  <a href={node.url}>Visit the URL</a>
                </p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '2em' }}>
            <Link to="/">Go back to the homepage</Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
export default Links
