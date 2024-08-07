import type { NextPage } from "next";

const FrameComponent: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`flex-[0.8891] rounded-md bg-white border-gray-1400 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-6 min-w-[281px] max-w-full text-sm-9 mq750:pt-5 mq750:pb-5 mq750:box-border mq1050:flex-1 flex-[0.8891] rounded-md bg-white border-gray-1400 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-6 min-w-[281px] max-w-full text-sm text-dimgray mq750:pt-5 mq750:pb-5 mq750:box-border mq1050:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px] text-5xl text-gray-1100 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px] text-xs text-gray-200 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px] text-gray-1200 mq450:flex-wrap">
        <div className="w-[237px] flex flex-col items-start justify-start gap-2 w-[237px] flex flex-col items-start justify-start gap-2 text-xs text-gray-200 w-[237px] flex flex-col items-start justify-start gap-2 w-[237px] flex flex-col items-start justify-start gap-2">
          <h2 className="m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px]">
            Orders
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px] text-xs text-gray-200 self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px] self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px] self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px]">
            <div className="relative leading-[100%] relative leading-[100%] relative leading-[100%] relative leading-[100%]">
              Recent orders from your online store
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-1 text-sm text-gray-1200 flex flex-row items-center justify-start gap-1 text-sm text-gray-1200 flex flex-row items-center justify-start gap-1 text-sm text-gray-1200 flex flex-row items-center justify-start gap-1">
          <div className="rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap">
            <img
              className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
              loading="lazy"
              alt=""
              src="/svg-4.svg"
            />
            <div className="relative leading-[17px] font-medium inline-block min-w-[80px] relative leading-[17px] font-medium inline-block min-w-[80px] relative leading-[17px] font-medium inline-block min-w-[80px] relative leading-[17px] font-medium inline-block min-w-[80px]">
              Track Order
            </div>
          </div>
          <div className="rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2 rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2 rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2 rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2">
            <img
              className="h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative h-3.5 w-3.5 relative"
              loading="lazy"
              alt=""
              src="/svg-5.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-5 text-sm text-black self-stretch flex flex-col items-start justify-start gap-5 text-gray-1300">
        <div className="self-stretch flex flex-col items-start justify-start gap-3 self-stretch flex flex-col items-start justify-start gap-3 text-gray-1300 self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
            Order Details
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3 text-gray-1300 self-stretch flex flex-col items-start justify-start gap-3 self-stretch flex flex-col items-start justify-start gap-3">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="relative leading-[20px] inline-block min-w-[128px] relative leading-[20px] inline-block min-w-[128px] relative leading-[20px] inline-block min-w-[128px]">
                Glimmer Lamps x 2
              </div>
              <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
                $250.00
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="relative leading-[20px] inline-block min-w-[101px] relative leading-[20px] inline-block min-w-[101px] relative leading-[20px] inline-block min-w-[101px]">
                Aqua Filters x 1
              </div>
              <div className="relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap">
                $49.00
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px bg-gray-1400 self-stretch h-px bg-gray-1400" />
        <div className="self-stretch flex flex-col items-start justify-start gap-3 text-gray-1300 self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-center gap-3 self-stretch flex flex-col items-start justify-center gap-3">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
              <div className="relative leading-[20px] inline-block min-w-[56px] relative leading-[20px] inline-block min-w-[56px]">
                Subtotal
              </div>
              <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
                $250.00
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
              <div className="relative leading-[20px] inline-block min-w-[59px] relative leading-[20px] inline-block min-w-[59px]">
                Shipping
              </div>
              <div className="relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap">
                $49.00
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-3 self-stretch flex flex-col items-start justify-center gap-3 self-stretch flex flex-col items-start justify-center gap-3">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 self-stretch flex flex-row items-center justify-between gap-5 self-stretch flex flex-row items-center justify-between gap-5">
              <div className="relative leading-[20px] inline-block min-w-[24px] relative leading-[20px] inline-block min-w-[24px] relative leading-[20px] inline-block min-w-[24px]">
                Tax
              </div>
              <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
                $250.00
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
              <b className="relative leading-[20px] inline-block min-w-[35px] relative leading-[20px] inline-block min-w-[35px] relative leading-[20px] inline-block min-w-[35px]">
                Total
              </b>
              <b className="relative leading-[20px] inline-block min-w-[60px] whitespace-nowrap relative leading-[20px] inline-block min-w-[60px] whitespace-nowrap relative leading-[20px] inline-block min-w-[60px] whitespace-nowrap">
                $329.00
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-4 mq450:flex-wrap self-stretch flex flex-row items-start justify-center gap-4 text-sm-9 text-dimgray mq450:flex-wrap self-stretch flex flex-row items-start justify-center gap-4 text-sm-7 mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-center gap-3 min-w-[120px] flex-1 flex flex-col items-start justify-center gap-3 min-w-[120px] flex-1 flex flex-col items-start justify-center gap-3 min-w-[120px]">
          <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
            Shipping Information
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-0.5 text-sm-5 text-dimgray self-stretch flex flex-col items-start justify-center gap-0.5 self-stretch flex flex-col items-start justify-center gap-0.5">
            <div className="self-stretch relative text-sm-9 leading-[20px] self-stretch relative leading-[20px] self-stretch relative leading-[20px]">
              Liam Johnson
            </div>
            <div className="self-stretch relative leading-[20px] self-stretch relative leading-[20px] self-stretch relative leading-[20px]">
              1234 Main St.
            </div>
            <div className="self-stretch relative leading-[20px] self-stretch relative leading-[20px] self-stretch relative leading-[20px]">
              Anytown, CA 12345
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border gap-3 min-w-[120px] min-h-[96px] text-sm flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border gap-3 min-w-[120px] min-h-[96px] text-sm-7 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border gap-3 min-w-[120px] min-h-[96px]">
          <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
            Billing Information
          </div>
          <div className="self-stretch relative text-sm-7 leading-[20px] text-dimgray self-stretch relative leading-[20px] self-stretch relative leading-[20px]">
            Same as shipping address
          </div>
        </div>
      </div>
      <div className="self-stretch h-px bg-gray-1400 self-stretch h-px bg-gray-1400" />
      <div className="self-stretch flex flex-row items-start justify-center max-w-full self-stretch flex flex-row items-start justify-center max-w-full text-sm-9">
        <div className="flex-1 flex flex-col items-start justify-center gap-3 max-w-full flex-1 flex flex-col items-start justify-center gap-3 max-w-full">
          <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
            Customer Information
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-3 text-sm-5 text-dimgray mq450:flex-wrap self-stretch flex flex-row items-start justify-start gap-3 mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-center gap-0.5 min-w-[121px] flex-1 flex flex-col items-start justify-center gap-0.5 min-w-[121px]">
              <a className="[text-decoration:none] self-stretch relative text-sm-9 leading-[20px] text-[inherit] [text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
                Customer
              </a>
              <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] [text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
                Email
              </a>
              <div className="self-stretch relative leading-[20px] self-stretch relative leading-[20px]">
                Phone
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-0.5 min-w-[121px] flex-1 flex flex-col items-start justify-center gap-0.5 min-w-[121px]">
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
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center max-w-full self-stretch flex flex-row items-start justify-center max-w-full">
        <div className="flex-1 flex flex-col items-start justify-center gap-3 max-w-full flex-1 flex flex-col items-start justify-center gap-3 max-w-full">
          <div className="self-stretch relative leading-[20px] font-semibold self-stretch relative leading-[20px] font-semibold">
            Payment Information
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5 text-dimgray mq450:flex-wrap self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start py-[22px] px-0 gap-px flex flex-row items-center justify-start py-[22px] px-0 gap-px">
              <img
                className="h-4 w-4 relative h-4 w-4 relative"
                loading="lazy"
                alt=""
                src="/svg-6.svg"
              />
              <div className="relative leading-[20px] inline-block min-w-[29px] relative leading-[20px] inline-block min-w-[29px]">
                Visa
              </div>
            </div>
            <div className="flex flex-col items-start justify-center py-[22px] px-0 flex flex-col items-start justify-center py-[22px] px-0">
              <div className="relative leading-[20px] relative leading-[20px]">
                **** **** **** 4532
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
