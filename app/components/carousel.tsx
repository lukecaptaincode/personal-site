"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./embla.scss";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import Card, { CardProps } from "./card";

const cardContent: Array<CardProps> = [
  {
    imageLink: "/personal-site-prev.png",
    title: "This Website!",
    description:
      "I built this website using NextJs & Tailwind. I deployed on it Vercel. I aimed to keep the design simple and clean.",
    link: ["https://github.com/lukecaptaincode/personal-site"],
    icon: [faGithub],
  },
  {
    imageLink: "/captaincraft.png",
    title: "CaptainCraft Games",
    description:
      "A website I build as a portifolio of all the games I have built. I created this with NextJs & Tailwind. I deployed on it Vercel.",
    link: [
      "https://www.captaincraftgames.com/",
      "https://github.com/CaptainCraftGames/site",
    ],
    icon: [faGlobe as IconDefinition, faGithub],
  },
];
/**
 * Using EMBLAS carousel #ref https://www.embla-carousel.com/get-started/react/
 *
 */
export default function EmblaCarousel() {
  const [emblaRef, emablaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    Fade(),
  ]);
  return (
    <>
      <div
        className="embla flex w-full lg:w-2/5 text-center justify-center items-center"
        ref={emblaRef}
      >
        <div className="embla__container">
          {cardContent.map((card, index) => {
            return (
              <Card
                key={index}
                imageLink={card.imageLink}
                description={card.description}
                link={card.link}
                title={card.title}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="flex z-10 w-full h-inherit w-full h-full text-center justify-center items-center">
        <div className="absolute z-10 w-max mx-auto space-x-4">
          <button
            className="embla__button embla__button--prev"
            onClick={() => emablaApi?.scrollPrev()}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft as IconProp} size="3x" />
          </button>
          <button
            className="embla__button embla__button--next"
            onClick={() => emablaApi?.scrollNext()}
          >
            <FontAwesomeIcon
              icon={faChevronCircleRight as IconProp}
              size="3x"
            />
          </button>
        </div>
      </div>
    </>
  );
}
