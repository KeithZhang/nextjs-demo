import type { NextPage } from "next";

const FrameComponent1: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px] text-5xl text-gray-1100 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px] text-xs text-gray-200 mq450:flex-wrap ${className}`}
    >
      <div className="w-[237px] flex flex-col items-start justify-start gap-2 w-[237px] flex flex-col items-start justify-start gap-2 text-xs text-gray-200 w-[237px] flex flex-col items-start justify-start gap-2">
        <h2 className="m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px]">
          Orders
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px] text-xs text-gray-200 self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px] self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px]">
          <div className="relative leading-[100%] relative leading-[100%] relative leading-[100%]">
            Recent orders from your online store
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-1 text-sm text-gray-1200 flex flex-row items-center justify-start gap-1 text-sm text-gray-1200 flex flex-row items-center justify-start gap-1 text-sm text-gray-1200">
        <div className="rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap">
          <img
            className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
            loading="lazy"
            alt=""
            src="/svg-4.svg"
          />
          <div className="relative leading-[17px] font-medium inline-block min-w-[80px] relative leading-[17px] font-medium inline-block min-w-[80px] relative leading-[17px] font-medium inline-block min-w-[80px]">
            Track Order
          </div>
        </div>
        <div className="rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2 rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2 rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2">
          <img
            className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
            loading="lazy"
            alt=""
            src="/svg-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
