import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BASE_URL from '../utils/api';
import '../styles/SinglePost.css';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await axios(`${BASE_URL}/posts/${id}`);
      setPost(response.data);
    };

    getPost();
  }, []);

  return (
    <div className="container SinglePost_container">
      {Object.keys(post).length !== 0 && (
      <article className="SinglePost_article">
        <h1 className="SinglePost_title">{post.title}</h1>
      </article>
      )}
    </div>
  );
};

export default SinglePost;
