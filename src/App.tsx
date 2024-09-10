import { useState } from "react";
import iceCreamImage from "./assets/coffee-scoops-green.webp";

import Header from "./components/Header";
import IceCreamCard from "./components/IceCreamCard";
import FlavorsSection from "./components/sections/FlavorsSection";

function Body() {
  const [imgSrc, setImgSrc] = useState<string>(iceCreamImage);
  return (
    <>
      <IceCreamCard iceCreamSrc={imgSrc} />
      <div className="flex-grow mt-16"></div>
      <FlavorsSection setIceCreamSrc={setImgSrc} />
    </>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
    </div>
  );
}

export default App;
