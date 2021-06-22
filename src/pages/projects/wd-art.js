import React, { useState, useEffect, useContext } from 'react';
import HomeLayout from '../../components/homelayout';
import { Link } from 'gatsby';
// import '../phoneStyle.css'
import { useSpring } from 'react-spring';
import useIsOpen from '../../hooks/use-isOpen';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Title, } from '../../components/portfolioElements';

export default function() {
  //const [show1, setShow1] = useState(true);
  //const [show2, setShow2] = useState(true);
  const [isOpen, toggleOpen] = useIsOpen();

  return (
    <HomeLayout
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      style={{ maxWidth: '800px' }}
    >
      <StaticImage
        src="../../portfolio-assets/wdart-preview.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
      />
      <Title>WDArt</Title>
    </HomeLayout>
  )
}
