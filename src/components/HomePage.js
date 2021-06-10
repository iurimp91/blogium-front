import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const request = axios.get("http://localhost:5000/posts");

    request.then(response => {
      setPosts(response.data);
    });

    request.catch(error => {
      alert("Algo deu errado com sua requisição, por favor, tente novamente.");
    });
  }, []);

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
