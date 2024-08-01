import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://www.wsupercars.com/wallpapers-regular/Formula-1/Scuderia-Ferrari/2024-Formula1-Ferrari-SF-24-003-1600.jpg",
      top: "56%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      top: "52%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "40%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1676927066367-92d6a345e932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
      top: "55%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/1020/301/239/bike-gran-motogp-motorbike-wallpaper-preview.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
  ]);

  const{ scrollYProgress }=useScroll();
    scrollYProgress.on("change", (data) => {
        function imagesShow(arr){
          setimages(prev=> prev.map((item,index)=>  arr.indexOf(index) === -1 ? {...item ,isActive:false} : {...item,isActive:true}
            )
          );
        }
        switch(Math.floor(data*100)){
          case 0:
            imagesShow([]);
            break;
          case 1:
            imagesShow([0]);
            break;
          case 2:
            imagesShow([0,1]);
            break;
          case 3:
            imagesShow([0,1,2]);
            break;
          case 4:
            imagesShow([0,1,2,3]);
            break;
          case 6:
            imagesShow([0,1,2,3,4]);
            break;
          case 8:
            imagesShow([0,1,2,3,4,5]);
            break;
        }
    })


  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="mx-20 text-[20vw] font-medium leading-none tracking-tight">Noticias</h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((image, index) =>
            image.isActive && (
              <img
                key={index}
                className="absolute w-52 rounded-lg translate-x-[-25%] translate-y-[-10%]"
                src={image.url}
                alt={`Work image ${index + 1}`}
                style={{ top: image.top, left: image.left }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;