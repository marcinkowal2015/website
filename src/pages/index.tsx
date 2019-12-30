import React from "react";
import {Layout} from "../components/layout";
import { graphql } from "gatsby";
import {Link} from "gatsby";

const IndexPage = ({data}: any) => {
  const recentBlogList = data.allMarkdownRemark.edges
    .map(x => ({id: x.node.id, ...x.node.frontmatter}))
    .map(b => {
      return (
      <li key={b.id}>
        <Link css={{textDecoration: "none", color: "#D36AC2"}} to={b.path}>{b.title}</Link>
      </li>);
    });
  return (
    <Layout>
      <h2>Recent articles</h2>
      <ul css={{listStyleType: "square", textDecoration: "none"}}>
        {recentBlogList}
      </ul>
    </Layout>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`