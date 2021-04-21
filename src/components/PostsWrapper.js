import styled from '@emotion/styled';

const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 30px;
  @media (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 660px) {
   grid-template-columns: 310px;
   justify-content: center;
 }
`

export default PostsWrapper

