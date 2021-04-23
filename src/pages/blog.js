import React from 'react';
// gatsby prepackaged w/ reachrouter asn wraps w/ a bit more
// this has same API as reach-router
import { Link } from 'gatsby'
import HomeLayout from '../components/homelayout'
import PostsWrapper from '../components/PostsWrapper';
import PostPreviewCard from '../components/post-preview-card'
import usePosts from '../hooks/use-posts'
import {blogHeader} from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection'

export default () => {
  const posts = usePosts()

  return(
    <HomeLayout style={{isolation: 'isolate' }}>
      <InfoSection {...blogHeader } vh={'70vh'}/>
        <PostsWrapper >
        {posts.map(post=> (
          <pre><PostPreviewCard key={post.slug} post={post}/></pre>
        ))}
        </PostsWrapper>
      </HomeLayout>
  )
}
