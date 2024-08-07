import type { NextPage } from "next";

const FrameComponent2: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`w-[237px] flex flex-col items-start justify-start gap-2 w-[237px] flex flex-col items-start justify-start gap-2 text-xs text-gray-200 ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px]">
        Orders
      </h2>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px] text-xs text-gray-200 self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px]">
        <div className="relative leading-[100%] relative leading-[100%]">
          Recent orders from your online store
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
