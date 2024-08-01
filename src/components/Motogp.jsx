import React, { useState, useEffect } from 'react';
import Component from './Component';

function Motogp() {
  const APIKEY = "7ffb5475552e45a3bc7f218f5ed4a1c9";
  const url = "https://newsapi.org/v2/everything?q=";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchNews(content) {
    try {
      const response = await fetch(`${url}${content}&apiKey=${APIKEY}`);
      const result = await response.json();
      setArticles(result.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews("Motogp");
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: "url('wp6416437-motogp-20-wallpapers.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'right',
  };

  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.8)", // Adjust this as needed for the blur effect
    filter: 'blur(10px)',
    zIndex: -1
  };

  return (
    <div style={containerStyle}>
        <h1 className='mt-5 text-white text-6xl  font-bold'>Top-Headlines</h1>
      <div style={blurOverlayStyle}></div>
      <div className='px-14 py-12'>
        <Component articles={articles} loading={loading} />
      </div>
    </div>
  );
}

export default Motogp;
