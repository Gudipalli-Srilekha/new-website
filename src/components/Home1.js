import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UncontrolledCarousel } from 'reactstrap';
import ScrollingNews from './ScrollingNews';

const Home1 = ({ cat }) => {
  // const newsData = [
  //   { id: 1, title: 'Breaking News 1', content: '...' },
  //   { id: 2, title: 'Important Update', content: '...' },
  //   // Add more news items as needed
  // ];
  const [NewsData, setNewsData] = useState("");

  const fetchData = async () => {
    await axios.get(
      cat
        ? 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c00c45977ede4dc7b9f22c6bc297a588'
        : 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c00c45977ede4dc7b9f22c6bc297a588'
    )
      .then((res) => setNewsData(res.data.articles))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div>
      
      {NewsData ? (
       <div>
       {NewsData.length > 0 ? (
         <UncontrolledCarousel
           items={NewsData.slice(0, 3).map((item) => ({
             altText: item.url,
             caption: item.title,
             key: item.url,
             src: item.urlToImage,
           }))}
         />
       ) : (
         'Loading....'
       )}
     </div>
      ) : (
        "Loading...."
      )}
    </div>
  );
};

export default Home1;
