import minionIceCream from "../assets/ice_cream_minion.png";
import { ShopFlavorButton } from "./ShopFlavorButton";
import spoonIceCream from "../assets/ice_cream_spoon.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IceCreamCard = ({ iceCreamSrc }: { iceCreamSrc: string }) => {
  const [currentSrc, setCurrentSrc] = useState(iceCreamSrc);

  useEffect(() => {
    setCurrentSrc(iceCreamSrc);
  }, [iceCreamSrc]);
  const iceCreamAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between h-screen md:h-auto overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex flex-col md:flex-row items-center md:items-end">
            <h1
              className="text-4xl sm:text-6xl md:text-8xl font-made-mirage-bold leading-tight text-white"
              style={{
                fontSize: "clamp(2rem, 8vw, 8rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.05em",
              }}
            >
              Grab the <br />
              best ice <br />
              cream.
            </h1>
            <img
              src={minionIceCream}
              className="w-12 sm:w-16 md:w-16 h-auto object-cover rotate-[35deg] -ml-4 sm:-ml-8 md:-ml-12 mt-4 md:mt-0"
            />
          </div>
          <p className="mt-4 text-base sm:text-lg font-verdana text-white">
            We ditched the dairy, we cut the sugar, and infused <br />
            mood-boosting adaptogens.
          </p>
          <ShopFlavorButton />
        </div>
        <motion.img
          key={currentSrc}
          src={currentSrc}
          alt="Ice cream"
          className="w-[50%] md:w-[30%] h-auto mt-8 md:mt-0"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={iceCreamAnimation}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      <div className="hidden lg:block absolute right-[-6%] bottom-0 lg:bottom-auto lg:top-1/2 transform lg:-translate-y-1/2 z-10">
        <img
          src={spoonIceCream}
          alt="Ice cream spoon"
          className="w-auto h-40 sm:h-60 lg:h-80 rotate-[-40deg]"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    </div>
  );
};

export default IceCreamCard;
