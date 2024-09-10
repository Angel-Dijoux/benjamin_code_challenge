import ice1 from "../assets/peanut-scoops-orange.webp";
import ice2 from "../assets/vanilla-scoops-yellow.webp";
import ice3 from "../assets/chocolate-scoops-pink.webp";
import { useState } from "react";

const FLAVORS = [
  { label: "Vanilla gelato", color: "#EBFFF4", src: ice2 },
  { label: "Choco cookies", color: "#FCE5DD", src: ice3 },
  { label: "Peanut", color: "#E4F6BD", src: ice1 },
];
const totalFlavors = FLAVORS.length;

const getFlavorButtonStyle = (
  index: number,
  color: string,
  isHovered: boolean,
) => {
  const angleStep = 45 / (totalFlavors - 1);
  const left = `${(index / (totalFlavors - 1)) * 100}%`;
  const rotate = -25 + angleStep * index;
  const translateY = `${(index - (totalFlavors - 1) / 2) ** 2 * -5}%`;

  const backgroundColor = isHovered ? `${color}95` : color;

  return {
    left,
    backgroundColor,
    transform: `rotate(${rotate}deg) translateY(${translateY})`,
  };
};

interface FlavorButtonProps {
  flavor: string;
  color: string;
  index: number;
  src: string;
  setImgSrc: React.Dispatch<React.SetStateAction<string>>;
}

function FlavorButton({
  flavor,
  index,
  src,
  color,
  setImgSrc,
}: FlavorButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className=" rounded-full p-4 border-[1.5px] border-black"
      style={getFlavorButtonStyle(index, color, isHovered)}
      onClick={(event) => {
        setImgSrc(src);
        event.stopPropagation();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {flavor}
    </button>
  );
}

interface FlavorButtonsProps {
  setImgSrc: React.Dispatch<React.SetStateAction<string>>;
}

function FlavorButtons({ setImgSrc }: FlavorButtonsProps) {
  return (
    <div className="flavor-buttons-container flex justify-between -mt-5">
      {FLAVORS.map((flavor, index) => (
        <FlavorButton
          key={index}
          flavor={flavor.label}
          src={flavor.src}
          setImgSrc={setImgSrc}
          index={index}
          color={flavor.color}
        />
      ))}
    </div>
  );
}

export default FlavorButtons;
