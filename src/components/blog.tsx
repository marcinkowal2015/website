import React from "react";
import {Layout} from "../components/layout";
import { graphql } from "gatsby";

export default function Blog({data}) {
    return (
    <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>);
}

export const pageQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`