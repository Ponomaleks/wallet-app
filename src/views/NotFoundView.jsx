import React from 'react';
// import { Link } from 'react-router-dom';
import './404.css';

function NotFoundView() {
  return (
    <div className="errorWrapper">
      <div className="paper pink">
        <div className="tape-section"></div>
        <p>Page not found 😟</p>
        <div className="tape-section"></div>
      </div>
      <div className="paper blue">
        <div className="top-tape"></div>
        <p>Wanna go Home? 😉</p>
      </div>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="stickerLink"
      >
        {' '}
        Click Here
      </a>
    </div>
  );
}

export default NotFoundView;
