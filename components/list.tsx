import type { NextPage } from "next";

const List: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-3 self-stretch flex flex-col items-start justify-center gap-3 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-5 self-stretch flex flex-row items-center justify-between gap-5">
        <div className="relative leading-[20px] inline-block min-w-[24px] relative leading-[20px] inline-block min-w-[24px]">
          Tax
        </div>
        <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
          $250.00
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
        <b className="relative leading-[20px] inline-block min-w-[35px] relative leading-[20px] inline-block min-w-[35px]">
          Total
        </b>
        <b className="relative leading-[20px] inline-block min-w-[60px] whitespace-nowrap relative leading-[20px] inline-block min-w-[60px] whitespace-nowrap">
          $329.00
        </b>
      </div>
    </div>
  );
};

export default List;
