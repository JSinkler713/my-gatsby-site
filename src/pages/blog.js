import React from 'react';
// gatsby prepackaged w/ reachrouter asn wraps w/ a bit more
// this has same API as reach-router
import { Link } from 'gatsby'
import Layout from '../components/layout'
import PostsWrapper from '../components/PostsWrapper';
import PostPreviewCard from '../components/post-preview-card'
import usePosts from '../hooks/use-posts'

export default () => {
  const posts = usePosts()

  return(
      <Layout>
        <h1 style={{marginBottom: '30px'}}>My latest posts</h1>
      <PostsWrapper>
        {posts.map(post=> (
          <pre><PostPreviewCard key={post.slug} post={post}/></pre>
        ))}
      </PostsWrapper>
      </Layout>
  )
}
