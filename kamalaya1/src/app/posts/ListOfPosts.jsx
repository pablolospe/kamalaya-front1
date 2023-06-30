import React from 'react';
import LikeButton from './LikeButton';
import Link from 'next/link';
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
};

export default async function ListOfPosts({ params }) {
  const posts = await fetchPosts();
  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <article
          key={post.id}
          style={{
            border: '3px solid black',
            borderRadius: '5px',
            padding: '5px',
            margin: '5px',
          }}
        >
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <h3 style={{ color: '#09f' }}>
              <span>{post.id}) </span>
              {post.title}
            </h3>
            <p>{post.body}</p>
          </Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  );
}
