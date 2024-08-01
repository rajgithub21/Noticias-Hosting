import React, { useState, useEffect } from 'react';
import Component from './Component';

function Formula1(){
  const APIKEY = "7ffb5475552e45a3bc7f218f5ed4a1c9";
  const url = "https://newsapi.org/v2/everything?q=";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchNews(content) {
    const response = await fetch(`${url}${content}&apiKey=${APIKEY}`);
    const result = await response.json();
    setArticles(result.articles);
    setLoading(false);
  }

  useEffect(() => {
    fetchNews("Formula1");
  }, []);

  // console.log(articles)  

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
    backgroundImage: "url('https://www.wsupercars.com/wallpapers-regular/Formula-1/Aston-Martin/2024-Formula1-Aston-Martin-AMR24-005-1080.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    
  
  };

  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "url('https://www.wsupercars.com/wallpapers-regular/Formula-1/Aston-Martin/2024-Formula1-Aston-Martin-AMR24-005-1080.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    filter: 'blur(10px)',
    zIndex: -1
  };
  return (
    <div style={containerStyle}>
        <h1 className='mt-5 text-white text-6xl  font-bold'>Top-Headlines</h1>
      <div style={blurOverlayStyle}></div>
      <div className='px-14 py-12'>
    <Component articles={articles} loading={loading}/>
      </div>
      
    </div>
  );
}

export default Formula1;