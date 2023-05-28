import { ReactChild, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import SvgMenu from "../../icons/SvgMenu";
import MenuList from "./MenuList";

type Props = {
  children: ReactChild;
};

const Layout = ({ children }: Props) => {
  const [isMenu, setMenu] = useState(false);
  const locattion = useLocation();
  const tablet = useMediaQuery({ query: "(max-width: 1000px)" });

  const handleOpen = () => setMenu(true);
  const handleClose = () => setMenu(false);

  return (
    <>
      <div className="h-screen bg-gray-200 relative">
        {isMenu && <MenuList onClose={handleClose} />}
        <div className="flex flex-row">
          <div
            style={{ width: 200 }}
            className="tablet:hidden bg-teal-700 h-screen px-4 flex flex-col pt-8 border-r-2 border-r-gray-200"
          >
            <Link to="/contact" className="my-3 w-full">
              <span
                className={` flex rounded text-white py-2 w-full pl-2  hover:bg-teal-500 px-1 ${
                  locattion.pathname === "/contact" ? "bg-teal-600" : ""
                }`}
              >
                Contact
              </span>
            </Link>

            <Link to="/maps" className="my-3 w-full">
              <span
                className={`flex rounded text-white py-2 pl-2 w-full hover:bg-teal-500 px-1 ${
                  locattion.pathname === "/maps" ? "bg-teal-600" : ""
                }`}
              >
                Charts and Maps
              </span>
            </Link>
          </div>
          <div className="w-screen flex flex-col">
            <div
              style={{ height: 50 }}
              className="bg-teal-700  flex items-center w-full"
            >
              {tablet && (
                <div
                  onClick={handleOpen}
                  role="button"
                  tabIndex={-1}
                  className="ml-4"
                >
                  <SvgMenu fill="#fff" height={30} width={30} />
                </div>
              )}
              <span className="w-full text-center text-white uppercase font-bold justify-center">
                {locattion.pathname.replace("/", "")}
              </span>
            </div>
            <div
              style={{
                height: window.innerHeight - 52,
                overflowY: "scroll",
                paddingBottom: 200,
              }}
              className={`flex flex-col h-full ${tablet ? "py-4 px-2" : "p-8"}`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
