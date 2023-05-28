import { Link, useLocation } from "react-router-dom";
import SvgClose from "../../icons/SvgClose";

type Props = {
  onClose: () => void;
};
const MenuList = ({ onClose }: Props) => {
  const locattion = useLocation();

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        height: "100%",
        zIndex: 9999,
      }}
      className="backdrop-blur-sm backdrop-brightness-50 bg-white/30"
    >
      <div
        onClick={onClose}
        role="button"
        tabIndex={-1}
        className="absolute right-4 top-4"
      >
        <SvgClose fill="#fff" />
      </div>
      <div className="bg-teal-500 w-2/3 h-full py-8 px-4">
        <Link onClick={onClose} to="/contact" className="my-3 w-full">
          <span
            className={` flex rounded text-white py-2 w-full  hover:bg-teal-500 px-1 ${
              locattion.pathname === "/contact" || locattion.pathname === "/"
                ? "bg-teal-600"
                : ""
            }`}
          >
            Contact
          </span>
        </Link>

        <Link onClick={onClose} to="/maps" className="my-3 w-full">
          <span
            className={`flex rounded text-white py-2 w-full hover:bg-teal-500 px-1 ${
              locattion.pathname === "/maps" ? "bg-teal-600" : ""
            }`}
          >
            Charts and Maps
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
