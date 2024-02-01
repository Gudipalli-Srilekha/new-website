import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const apiKey = '32f7581059d0fd089841a7710adb34f9';
  const apiUrl = 'https://gnews.io/api/v4/top-headlines';

  const handleSearch = async () => {
    try {
      if (!searchQuery) {
        setError('Please enter a search query.');
        setStatus('error');
        return;
      }

      setStatus('loading');

      const response = await axios.get(apiUrl, {
        params: {
          q: searchQuery,
          token: apiKey,
        },
      });

      const data = response.data;

      console.log('API Response:', data);

      if (data.status === 'ok') {
        setNewsArticles(data.articles);
        setError(null);
        setStatus('success');
      } else {
        setNewsArticles([]);
        setError(data.message || 'Unknown error');
        setStatus('error');
      }
    } catch (error) {
      console.error('API Request Error:', error);

      if (error.response && error.response.data) {
        setError(`API Error: ${error.response.status} - ${error.response.data.message}`);
      } else {
        setError('Error making the request. Please check your internet connection.');
      }

      setNewsArticles([]);
      setStatus('error');
    }
  };

  return (
    <div>
      <h1>News Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled={status === 'loading'}>
          {status === 'loading' ? 'Searching...' : 'Search'}
        </button>
      </div>

      {status === 'error' && <p style={{ color: 'red' }}>{error}</p>}

      {status === 'success' && (
        <ul>
          {newsArticles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
