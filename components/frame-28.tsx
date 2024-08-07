import type { NextPage } from "next";

const FrameComponent6: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] text-sm-8 text-dimgray ${className}`}
    >
      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] text-sm-8 text-dimgray w-[126px] flex flex-col items-start justify-center gap-[3px]">
        <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
          Liam Johnson
        </div>
        <div className="self-stretch relative text-sm-8 leading-[17px] text-dimgray whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap">
          liam@example.com
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
