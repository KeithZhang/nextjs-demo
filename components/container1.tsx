import type { NextPage } from "next";

const Container1: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-4 mq450:flex-wrap self-stretch flex flex-row items-start justify-center gap-4 text-sm-9 text-dimgray mq450:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-center gap-3 min-w-[120px] flex-1 flex flex-col items-start justify-center gap-3 min-w-[120px]">
        <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
          Shipping Information
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-0.5 text-sm-5 text-dimgray self-stretch flex flex-col items-start justify-center gap-0.5">
          <div className="self-stretch relative text-sm-9 leading-[20px] self-stretch relative leading-[20px]">
            Liam Johnson
          </div>
          <div className="self-stretch relative leading-[20px] self-stretch relative leading-[20px]">
            1234 Main St.
          </div>
          <div className="self-stretch relative leading-[20px] self-stretch relative leading-[20px]">
            Anytown, CA 12345
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border gap-3 min-w-[120px] min-h-[96px] text-sm flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border gap-3 min-w-[120px] min-h-[96px] text-sm-7">
        <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
          Billing Information
        </div>
        <div className="self-stretch relative text-sm-7 leading-[20px] text-dimgray self-stretch relative leading-[20px]">
          Same as shipping address
        </div>
      </div>
    </div>
  );
};

export default Container1;
