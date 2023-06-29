import React from 'react'
import LikeButton from './LikeButton'
const fetchPosts = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function ListOfPosts({ params }) {
    const posts = await fetchPosts()
  return (
    <section>
      {posts.slice(0,5).map(post=> (
        <article key={post.id}>
            <h3 style={{ color: "#09f"}}>{post.title}</h3>
            <p>{post.body}</p>
            <LikeButton id={post.id}/>
        </article>
      ))}
    </section>
  )
}


