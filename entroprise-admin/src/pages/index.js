import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Admin, Resource, ListGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  </Layout>
)

export default IndexPage
