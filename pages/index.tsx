import type { NextPage } from "next";
import Container from "./container";

const Root: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <Container />
    </div>
  );
};

export default Root;
