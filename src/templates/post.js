import React from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout';
import ReadLink from '../components/readlink';

// this picks up from context the slug we defined
export const query = graphql`
  query($slug: String){
    mdx(frontmatter: { slug: {eq: $slug}}) {
      frontmatter {
        title
        author
        meta
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
      <Helmet>
        <html lang='en' />
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta} />
      </Helmet>
    <h1>{post.frontmatter.title}</h1>
    <p css={css`font-size: 0.75rem`}>{post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to='/'>Back to Home</ReadLink>
  </Layout>
)

export default PostTemplate;
