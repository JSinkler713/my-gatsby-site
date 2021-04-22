import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image  from 'gatsby-image'
import ReadLink from './readlink.js';

const WrapAll = styled.div`
  display: block;
`

const BreakingP = styled.p`
  word-break: break-word;
  white-space: normal;
  font-size: 12px;
  text-decoration: none;
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 175px;
  border-block-start:1px solid hsl(30deg 0% 90% / 100%);
  border-radius: 0px 0px 0px 5px;
  justify-content: space-between;
  gap: 10px;
  padding: 15px 10px;
`
const CardWrapper = styled.div`
  border-block-start:1px solid hsl(30deg 0% 90% / 100%);
  border-inline-start:1px solid hsl(30deg 0% 90% / 100%);
  background: #fff;
  min-width: 200px;
  border-radius: 7px 7px 5px 5px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: block;
  overflow-x: hidden;
  box-shadow: 3px 2px 2px 1px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease 0.1s;

  &:hover {
    background-image: linear-gradient(rgb(226 224 224 / 15%), rgb(226 224 224 / 15%));
    transform: translateY(-5%);
    box-shadow: 4px 3px 4px 3px rgba(0, 0, 0, 0.4);
  }
`
const LinkWrapper = styled(Link)`
  text-decoration: none;
  &:hover {
    font-weight: normal
  }

`

const PostPreviewCard = ({post}) => {
  return(
      <LinkWrapper to={post.slug}>
        <CardWrapper > 
        <Image 
          fluid={post.image.sharp.fluid}
          css={css`
          * {
            width:400px;
            height:140px;
            margin-top: 0;
            border-radius: 5px 5px 0px 0px;
          }
        `}
        alt={post.title}
        />
          <CardContent>
            <div>
              <h3>{post.title}</h3>
              <BreakingP>{post.excerpt}</BreakingP>
            </div>
            <ReadLink to={post.slug}>Read this post </ReadLink>
          </CardContent>
        </CardWrapper>
      </LinkWrapper>
  )
}

export default PostPreviewCard;
