import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello from Gatsby</h1>
    <p>This is the static site for the Intraedge React/Node training!</p>
    <Link to="/links">Go to links page</Link> |{' '}
    <Link to="/people">Go to people page</Link>
  </Layout>
)

export default IndexPage
