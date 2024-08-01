import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Carousel from "./carousel";

export default function MyWork() {
  return (
    <div className="flex text-white w-full z-10 justify-center items-center">
      <div className="mx-auto w-full px-4 py-8">
        <div className="flex flex-col w-full text-center justify-center items-center">
          <h1 className="text-5xl lg:text-3xl font-extrabold">My work</h1>
          <div className="flex flex-row space-x-4 w-full mt-4 text-center justify-center items-center">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
