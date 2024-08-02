import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Carousel from "./carousel";

export default function MyWork() {
  return (
    <div className="flex text-white justify-center items-center flex flex-col text-center justify-center items-center mx-auto px-4 py-8">
      <h1 className="text-5xl lg:text-3xl font-extrabold">My work</h1>
      <div className="flex flex-col mt-4 text-center justify-center items-center">
        <Carousel />
      </div>
    </div>
  );
}
