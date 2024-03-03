import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='all-center my-3'>
      <h1>Github Finder App :(</h1>
      <p className='lead'>For Searching Click  home Button ....for github accounts </p>
      <Link to='/' className='btn btn-primary'>
        wellcome to Home
      </Link>
    </div>
  );
};
