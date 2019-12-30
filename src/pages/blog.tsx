import React from "react";
import {Layout} from "../components/layout";
import { graphql } from "gatsby";

export default function Blog({data}) {
    console.warn(data)
    return (
    <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>);
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
          date
          path
          title
      }
    }
  }
`