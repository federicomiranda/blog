import React, { useState, useEffect } from 'react';
import '../styles/ListOfArticles.css';
import axios from 'axios';
import { Ripple } from 'react-spinners-css';
import ArticleHome from './ArticleHome';
import BASE_URL from '../utils/api';


const ListOfArticles = () => {
  const [posts, setPosts] = useState([]);

  const compare = (p1, p2) => {
    let comparison = 0;
    if (p1.created_at < p2.created_at) {
      comparison = 1;
    } else if (p1.created_at > p2.created_at) {
      comparison = -1;
    }
    return comparison;
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios(`${BASE_URL}/posts`);
      const result = response.data.filter((item) => item.visible);
      result.sort(compare);
      setPosts(result);
    };

    getPosts();
  }, []);

  return (
    <main className="ListOfArticles">
      {posts.length === 0
        ? <Ripple color="#222" className="ListOfArticles__loader" />
        : (
          <div className="container ListOfArticles__container">
            {posts.map((article) => <ArticleHome key={article.id} {...article} />)}
          </div>
        )}
    </main>
  );
};

export default ListOfArticles;
