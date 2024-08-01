import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";

const cardClasses =
  "flex flex-col lg:flex-row lg:basis-2/5 basis-full p-6 bg-gray-700 border border-gray-200 rounded-lg shadow";

const PERSONALSITE = "https://github.com/lukecaptaincode/personal-site";

export default function MyWork() {
  return (
    <div className="flex text-white w-full z-10 justify-center items-center">
      <div className="mx-auto w-full px-4 py-8">
        <div className="flex flex-col w-full text-center justify-center items-center">
          <h1 className="text-5xl lg:text-3xl font-extrabold">My work</h1>
          <div className="flex flex-row space-x-4 w-full mt-4 text-center justify-center items-center">
            <div className={cardClasses}>
              <div className="flex basis-2/3">
                <Image
                  width={500}
                  height={300}
                  src="/personal-site-prev.png"
                  alt="personal-site-prev"
                  className="object-cover object-center shadow-2xl rounded border border-gray-200"
                ></Image>
              </div>
              <div className="flex flex-col basis-1/3">
                <h5 className="mb-2 text-2xl mt-4 font-bold tracking-tight text-white">
                  This Website!
                </h5>
                <p className="font-normal text-white">
                  I built this website using NextJs & Tailwind. I deployed on it
                  Vercel.
                </p>
                <Link
                  href={PERSONALSITE}
                  target="_blank"
                  className="cursor-pointer rounded-full mx-auto p-4 mt-4 basis-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 shadow-2xl transition-all ease-in-out hover:scale-125"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
