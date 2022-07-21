import React from 'react';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <React.Fragment>
      <div className="container d-flex align-items-center justify-content-center">
        <p className='p-1'>Err</p>
        <img src="https://i.ibb.co/rvWJPRk/meme.webp" alt="Page not Found" />
        <p className='p-2'>r</p>
      </div>
      <p className='p-3 text-center'>404 Page Not Found</p>
    </React.Fragment>
  )
}

export { NotFound };