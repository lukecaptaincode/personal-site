import React from "react";

const cardClasses =
  "flex flex-col lg:basis-1/4 shrink basis-full p-6 border-gray-200 bg-gray-700 border border-gray-200 rounded-lg shadow mt-4";

const diff_years = function (dt1: Date, dt2: Date) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff / 365.25));
};
export default function AboutMe() {
  return (
    <div className="flex text-white z-10 justify-center items-center">
      <div className="mx-auto max-w-screen-xl px-4 lg:mt-20">
        <div className="flex flex-col w-full text-center justify-center items-center">
          <h1 className="text-5xl lg:text-3xl font-extrabold">About Me</h1>
          <div className="flex flex-col lg:flex-row lg:space-x-4 w-full mt-4 text-center justify-center items-center">
            <div className={cardClasses}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                I am full stack with over{" "}
                {diff_years(new Date(2013, 9, 7), new Date())} years of
                experience.
              </h5>
              <p className="font-normal text-white">
                From marketing websites to complex internal devops platforms I
                have a broad range of experience. I have worked with a variety
                of languages and frameworks including React, Angular, Nextjs,
                Node, Python, FastApi, and more.
              </p>
            </div>
            <div className={cardClasses}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                I am an amateur game developer.
              </h5>
              <p className="font-normal text-white">
                I enjoy building games using Unity and Godot. I am currently
                working on 3D roguelite game.
              </p>
            </div>
            <div className={cardClasses}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                I am a Maker.
              </h5>
              <p className="font-normal text-white">
                I love to build things. From woodworking, IOT, leatherworking,
                model painting and everything in between.
              </p>
            </div>
            <div className={cardClasses}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                I am am Armoured fighter.
              </h5>
              <p className="font-normal text-white">
                I take part in a sport called medieval armoued combat, which is
                a full contact sport where fighters wear period accurate armour
                and fight with blunt weapons. I have been involved with the
                sport since 2018 and am currently the IT officer for Medieval
                Armoured Combat Ireland; maintaing the website and Discord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
