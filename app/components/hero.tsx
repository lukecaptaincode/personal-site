import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const REPO = "https://github.com/lukecaptaincode?tab=repositories";
const LINKEDIN = "https://www.linkedin.com/in/luke-captain/";

export default function Hero() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          fill
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800 z-10"></div>
      </div>
      <div className="flex text-white z-10 justify-center items-center">
        <div className="mx-auto max-w-screen-xl px-4 py-24 flex lg:h-screen items-center">
          <div className="flex flex-col mx-auto max-w-3xl text-center justify-center items-center">
            <h1 className="text-5xl font-extrabold">Hi, I&apos;m Luke</h1>
            <Image
              src="/me.jpg"
              width={250}
              height={250}
              className="rounded-full aspect-square object-cover mt-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              alt="Luke Captain"
            />
            <h2 className="text-3xl font-extrabold mt-10 w-screen">
              Full stack engineer | Game Developer | Maker | Armoured fighter
            </h2>
            <div className="flex flex-row w-1/5 justify-center items-center mt-5">
              <Link
                href={REPO}
                target="_blank"
                className="cursor-pointer rounded-full mx-4 mx-auto p-4 basis-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 shadow-2xl transition-all ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <Link
                href={LINKEDIN}
                target="_blank"
                className="cursor-pointer rounded-full mx-auto p-4 basis-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 shadow-2xl transition-all ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
