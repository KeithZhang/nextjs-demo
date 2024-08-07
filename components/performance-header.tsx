import type { NextPage } from "next";

const PerformanceHeader: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`h-[146px] flex-1 rounded-lg bg-white border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-between py-4 px-[15px] min-w-[112px] h-[146px] flex-1 rounded-lg bg-white border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-between py-4 px-[15px] min-w-[112px] text-xs text-gray-600 ${className}`}
    >
      <a className="[text-decoration:none] self-stretch relative leading-[22.75px] text-[inherit] [text-decoration:none] self-stretch relative leading-[22.75px] text-[inherit]">
        This week
      </a>
      <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-0 gap-2 text-4xl-4 self-stretch flex flex-col items-start justify-center py-2.5 px-0 gap-2">
        <div className="self-stretch relative tracking-[-0.6px] leading-[24px] font-semibold whitespace-nowrap mq450:text-lgi mq450:leading-[19px] self-stretch relative tracking-[-0.6px] leading-[24px] font-semibold whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
          $1,329
        </div>
        <div className="self-stretch relative text-xs leading-[23px] text-gray-600 self-stretch relative leading-[23px]">
          +25% from last week
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-700 flex flex-row items-center justify-center self-stretch rounded-lg bg-gray-700 flex flex-row items-center justify-center">
        <div className="h-[17px] flex-1 rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-navy h-[17px] flex-1 rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-navy" />
        <div className="h-[17px] flex-1 h-[17px] flex-1" />
      </div>
    </div>
  );
};

export default PerformanceHeader;
