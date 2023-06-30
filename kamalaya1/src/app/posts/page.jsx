import React from 'react';
import ListOfPosts from './ListOfPosts';
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
};

async function PostsPage({ params }) {
  const posts = await fetchPosts();
  return (
    <section>
      <ListOfPosts />
    </section>
  );
}

export default PostsPage;
