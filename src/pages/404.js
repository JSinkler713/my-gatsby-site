import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewComp = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate('/');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let otherTimer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(otherTimer);
  }, [count]);

  return (
    <Wrapper>
      <h1>Oop, this isn't one of my pages</h1>
      <h2>Expect to be returned to the homepage in {count}</h2>
    </Wrapper>
  );
};
export default NewComp;
