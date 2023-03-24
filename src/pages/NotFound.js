import React from 'react';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>😕 Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <p>Maybe try going back to the <a href="/">home page</a>?</p>
      <p>🕵️‍♀️🔍</p>
    </div>
  );
}

export default NotFound;