import type { NextPage } from "next";

const FrameComponent14: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`w-[319px] rounded-lg bg-white border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-2 text-4xl-4 w-[319px] rounded-lg bg-white border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-2 text-xs text-gray-500 ${className}`}
    >
      <div className="self-stretch relative tracking-[-0.6px] leading-[24px] font-semibold mq450:text-lgi mq450:leading-[19px] self-stretch relative tracking-[-0.6px] leading-[24px] font-semibold mq450:text-lgi mq450:leading-[19px]">
        Your Orders
      </div>
      <div className="self-stretch relative text-xs leading-[140%] text-gray-500 self-stretch relative leading-[140%]">
        <p className="m-0 m-0">Introducing Our Dynamic Orders Dashboard for</p>
        <p className="m-0 m-0">Seamless Management and Insightful Analysis.</p>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-4 bg-navy rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue cursor-pointer [border:none] py-2.5 px-4 bg-navy rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
        <div className="relative text-sm-7 leading-[20px] font-medium font-inter text-gray-100 text-center inline-block min-w-[118px] relative text-sm-7 leading-[20px] font-medium font-inter text-gray-100 text-center inline-block min-w-[118px]">
          Create New Order
        </div>
      </button>
    </div>
  );
};

export default FrameComponent14;
