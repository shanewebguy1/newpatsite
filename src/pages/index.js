import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"


export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allWordpressPage.nodes.map(node => (
        <Post
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
  allWordpressPage(filter: {featured_media: {slug: {ne: "null"}}}) {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
        slug
      }
    }
  }
}
`
