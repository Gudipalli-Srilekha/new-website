import React from 'react';
import { useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';

const ScrollingNews = ({cat}) => {
  const [newsData, setnewsData] = useState("");

  const fetchData = async () => {
    await axios.get(
      cat
        ? 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c00c45977ede4dc7b9f22c6bc297a588'
        : 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c00c45977ede4dc7b9f22c6bc297a588'
    )
      .then((res) => setnewsData(res.data.articles))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  
  return (
    <div className="scrolling-news">
      <ul>
        { newsData.map((newsItem) => (
          <li key={newsItem.id}>
            <span className="news-title">{newsItem.title}</span>
            <span className="news-content">{newsItem.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingNews;