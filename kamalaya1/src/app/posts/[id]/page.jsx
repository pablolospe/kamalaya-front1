import React from 'react';

function Post({ params }) {
    const { id } = params
  return (
    <div>
      <h2>Esto es el post {id}</h2>
    </div>
  );
}

export default Post;
