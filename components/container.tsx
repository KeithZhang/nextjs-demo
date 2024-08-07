import type { NextPage } from "next";

const Container: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`w-full relative bg-gray-1500 flex flex-row items-start justify-start leading-[normal] tracking-[normal] ${className}`}
    >
      <div className="h-[1000px] bg-white border-gray-800 border-r-[1px] border-solid box-border flex flex-col items-start justify-start">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-[11px] gap-4">
          <div className="w-8 h-8 rounded-9980xl bg-navy flex flex-row items-center justify-center p-2 box-border">
            <img
              className="h-3 w-3 relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
            <img
              className="h-[16.7px] w-[15px] relative"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
            <img
              className="h-[16.6px] w-[16.7px] relative"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
            <img
              className="h-[16.7px] w-[15px] relative"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
            <img
              className="h-[15px] w-[16.7px] relative"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className="w-8 h-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
            <img
              className="h-[15px] w-[15px] relative"
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-5 px-[11px]">
          <div className="h-8 w-8 rounded-lg flex flex-row items-center justify-center p-1.5 box-border">
            <img
              className="h-[16.7px] w-[15px] relative"
              loading="lazy"
              alt=""
              src="/vector-6.svg"
            />
          </div>
        </div>
      </div>
      <main className="h-[1000px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[912px] box-border gap-2.5 max-w-[calc(100%_-_56px)] lg:pb-[593px] lg:box-border mq450:pb-[250px] mq450:box-border mq1050:h-auto mq1050:pb-[385px] mq1050:box-border">
        <header className="self-stretch flex flex-row items-center justify-between p-6 box-border shrink-0 max-w-full gap-5 text-left text-sm-7 text-gray-1300 font-inter">
          <div className="flex flex-row items-center justify-start gap-2.5 mq750:hidden">
            <div className="flex flex-col items-start justify-start">
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[71px]">
                Dashboard
              </a>
            </div>
            <div className="flex flex-col items-start justify-start">
              <img
                className="w-3.5 h-3.5 relative"
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start text-sm-6">
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[44px]">
                Orders
              </a>
            </div>
            <div className="flex flex-col items-start justify-start">
              <img
                className="w-3.5 h-3.5 relative"
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start text-gray-300">
              <a className="[text-decoration:none] relative leading-[20px] font-bold text-[inherit] inline-block min-w-[97px] whitespace-nowrap">
                Recent Orders
              </a>
            </div>
          </div>
          <div className="w-[392px] flex flex-row items-center justify-start gap-4 max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start py-0 pl-[7px] pr-0 box-border min-w-[336px] max-w-full">
              <div className="self-stretch rounded-lg bg-white border-gainsboro-300 border-[1px] border-solid flex flex-row items-center justify-start py-2.5 pl-[7px] pr-[247px] gap-[7px] mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-center justify-start w-3 h-3">
                  <img
                    className="h-3 w-3 relative"
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
                <input
                  className="w-[calc(100%_-_281px)] [border:none] [outline:none] font-inter text-sm-1 bg-[transparent] h-4 flex-1 relative text-gray-400 text-left flex items-center min-w-[32px] p-0"
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
            <div className="h-10 w-10 rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-[3px]">
              <div className="w-8 rounded-lg flex flex-row items-center justify-center pt-[7.7px] px-2 pb-[7.6px] box-border h-8">
                <img
                  className="h-[16.7px] w-[15px] relative"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-6 box-border gap-6 shrink-0 max-w-full text-left text-sm-7 text-gray-200 font-inter mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-[351px] box-border min-h-[1000px] max-w-full mq450:pb-[148px] mq450:box-border mq750:gap-4 mq750:min-w-full mq1050:flex-1 mq1050:pt-5 mq1050:pb-[228px] mq1050:box-border">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-6 gap-8 mq750:gap-4">
              <div className="self-stretch flex flex-row items-start justify-start gap-4 mq750:flex-wrap">
                <div className="w-[319px] rounded-lg bg-white border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-2 text-4xl-4">
                  <div className="self-stretch relative tracking-[-0.6px] leading-[24px] font-semibold mq450:text-lgi mq450:leading-[19px]">
                    Your Orders
                  </div>
                  <div className="self-stretch relative text-xs leading-[140%] text-gray-500">
                    <p className="m-0">
                      Introducing Our Dynamic Orders Dashboard for
                    </p>
                    <p className="m-0">
                      Seamless Management and Insightful Analysis.
                    </p>
                  </div>
                  <button className="cursor-pointer [border:none] py-2.5 px-4 bg-navy rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
                    <div className="relative text-sm-7 leading-[20px] font-medium font-inter text-gray-100 text-center inline-block min-w-[118px]">
                      Create New Order
                    </div>
                  </button>
                </div>
                <div className="h-[146px] flex-1 rounded-lg bg-white border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-between py-4 px-[15px] min-w-[112px]">
                  <a className="[text-decoration:none] self-stretch relative leading-[22.75px] text-[inherit]">
                    This week
                  </a>
                  <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-0 gap-2 text-4xl-4">
                    <div className="self-stretch relative tracking-[-0.6px] leading-[24px] font-semibold whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
                      $1,329
                    </div>
                    <div className="self-stretch relative text-xs leading-[23px] text-gray-600">
                      +25% from last week
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-gray-700 flex flex-row items-center justify-center">
                    <div className="h-[17px] flex-1 rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-navy" />
                    <div className="h-[17px] flex-1" />
                  </div>
                </div>
                <div className="h-[146px] flex-1 rounded-lg bg-white border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-between py-4 px-[15px] min-w-[112px]">
                  <div className="self-stretch relative leading-[22.75px]">
                    This week
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-0 gap-2 text-4xl-4">
                    <div className="self-stretch relative tracking-[-0.6px] leading-[24px] font-semibold whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
                      $1,329
                    </div>
                    <div className="self-stretch relative text-xs leading-[23px] text-gray-600">
                      +25% from last week
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-gray-700 flex flex-row items-center justify-center">
                    <div className="h-[17px] flex-1 rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-navy" />
                    <div className="h-[17px] flex-1" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-5 text-sm-9 text-gray-900 mq450:flex-wrap">
                <div className="rounded-md bg-gray-1000 overflow-x-auto flex flex-row items-start justify-start p-1 gap-2.5">
                  <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.23)] rounded bg-white flex flex-row items-center justify-center py-2.5 px-[9px] text-black">
                    <div className="relative leading-[17px] font-medium inline-block min-w-[38px]">
                      Week
                    </div>
                  </div>
                  <div className="rounded flex flex-row items-center justify-center py-2.5 px-[7px]">
                    <div className="relative leading-[17px] font-medium inline-block min-w-[43px]">
                      Month
                    </div>
                  </div>
                  <div className="w-[57px] rounded shrink-0 flex flex-row items-center justify-center py-2.5 px-3 box-border">
                    <div className="relative leading-[17px] font-medium inline-block min-w-[31px]">
                      Year
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <button className="cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/svg-2.svg"
                    />
                    <div className="relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[34px]">
                      Filter
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-1 px-2 bg-white rounded flex flex-row items-center justify-start gap-1 hover:bg-gainsboro-100">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/svg-3.svg"
                    />
                    <div className="relative text-sm leading-[17px] font-medium font-inter text-gray-1200 text-left inline-block min-w-[45px]">
                      Export
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-white border-gray-1400 border-[1px] border-solid flex flex-col items-start justify-start py-[22px] px-[23px] text-5xl text-gray-1100 mq450:pt-5 mq450:pb-5 mq450:box-border">
                <div className="w-[257px] flex flex-col items-start justify-start gap-2">
                  <h2 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[23px]">
                    Orders
                  </h2>
                  <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[19px] text-sm-7 text-gray-200">
                    <div className="relative leading-[100%]">
                      Recent orders from your online store
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-sm-9 text-gray-200">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 text-black mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Customer
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Type
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs mq450:flex-1">
                      <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
                        <div className="relative leading-[120%] font-medium inline-block min-w-[36px]">
                          Fufilled
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Status
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Amount
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-gray-1500 overflow-x-auto flex flex-row items-center justify-start gap-2">
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
                      <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Sale
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 text-3xs text-black">
                      <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
                        <div className="relative leading-[120%] font-medium inline-block min-w-[36px]">
                          Fufilled
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[17px] text-dimgray whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Sale
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs text-black mq450:flex-1">
                      <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
                        <div className="relative leading-[120%] font-medium inline-block min-w-[36px]">
                          Fufilled
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[17px] text-dimgray whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center py-2.5 px-0 box-border gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Sale
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[120%] text-dimgray hidden whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-[0.8505] flex flex-col items-start justify-start p-4 box-border min-w-[121px] max-w-[123px] text-3xs text-black mq450:flex-1">
                      <div className="w-[55px] rounded-81xl bg-mediumturquoise border-darkslategray border-[2px] border-solid box-border flex flex-row items-center justify-center p-[7px]">
                        <div className="relative leading-[120%] font-medium inline-block min-w-[36px]">
                          Fufilled
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="relative text-sm-8 leading-[17px] text-dimgray inline-block min-w-[126px] whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-4 pl-4 pr-0 box-border min-w-[121px] max-w-[123px]">
                      <div className="w-[126px] flex flex-col items-start justify-center gap-[3px]">
                        <div className="self-stretch relative leading-[17px] font-medium">
                          Liam Johnson
                        </div>
                        <div className="self-stretch relative text-sm-8 leading-[17px] text-dimgray whitespace-nowrap">
                          liam@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.8891] rounded-md bg-white border-gray-1400 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-6 min-w-[281px] max-w-full text-sm-9 mq750:pt-5 mq750:pb-5 mq750:box-border mq1050:flex-1">
            <div className="self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px] text-5xl text-gray-1100 mq450:flex-wrap">
              <div className="w-[237px] flex flex-col items-start justify-start gap-2">
                <h2 className="m-0 self-stretch relative text-inherit leading-[29px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px]">
                  Orders
                </h2>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[29px] text-xs text-gray-200">
                  <div className="relative leading-[100%]">
                    Recent orders from your online store
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-1 text-sm text-gray-1200">
                <div className="rounded bg-white flex flex-row items-center justify-start py-1 px-2 gap-1 whitespace-nowrap">
                  <img
                    className="h-3.5 w-3.5 relative"
                    loading="lazy"
                    alt=""
                    src="/svg-4.svg"
                  />
                  <div className="relative leading-[17px] font-medium inline-block min-w-[80px]">
                    Track Order
                  </div>
                </div>
                <div className="rounded bg-white flex flex-row items-center justify-center py-[5.5px] px-2">
                  <img
                    className="h-3.5 w-3.5 relative"
                    loading="lazy"
                    alt=""
                    src="/svg-5.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-5 text-sm text-black">
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Order Details
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-3 text-gray-1300">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                    <div className="relative leading-[20px] inline-block min-w-[128px]">
                      Glimmer Lamps x 2
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
                      $250.00
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                    <div className="relative leading-[20px] inline-block min-w-[101px]">
                      Aqua Filters x 1
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap">
                      $49.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px bg-gray-1400" />
              <div className="self-stretch flex flex-col items-start justify-start gap-3 text-gray-1300">
                <div className="self-stretch flex flex-col items-start justify-center gap-3">
                  <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                    <div className="relative leading-[20px] inline-block min-w-[56px]">
                      Subtotal
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
                      $250.00
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                    <div className="relative leading-[20px] inline-block min-w-[59px]">
                      Shipping
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[48px] whitespace-nowrap">
                      $49.00
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-3">
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="relative leading-[20px] inline-block min-w-[24px]">
                      Tax
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[56px] whitespace-nowrap">
                      $250.00
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                    <b className="relative leading-[20px] inline-block min-w-[35px]">
                      Total
                    </b>
                    <b className="relative leading-[20px] inline-block min-w-[60px] whitespace-nowrap">
                      $329.00
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-4 mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-center gap-3 min-w-[120px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Shipping Information
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-0.5 text-sm-5 text-dimgray">
                  <div className="self-stretch relative text-sm-9 leading-[20px]">
                    Liam Johnson
                  </div>
                  <div className="self-stretch relative leading-[20px]">
                    1234 Main St.
                  </div>
                  <div className="self-stretch relative leading-[20px]">
                    Anytown, CA 12345
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border gap-3 min-w-[120px] min-h-[96px] text-sm">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Billing Information
                </div>
                <div className="self-stretch relative text-sm-7 leading-[20px] text-dimgray">
                  Same as shipping address
                </div>
              </div>
            </div>
            <div className="self-stretch h-px bg-gray-1400" />
            <div className="self-stretch flex flex-row items-start justify-center max-w-full">
              <div className="flex-1 flex flex-col items-start justify-center gap-3 max-w-full">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Customer Information
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-3 text-sm-5 text-dimgray mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-center gap-0.5 min-w-[121px]">
                    <a className="[text-decoration:none] self-stretch relative text-sm-9 leading-[20px] text-[inherit]">
                      Customer
                    </a>
                    <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
                      Email
                    </a>
                    <div className="self-stretch relative leading-[20px]">
                      Phone
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-0.5 min-w-[121px]">
                    <div className="self-stretch relative text-sm-9 leading-[20px]">
                      Liam Johnson
                    </div>
                    <div className="self-stretch relative leading-[20px]">
                      1234 Main St.
                    </div>
                    <div className="self-stretch relative leading-[20px]">
                      Anytown, CA 12345
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center max-w-full">
              <div className="flex-1 flex flex-col items-start justify-center gap-3 max-w-full">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Payment Information
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-5 text-dimgray mq450:flex-wrap">
                  <div className="flex flex-row items-center justify-start py-[22px] px-0 gap-px">
                    <img
                      className="h-4 w-4 relative"
                      loading="lazy"
                      alt=""
                      src="/svg-6.svg"
                    />
                    <div className="relative leading-[20px] inline-block min-w-[29px]">
                      Visa
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center py-[22px] px-0">
                    <div className="relative leading-[20px]">
                      **** **** **** 4532
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Container;
