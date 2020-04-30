import React from "react"
import Layout from "../components/Layout"
import MainHero from "../components/MainHero"
import { graphql } from "gatsby"

const contact = ({ data }) => {
  const backgroundimage = data.connectHero.childImageSharp.fluid
  return (
    <Layout>
      <MainHero img={backgroundimage}></MainHero>
    </Layout>
  )
}

export const query = graphql`
  query getconnectHero {
    connectHero: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default contact
