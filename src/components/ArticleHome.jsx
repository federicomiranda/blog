import React from 'react';
import '../styles/ArticleHome.css';
import { Link } from 'react-router-dom';

const ArticleHome = (article) => {
  const {
    id, title, content, category,
  } = article;
  const finalContent = content.substr(0, 180);
  const urlTitle = title.toLowerCase().split(' ').join('-');
  return (
    <article className="ArticleHome">
      <Link className="ArticleHome__link" to={`/post/${id}/${urlTitle}`}>
        {category && (
          <span
            className={`ArticleHome__tag ArticleHome__tag-${category.category_name}`}
          >
            {category.category_name}
          </span>
        )}
        <h1 className="ArticleHome__title">{title}</h1>
        <p className="ArticleHome__text">{`${finalContent}...`}</p>
      </Link>
    </article>
  );
};

export default ArticleHome;
