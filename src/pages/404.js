import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { navigate, Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: black;
`;

const NewComp = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let otherTimer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(otherTimer);
  }, [count]);

  return (
    <>
      <StaticImage
        src="../project-assets/wave.jpg"
        alt="a wave"
        placeholder="blurred"
        layout="fullWidth"
        transformOptions={{grayscale: 'rgba(0, 0, 0, 0.2)'}}
      />
      Photo by <a href="https://unsplash.com/@matthardy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matt Hardy</a> on <a href="https://unsplash.com/s/photos/waves?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

    <Wrapper>
      <h1>404</h1>
      <h2>Oop, this isn't one of my pages</h2>
      <h2>You will be returned to the <Link to='/'>homepage</Link>{(count <=3 && count > 0) ? (' in '+ count) : ''}</h2>

    </Wrapper>
    </>
  );
};
export default NewComp;
