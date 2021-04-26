import React, {useState, useEffect, useContext} from 'react'; 
import { TwoColumnContainer, TwoColumnWrapper, Row, Column } from './TwoColumnElements'


const TwoColumn = ({firstEls, secondEls, id })=> {
  return (
    <>
      <TwoColumnContainer lightBg={true} id={id}>
        <TwoColumnWrapper >
          <Row>
            <Column colNum={'1'} >
              {firstEls}
            </Column>
            <Column colNum={'2'} >
              {secondEls}
            </Column>
          </Row>
        </TwoColumnWrapper>
      </TwoColumnContainer>
    </>
  )
}
export default TwoColumn;
