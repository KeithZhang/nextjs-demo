import type { NextPage } from "next";

const FrameComponent10: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-2 flex flex-row items-center justify-start gap-2 ${className}`}
    >
      <button className="cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100 cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100 cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100">
        <img
          className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
          alt=""
          src="/svg-2.svg"
        />
        <div className="relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[34px] relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[34px] relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[34px]">
          Filter
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100 cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100 cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100">
        <img
          className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
          alt=""
          src="/svg-3.svg"
        />
        <div className="relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[45px] relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[45px] relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[45px]">
          Export
        </div>
      </button>
    </div>
  );
};

export default FrameComponent10;
