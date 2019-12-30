import React from "react";
import {Layout} from "../components/layout";
import { graphql } from "gatsby";
import {Link} from "gatsby";

export default function Blog({data}) {
    const blogList = data.allMarkdownRemark.edges
    .map(x => ({id: x.node.id, ...x.node.frontmatter}))
    .map(b => {
      return (<li key={b.id}><Link to={b.path}>{b.title}</Link></li>)
    });
    return (
    <Layout>
        <h1>Migrating JavaScript to TypeScript</h1>
        <ul>{blogList}</ul>
    </Layout>);
}

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
`;