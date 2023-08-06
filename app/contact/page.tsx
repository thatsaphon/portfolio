import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { nextButtonLink?: string };

export default function ContactPage({ nextButtonLink }: Props) {
  return (
    <div className="white flex flex-col items-center justify-center overflow-clip p-5 pb-36 pt-32 text-center lg:gap-5 lg:p-24 lg:pt-32">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-6xl">
        Contact
      </h1>
      <div className="text-lg lg:text-xl">
        <Link
          href={"https://line.me/ti/p/tIRHwIIP99"}
          className="hover:cursor-pointer"
        >
          <Image
            src={"/line-qr.jpg"}
            alt={"line-qr"}
            width={500}
            height={500}
          />
        </Link>
      </div>
      {nextButtonLink && (
        <p>
          <a href={"#project"}>
            <button
              type="button"
              className="rounded-md bg-blue-700 p-2 px-6 text-lg text-white dark:bg-slate-200 dark:text-slate-900 lg:text-2xl"
            >
              Next!
            </button>
          </a>
        </p>
      )}
    </div>
  );
}
