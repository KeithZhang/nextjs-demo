import type { NextPage } from "next";

const FrameComponent3: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-md bg-white border-gray-1400 border-[1px] border-solid flex flex-col items-start justify-start py-[22px] px-[23px] text-5xl text-gray-1100 mq450:pt-5 mq450:pb-5 mq450:box-border self-stretch rounded-md bg-white border-gray-1400 border-[1px] border-solid flex flex-col items-start justify-start py-[22px] px-[23px] text-sm-7 text-gray-200 mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="w-[257px] flex flex-col items-start justify-start gap-2 w-[257px] flex flex-col items-start justify-start gap-2">
        <h2 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit leading-[29px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[23px]">
          Orders
        </h2>
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[19px] text-sm-7 text-gray-200 flex flex-row items-start justify-start py-0 pl-0 pr-[19px]">
          <div className="relative leading-[100%] relative leading-[100%]">
            Recent orders from your online store
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-sm-9 text-gray-200 self-stretch overflow-hidden flex flex-col items-start justify-start text-sm-8 text-dimgray self-stretch overflow-hidden flex flex-col items-start justify-start text-3xs text-black">
        <div className="self-stretch flex flex-row items-center justify-start gap-2 text-black mq750:flex-wrap self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Customer
              </div>
              <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Type
              </div>
              <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] mq450:flex-1">
            <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
              <div className="relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px]">
                Fufilled
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Status
              </div>
              <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Amount
              </div>
              <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-gray-1500 overflow-x-auto flex flex-row items-center justify-start gap-2 self-stretch bg-gray-1500 overflow-x-auto flex flex-row items-center justify-start gap-2 self-stretch bg-gray-1500 overflow-x-auto flex flex-row items-center justify-start gap-2">
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
            <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Sale
              </div>
              <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 text-3xs text-black flex-[0.8505] flex flex-col items-start justify-start p-4 text-3xs text-black flex-[0.8505] flex flex-col items-start justify-start p-4">
            <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
              <div className="relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px]">
                Fufilled
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="self-stretch relative text-sm-8 leading-[17px] text-dimgray whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Sale
              </div>
              <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs text-black mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs text-black mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] mq450:flex-1">
            <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
              <div className="relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px]">
                Fufilled
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="self-stretch relative text-sm-8 leading-[17px] text-dimgray whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap self-stretch flex flex-row items-center justify-start gap-2 text-sm-8 text-dimgray mq750:flex-wrap self-stretch flex flex-row items-center justify-start gap-2 text-3xs text-black mq750:flex-wrap self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px] w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Sale
              </div>
              <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap self-stretch relative leading-[120%] hidden whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs text-black mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs text-black mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs text-black mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] mq450:flex-1 flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] mq450:flex-1">
            <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px] w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
              <div className="relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px] relative leading-[120%] font-medium inline-block min-w-[36px]">
                Fufilled
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap relative leading-[17px] inline-block min-w-[126px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] text-sm-8 text-dimgray flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px] flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
            <div className="w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] text-sm-8 text-dimgray w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px] w-[126px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium self-stretch relative leading-[17px] font-medium">
                Liam Johnson
              </div>
              <div className="self-stretch relative text-sm-8 leading-[17px] text-dimgray whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap self-stretch relative leading-[17px] whitespace-nowrap">
                liam@example.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
