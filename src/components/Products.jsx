import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

function Products() {
  const [data, setData] = useState([
    {
      title: "Cricket",
      description: "Cricket is a widely beloved sport, especially popular in countries like India, Australia, and England, played between two teams of eleven players on a circular or oval field. Governed by the International Cricket Council (ICC),",
      live: true,
      case: false,
      isactive: false
    },
    {
      title: "Formula 1",
      description: "Formula 1, often abbreviated as F1, is the pinnacle of single-seater auto racing and the highest class of international motorsport. Governed by the Fédération Internationale de l'Automobile (FIA), F1 features a series of races known as Grands Prix, held on various circuits worldwide.",
      live: true,
      case: false,
      isactive: false
    },
    {
      title: "Motogp",
      description: "MotoGP is the premier class of motorcycle road racing, sanctioned by the Fédération Internationale de Motocyclisme (FIM). Featuring high-performance bikes and top riders, MotoGP races are held on circuits worldwide, showcasing speed, skill, and intense competition",
      live: true,
      case: false,
      isactive: false
    },
    {
      title: "Football",
      description: "Football, known as soccer in some countries, is the world's most popular sport, played by two teams of eleven players on a rectangular field with a goal at each end. Governed by FIFA, it features major tournaments like the FIFA World Cup, which attracts millions of viewers globally.",
      live: true,
      case: false,
      isactive: false
    },
    {
      title: "Tennis",
      description: "Tennis is a globally popular sport played between two players (singles) or two teams of two players (doubles) on a rectangular court divided by a net. Governed by the International Tennis Federation (ITF), major tournaments like Wimbledon, the US Open, the French Open,",
      live: true,
      case: false,
      isactive: false
    }
  ]);

  const [position, setPosition] = useState(0);

  const mover = (index) => {
    setPosition(index * 23);
  };

  const handle = (currentIndex) => {
    setData((previous) => {
      return previous.map((item, index) => {
        if (index === currentIndex) {
          return { ...item, isactive: !item.isactive };
        }
        return item;
      });
    });
  };

  const images = [
    "https://plus.unsplash.com/premium_photo-1676927066367-92d6a345e932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tlfGVufDB8fDB8fHw%3D",
    "https://www.wsupercars.com/wallpapers-regular/Formula-1/Scuderia-Ferrari/2024-Formula1-Ferrari-SF-24-009-1600.jpg",
    "https://wallpapercave.com/wp/wp11853430.jpg",
    "https://i.pinimg.com/564x/53/11/ec/5311ec6995299bfd551a1ad286a88f52.jpg",
    "https://w0.peakpx.com/wallpaper/992/852/HD-wallpaper-tennis-court-tennis-yellow-tennis-ball-court-with-a-hard-surface.jpg"
  ];

  return (
    <div className="mt-32 relative">
      {data.map((product, index) => (
        <Product
          key={index}
          va={product.title}
          desc={product.description}
          Val={product}
          mover={mover}
          count={index}
          currentindex={index}
          handleClick={handle}
          d={data}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: `${position}rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[30rem] h-[23rem] left-[45%] -translate-x-[45%] overflow-hidden"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <img src={image} alt={data[index].title} className="max-h-[23rem] w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
