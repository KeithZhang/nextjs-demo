import type { NextPage } from "next";

const Area: NextPage = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-center justify-between p-6 box-border shrink-0 max-w-full gap-5 text-left text-sm-7 text-gray-1300 font-inter self-stretch flex flex-row items-center justify-between p-6 box-border shrink-0 max-w-full gap-5 text-left text-sm-6 text-gray-300 font-inter ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-2.5 mq750:hidden flex flex-row items-center justify-start gap-2.5 mq750:hidden">
        <div className="flex flex-col items-start justify-start flex flex-col items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[71px] [text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[71px]">
            Dashboard
          </a>
        </div>
        <div className="flex flex-col items-start justify-start flex flex-col items-start justify-start">
          <img
            className="w-3.5 h-3.5 relative w-3.5 h-3.5 relative"
            loading="lazy"
            alt=""
            src="/svg.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start text-sm-6 flex flex-col items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[44px] [text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[44px]">
            Orders
          </a>
        </div>
        <div className="flex flex-col items-start justify-start flex flex-col items-start justify-start">
          <img
            className="w-3.5 h-3.5 relative w-3.5 h-3.5 relative"
            loading="lazy"
            alt=""
            src="/svg.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start text-gray-300 flex flex-col items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-bold text-[inherit] inline-block min-w-[97px] whitespace-nowrap [text-decoration:none] relative leading-[20px] font-bold text-[inherit] inline-block min-w-[97px] whitespace-nowrap">
            Recent Orders
          </a>
        </div>
      </div>
      <div className="w-[392px] flex flex-row items-center justify-start gap-4 max-w-full w-[392px] flex flex-row items-center justify-start gap-4 max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start py-0 pl-[7px] pr-0 box-border min-w-[336px] max-w-full flex-1 flex flex-col items-end justify-start py-0 pl-[7px] pr-0 box-border min-w-[336px] max-w-full">
          <div className="self-stretch rounded-lg bg-white border-gainsboro-300 border-[1px] border-solid flex flex-row items-center justify-start py-2.5 pl-[7px] pr-[247px] gap-[7px] mq450:pr-5 mq450:box-border self-stretch rounded-lg bg-white border-gainsboro-300 border-[1px] border-solid flex flex-row items-center justify-start py-2.5 pl-[7px] pr-[247px] gap-[7px] mq450:pr-5 mq450:box-border">
            <div className="flex flex-row items-center justify-start w-3 h-3 flex flex-row items-center justify-start w-3 h-3">
              <img
                className="h-3 w-3 relative h-3 w-3 relative"
                alt=""
                src="/vector-7.svg"
              />
            </div>
            <input
              className="w-[calc(100%_-_281px)] [border:none] [outline:none] font-inter text-sm-1 bg-[transparent] h-4 flex-1 relative text-gray-400 text-left flex items-center min-w-[32px] p-0 w-[calc(100%_-_281px)] [border:none] [outline:none] font-inter text-sm-1 bg-[transparent] h-4 flex-1 relative text-gray-400 text-left flex items-center min-w-[32px] p-0"
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>
        <div className="h-10 w-10 rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-[3px] h-10 w-10 rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-[3px]">
          <div className="w-8 rounded-lg flex flex-row items-center justify-center pt-[7.7px] px-2 pb-[7.6px] box-border h-8 w-8 rounded-lg flex flex-row items-center justify-center pt-[7.7px] px-2 pb-[7.6px] box-border h-8">
            <img
              className="h-[16.7px] w-[15px] relative h-[16.7px] w-[15px] relative"
              alt=""
              src="/vector-8.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Area;
