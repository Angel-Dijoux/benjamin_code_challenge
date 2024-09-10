import { RiPlayLargeFill } from "react-icons/ri";
import iceCreamImage from "../../assets/coffee-scoops-green.webp";
import childrenOne from "../../assets/children_one.png";
import childrenTwo from "../../assets/children_two.png";
import FlavorButtons from "../FlavorButtons";
import { ChildrenWithIceCream } from "../ChildrenWithIceCream";

const PLAY_ICON_SIZE = 24;

const FlavorsSection = ({
  setIceCreamSrc,
}: {
  setIceCreamSrc: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flavors-section flex justify-center px-20">
      <div className="flavors-section-content container flex justify-between items-center w-full overflow-hidden">
        <div className="flex flex-col text-left gap-2">
          <h1 className="text-3xl font-made-mirage-bold">
            Everyone Can be cremos
          </h1>
          <p className="mt-4 mb-2 text-base font-verdana-bold">
            Get the scoops
          </p>
          <button
            className="bg-white rounded-full flex items-center justify-between w-full pl-6 border-[1.5px] border-[#0F0001]"
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=GFq6wH5JR2A");
            }}
          >
            <span className="mr-4 font-made-mirage-bold ">Watch our story</span>
            <div className="flex justify-center items-center w-[30%] rounded-full bg-custom-pink hover:bg-custom-pink/85 py-4">
              <RiPlayLargeFill color="#fff" size={PLAY_ICON_SIZE} />
            </div>
          </button>
        </div>

        <div className="flex justify-center items-center h-full bg-custom-brown rounded-t-full translate-y-24">
          <div className="rounded-t-full m-2 border border-[#957156]">
            <img
              src={iceCreamImage}
              alt="Ice Cream"
              className="relative z-10 w-60 h-auto py-12 px-6"
            />
          </div>
        </div>

        <div className="text-start text-2xl font-made-mirage-bold ">
          <p className="mb-4">
            Everyone loves
            <ChildrenWithIceCream
              path={childrenOne}
              backgroundColor="#FA46A9"
            />
            ice cream
          </p>
          <p> But nobody screams with joy at</p>
          <p>
            the cost
            <ChildrenWithIceCream
              path={childrenTwo}
              backgroundColor="#20B072"
            />{" "}
            complexity.
          </p>
        </div>
      </div>

      <FlavorButtons setImgSrc={setIceCreamSrc} />
    </div>
  );
};

export default FlavorsSection;
