import type { NextPage } from "next";

const FrameComponent13: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`rounded-md bg-gray-1000 overflow-x-auto flex flex-row items-start justify-start p-1 gap-2.5 rounded-md bg-gray-1000 overflow-x-auto flex flex-row items-start justify-start p-1 gap-2.5 text-black ${className}`}
    >
      <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.23)] rounded bg-white flex flex-row items-center justify-center py-2.5 px-[9px] text-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.23)] rounded bg-white flex flex-row items-center justify-center py-2.5 px-[9px]">
        <div className="relative leading-[17px] font-medium inline-block min-w-[38px] relative leading-[17px] font-medium inline-block min-w-[38px]">
          Week
        </div>
      </div>
      <div className="rounded flex flex-row items-center justify-center py-2.5 px-[7px] rounded flex flex-row items-center justify-center py-2.5 px-[7px]">
        <div className="relative leading-[17px] font-medium inline-block min-w-[43px] relative leading-[17px] font-medium inline-block min-w-[43px]">
          Month
        </div>
      </div>
      <div className="w-[57px] rounded shrink-0 flex flex-row items-center justify-center py-2.5 px-3 box-border w-[57px] rounded shrink-0 flex flex-row items-center justify-center py-2.5 px-3 box-border">
        <div className="relative leading-[17px] font-medium inline-block min-w-[31px] relative leading-[17px] font-medium inline-block min-w-[31px]">
          Year
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
