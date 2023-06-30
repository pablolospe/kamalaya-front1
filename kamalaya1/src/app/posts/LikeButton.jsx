'use client';
import React from 'react';

function LikeButton() {
  const [liked, setliked] = React.useState(false);

  return <button onClick={()=> setliked(!liked)}>
    {liked ? "❤️" : '🖤' }
  </button>;
}

export default LikeButton;
