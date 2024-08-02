"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./embla.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const cardClasses =
  "embla__slide flex flex-col lg:flex-row lg:basis-2/5 basis-full p-6 mb-1 bg-gray-700 border border-gray-200 rounded-lg shadow";

export interface CardProps {
  imageLink: string;
  title: string;
  description: string;
  link: Array<string>;
  icon: Array<IconDefinition>;
}
export default function Card(props: CardProps) {
  return (
    <div className={cardClasses}>
      <div className="flex basis-2/3">
        <Image
          width={500}
          height={300}
          src={props.imageLink}
          alt={props.imageLink}
          className="object-cover object-center shadow-2xl rounded border border-gray-200"
        ></Image>
      </div>
      <div className="flex flex-col basis-1/3 lg:ml-4">
        <h5 className="mb-2 text-2xl mt-4 font-bold tracking-tight text-white">
          {props.title}
        </h5>
        <p className="font-normal text-white">{props.description}</p>
        <div className="flex flex-row ">
          {props.link.map((link, index) => {
            return (
              <Link
                key={index}
                href={link}
                target="_blank"
                className="cursor-pointer rounded-full mx-auto p-4 mt-4 basis-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 shadow-2xl transition-all ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon icon={props.icon[index]} size="2x" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
