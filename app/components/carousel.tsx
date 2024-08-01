"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./embla.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const cardClasses =
  "embla__slide flex flex-col lg:flex-row lg:basis-2/5 basis-full p-6 bg-gray-700 border border-gray-200 rounded-lg shadow";

const PERSONALSITE = "https://github.com/lukecaptaincode/personal-site";
const CAPTAINCRAFT = "https://www.captaincraftgames.com/";
/**
 * Using EMBLAS carousel #ref https://www.embla-carousel.com/get-started/react/
 *
 */
export default function EmblaCarousel() {
  const [emblaRef, emablaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const go = function () {
    emablaApi?.scrollNext();
  };
  return (
    <>
      <div
        className="embla flex basis-2/5 text-center justify-center items-center"
        ref={emblaRef}
      >
        <div className="embla__container">
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
          <div className={cardClasses}>
            <div className="flex basis-2/3">
              <Image
                width={500}
                height={300}
                src="/captaincraft.png"
                alt="captaincraft"
                className="object-cover object-center shadow-2xl rounded border border-gray-200"
              ></Image>
            </div>
            <div className="flex flex-col basis-1/3">
              <h5 className="mb-2 text-2xl mt-4 font-bold tracking-tight text-white">
                CaptainCraft Games
              </h5>
              <p className="font-normal text-white">
                A website I build as a portifolio of all the games I have built.
                I created this with NextJs & Tailwind. I deployed on it Vercel.
              </p>
              <Link
                href={CAPTAINCRAFT}
                target="_blank"
                className="cursor-pointer rounded-full mx-auto p-4 mt-4 basis-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 shadow-2xl transition-all ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon icon={faGlobe as IconProp} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button className="embla__button embla__button--prev" onClick={go}>
        {" "}
        -{" "}
      </button>
    </>
  );
}
