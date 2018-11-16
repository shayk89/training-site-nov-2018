import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const People = () => (
  <StaticQuery
    query={graphql`
      query PeopleQuery {
        allPeopleYaml {
          edges {
            node {
              username
              name
              description
              url
            }
          }
        }
      }
    `}
    render={({ allPeopleYaml: { edges } }) => (
      <Layout>
        <div>
          <h2 style={{ marginBottom: '40px' }}>People in this training...</h2>
          {edges.map(({ node }) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={`https://github.com/${node.username}.png`}
                style={{ marginRight: '20px', width: 'auto', height: '100px' }}
              />
              <div style={{ flexDirection: 'column' }}>
                <h4 style={{ marginBottom: '10px' }}>{node.name}</h4>
                <p style={{ marginBottom: '5px' }}>{node.description}</p>
                <p style={{ marginBottom: '5px' }}>
                  <a href={node.url}>Find me online</a>
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
export default People
