import React, { useState, useEffect } from 'react';

function Component({articles}) {

  console.log("articles", articles)


  return (
    <div>
      <div className="align-middle items-center grid grid-cols-3  w-[100%]">

      {articles.map((article, index) => 
      index < 6 && (
        <div 
          key={index} 
          className="mt-12 mx-2 px-2 py-2 pb-3 w-[80%] h-[27rem] bg-zinc-900 border-t-2 border-b-2 border-r-2 border-l-2 rounded-2xl text-white overflow-hidden"
        >
          <div className="items-center justify-between">
            {article.urlToImage && (
              <img className="w-full h-[10rem] rounded-xl object-cover" src={article.urlToImage} alt={article.title} />
            )}
            <h1 className="mt-1 p-2 font-bold text-zinc-100 text-2xl">{article.title}</h1>
            <h2 className="p-2 font-medium text-xl">{article.url}</h2>
            <p className="p-1 font-normal">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
    

{/* <div className=' mt-12 px-2 py-2 pb-3 w-[20%] h-[27rem] bg-zinc-900 border-t-2 border-b-2 border-r-2 border-l-2 rounded-2xl text-white justify-center text-ellipsis overflow-hidden '>
      {loading ? (
        <p>Loading...</p>
      ) : (
        articles.map((article, index) => (
          <div className="items-center justify-between" key={index}>
            
            {article.urlToImage && (
              <img className="w-full h-[10rem] rounded-xl object-'fit'" src={article.urlToImage} alt={article.title} />
            )}

            <h1 className="mt-1 p-2 font-bold text-zinc-100 text-2xl">{article.title}</h1>
            <h1 className='p-2 font-medium text-xl' >{article.url}</h1>
            <p className="p-1 font-normal">{article.description}</p>
          </div>
        ))
      )}
    </div> */}
    </div>
    
  );
}

export default Component;
