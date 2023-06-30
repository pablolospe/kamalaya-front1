import Link from 'next/link';
import React from 'react';

async function Post({ params, children }) {
  const { id } = params
  
  const fetchSinglePost = ()=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json()) 
  }
  const post = await fetchSinglePost(id)
  
  return (
    <article>
      <h1>{post.id}) {post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`} >Ver comentarios</Link>
      {children}
    </article>
  )
}

export default Post