import React from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled  from '@emotion/styled'
import HomeLayout from '../components/homelayout';
import ReadLink from '../components/readlink';
import useIsOpen from '../hooks/use-isOpen';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
// import vsDark from 'prism-react-renderer/themes/vsDark';
// import vsLight from 'prism-react-renderer/themes/vsLight';
// import synthwave84 from 'prism-react-renderer/themes/synthwave84';
// import ultramin from 'prism-react-renderer/themes/ultramin';
// import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
  max-width: 650px;
`
const BlogWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`

//make a styles h3
const H3 = styled.h3`
  margin-top: 1rem;
  font-family: Poppins;
  text-decoration: underline;
`
const P = styled.p`
  margin: 10px 0;
`
const Pre = styled.pre`
  padding: .5rem;
  overflow-wrap: break-word;
  overflow-x: auto;
  @media (max-width: 375px) {
    font-size: .8rem;
  }
`
const components = {
  h3: H3,
  p: P,
  // syntax highlighting on code snippets
  // Thx Malik - https://malikgabroun.com/blog/syntax-highlighting-in-gatsby-mdx/
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        theme={nightOwl}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    );
  },
}

// this picks up from context the slug we defined
// we have the slug passed though a forEach in gatsby=node.
// so each pageCreated will have it's own slug
// we handle what to do with each slug here, in out template
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

// data is the result of the above graphql query
const PostTemplate = ({ data: { mdx: post } }) => {
  const [isOpen, toggleOpen] = useIsOpen()
  return (
  <HomeLayout isOpen={isOpen} toggleOpen={toggleOpen}>
    <BlogContainer>
    <BlogWrapper>
      <Helmet>
        <html lang='en' />
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta} />
      </Helmet>
      {/*
      <h1>{post.frontmatter.title}</h1>
      <p css={css`font-size: 0.75rem`}>{post.frontmatter.author}</p>
      */}
      <MDXProvider components={components}> 
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
      <ReadLink to='/'>Back to Home</ReadLink>
    </BlogWrapper>
    </BlogContainer>
  </HomeLayout>
  )
}

export default PostTemplate;
