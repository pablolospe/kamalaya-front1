import Link from 'next/link';
import React from 'react';
import { resolve } from 'styled-jsx/css';
const fetchComments = async (id)=>{
  await new Promise(resolve => setTimeout(resolve, 3000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
        revalidate: 60
    }
  })
  .then(res => res.json())
}

async function Post({ params, children }) {
  const { id } = params
  
  const comments = await fetchComments(id)
  
  return (
    <ul style={{ background:'#eee'}}>
        {comments.map(comment=>(
            <li key={comment.id}>
                <h4>{comment.name}</h4>
                <small>{comment.body}</small>
            </li>
        ))
        } 
    </ul>
  )
}

export default Post