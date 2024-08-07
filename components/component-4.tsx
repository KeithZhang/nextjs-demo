import type { NextPage } from "next";

const Component: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3 self-stretch flex flex-col items-start justify-start gap-3 text-gray-1300 ${className}`}
    >
      <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
        Order Details
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-3 text-gray-1300 self-stretch flex flex-col items-start justify-start gap-3">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <div className="relative leading-[20px] inline-block min-w-[128px] relative leading-[20px] inline-block min-w-[128px]">
            Glimmer Lamps x 2
          </div>
          <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
            $250.00
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <div className="relative leading-[20px] inline-block min-w-[101px] relative leading-[20px] inline-block min-w-[101px]">
            Aqua Filters x 1
          </div>
          <div className="relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap">
            $49.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
