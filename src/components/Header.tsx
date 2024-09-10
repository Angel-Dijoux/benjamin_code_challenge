import { motion } from "framer-motion";
import defaultProfilePic from "../assets/men_profile_pic.png";
import { TbMenuDeep } from "react-icons/tb";

const routes = [
  { label: "About", href: "#" },
  { label: "Products", href: "#" },
  { label: "Moods", href: "#" },
  { label: "Flavors", href: "#" },
  { label: "Ingredients", href: "#" },
];

const MENU_ICON_SIZE = 28;

const Header = () => {
  return (
    <nav
      className="bg-custom-brown text-white font-made-mirage-bold px-4 py-6 mb-6 w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center pb-8 border-b border-[#523628]">
        <motion.div
          className="text-3xl font-made-mirage-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Creamy
        </motion.div>

        <motion.div
          className="hidden md:flex space-x-12 font-verdana"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {routes.map((route) => (
            <a
              href={route.href}
              className="hover:text-custom-yellow transition duration-150"
              aria-label={route.label}
            >
              {route.label}
            </a>
          ))}
        </motion.div>

        <div className="flex items-center space-x-6">
          <img
            src={defaultProfilePic}
            alt="User Avatar"
            className="rounded-full w-10 h-10 object-cover bg-custom-yellow"
          />
          <TbMenuDeep
            size={MENU_ICON_SIZE}
            className="transform scale-x-[-1]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
