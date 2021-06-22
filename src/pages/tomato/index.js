import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';

const NewComp = () => {
  return(
    <div>
      Hello :) 😁.
      <Link to='/tomato/what'>To the what page</Link>
    </div>
  )
};
export default NewComp;
