import { ReactChild } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children: ReactChild;
};

const Layout = ({ children }: Props) => {
  const locattion = useLocation();

  return (
    <div className="h-screen bg-gray-200">
      <div className="flex flex-row">
        <div
          style={{ width: 200 }}
          className="bg-blue-700 h-screen px-4 flex flex-col pt-8 border-r-2 border-r-gray-200"
        >
          <Link to="/contact" className="my-3 w-full">
            <span
              className={` flex rounded text-white py-2 w-full  hover:bg-blue-500 px-1 ${
                locattion.pathname === "/contact" ? "bg-blue-600" : ""
              }`}
            >
              Contact
            </span>
          </Link>

          <Link to="/maps" className="my-3 w-full">
            <span
              className={`flex rounded text-white py-2 w-full hover:bg-blue-500 px-1 ${
                locattion.pathname === "/maps" ? "bg-blue-600" : ""
              }`}
            >
              Charts and Maps
            </span>
          </Link>
        </div>
        <div className="w-screen flex flex-col">
          <div
            style={{ height: 50 }}
            className="bg-blue-700  justify-center flex items-center"
          >
            <span className="text-white">Title</span>
          </div>
          <div
            style={{
              height: window.innerHeight - 52,
              overflowY: "scroll",
            }}
            className="flex flex-col h-full p-8"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
