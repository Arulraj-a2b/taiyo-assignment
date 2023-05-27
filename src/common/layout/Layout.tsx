import { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex flex-row">
        <div className="w-1/6 bg-blue-700 h-screen px-8 flex flex-col pt-8 border-r-2 border-r-gray-200">
          <span className="rounded text-white py-2 mt-12  hover:bg-blue-500 px-1">
            Contact
          </span>
          <span className="rounded text-white  py-2 px-1 hover:bg-blue-500">
            Charts and Maps
          </span>
        </div>
        <div className="w-screen flex flex-col">
          <div className="bg-blue-700 h-16  justify-center flex items-center">
            <span className="text-white">Title</span>
          </div>
          <div className="flex flex-col h-full">
            <div className="overflow-y-scroll p-8 h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
