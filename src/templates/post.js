import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx'
//does it need to be plugin?
import Layout from '../components/layout';
import ReadLink from '../components/readlink';

// this picks up from context the slug we defined
export const query = graphql`
  query($slug: String){
    mdx(frontmatter: { slug: {eq: $slug}}) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p css={css`font-size: 0.75rem`}>{post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to='/'>Back to Home</ReadLink>
  </Layout>
)

export default PostTemplate;
