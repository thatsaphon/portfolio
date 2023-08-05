"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  title?: string;
  content?: string | JSX.Element;
  link?: string;
};

export default function ProjectCardComponent({
  src,
  alt,
  title,
  content,
  link,
}: Props) {
  return (
    <div className="lg:min-h-64 flex w-full flex-col items-center justify-center gap-8 rounded-xl p-2 lg:grid lg:grid-cols-2 lg:items-center">
      <div className="flex max-h-[320px] min-w-full justify-center lg:min-w-[400px] lg:justify-end xl:min-w-[500px]">
        <Image src={src} alt={alt} width={500} height={500}></Image>
      </div>
      <div className="flex max-w-[500px] flex-col whitespace-pre-line text-left text-slate-900 dark:text-white sm:text-xl">
        <h2 className="mb-3 text-3xl font-bold">{title}</h2>
        <div>{content}</div>
        {link && (
          <div className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800">
            <a href={link}>{link}</a>
          </div>
        )}
      </div>
    </div>
  );
}
