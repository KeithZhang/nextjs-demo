import type { NextPage } from "next";

const Component1: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-1 text-sm text-gray-1200 flex flex-row items-center justify-start gap-1 text-sm text-gray-1200 ${className}`}
    >
      <div className="rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap">
        <img
          className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
          loading="lazy"
          alt=""
          src="/svg-4.svg"
        />
        <div className="relative leading-[17px] font-medium inline-block min-w-[80px] relative leading-[17px] font-medium inline-block min-w-[80px]">
          Track Order
        </div>
      </div>
      <div className="rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2 rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2">
        <img
          className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
          loading="lazy"
          alt=""
          src="/svg-5.svg"
        />
      </div>
    </div>
  );
};

export default Component1;
