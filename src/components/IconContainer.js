import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const IconContainer = () => {
  const icons = ['React', 'Gatsby']
  const iconsArray = icons.map((icon) => (
    <div>
      <StaticImage
        src={(()=> `../icons/${icon}.png`)()}
        alt={`${icon}`}
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
      <img style={{width: '64px', height: '64px'}} src={`icons/${icon}`} alt={icon}/>
      <p>{icon}</p>
    </div>
  ));
  return <div>{iconsArray}</div>;
};
export default IconContainer;
