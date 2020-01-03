import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PageLayout = ({ data }) => {
  const page = data.wordpressPage
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="row justify-content-md-center">
            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
      }
      excerpt
    }
  }
`
