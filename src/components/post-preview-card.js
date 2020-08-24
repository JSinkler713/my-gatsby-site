import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image  from 'gatsby-image'
import ReadLink from './readlink.js';

const PostPreviewCard = ({post}) => {
  return(
    <article css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
        }
    `}>
      <Link to={post.slug} css={css` margin: 1rem 1rem 0 0; min-width: 100px; `}>
        <Image 
          fluid={post.image.sharp.fluid}
          css={css`
          * {
            width:100px;
            margin-top: 0;
          }
        `}
        alt={post.title}
        />
      </Link>
      <div>
        <h3><Link to={post.slug}>{post.title}</Link></h3> <p>{post.excerpt}</p>
        
        <ReadLink to={post.slug}>Read this post </ReadLink>
        </div>
    </article>
  )
}

export default PostPreviewCard;
