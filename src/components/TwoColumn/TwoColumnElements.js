import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const TwoColumnContainer = styled.div`
  color: black;
  background: white;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
  /* TODO: fix this */
    padding-top: 20px;
  }
`
export const TwoColumnWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: ${({vh})=> (vh ? vh : '100vh')};
  width: ${({fullBleed})=> (fullBleed ? '100vw' : '100%')};
  margin: 0 auto;
  margin-top: ${({mTop})=> (mTop ? '80px': '0px')};
  padding: 0px 24px;
  justify-content: center;
`
export const Row = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns:  1fr;
    gap: 5px;
    padding-top: 40px;
  }
`
export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`

