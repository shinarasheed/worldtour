import React from "react"
import Layout from "../components/Layout"
import MainHero from "../components/MainHero"
import Banner from "../components/Banner"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const index = ({ data }) => {
  const backgroundimage = data.heroImage.childImageSharp.fluid
  console.log(backgroundimage)
  return (
    <Layout>
      <MainHero home="true" img={backgroundimage}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptas."
        >
          <AniLink fade className="btn-white" to="/tours">
            explore tours
          </AniLink>
        </Banner>
      </MainHero>
    </Layout>
  )
}

export const query = graphql`
  query getHeroImage {
    heroImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default index
