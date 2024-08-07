import type { NextPage } from "next";

const Aside: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`h-[1000px] bg-white border-gray-800 border-r-[1px] border-solid box-border flex flex-col items-start justify-start h-[1000px] bg-white border-gray-800 border-r-[1px] border-solid box-border flex flex-col items-start justify-start ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-5 px-[11px] gap-4 flex-1 flex flex-col items-start justify-start py-5 px-[11px] gap-4">
        <div className="w-8 h-8 rounded-9980xl bg-navy flex flex-row items-center justify-center p-2 box-border w-8 h-8 rounded-9980xl bg-navy flex flex-row items-center justify-center p-2 box-border">
          <img
            className="h-3 w-3 relative h-3 w-3 relative"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
          <img
            className="h-[16.7px] w-[15px] relative h-[16.7px] w-[15px] relative"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
          <img
            className="h-[16.6px] w-[16.7px] relative h-[16.6px] w-[16.7px] relative"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
          <img
            className="h-[16.7px] w-[15px] relative h-[16.7px] w-[15px] relative"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
          <img
            className="h-[15px] w-[16.7px] relative h-[15px] w-[16.7px] relative"
            loading="lazy"
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
          <img
            className="h-[15px] w-[15px] relative h-[15px] w-[15px] relative"
            loading="lazy"
            alt=""
            src="/vector-5.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-5 px-[11px] flex flex-row items-start justify-start py-5 px-[11px]">
        <div className="h-8 w-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border h-8 w-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
          <img
            className="h-[16.7px] w-[15px] relative h-[16.7px] w-[15px] relative"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Aside;
