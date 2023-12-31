import moment from "moment";
import Image from "next/image";
import React from "react";

type Props = { nextButtonLink?: string };

export default function AboutPage({ nextButtonLink }: Props) {
  return (
    <div className="white flex flex-col items-center justify-center overflow-clip p-5 pt-32 text-center lg:gap-5 lg:p-24 lg:pt-32">
      <div className="rounded-xl p-6 dark:bg-slate-300">
        <h1 className="text-3xl font-bold text-slate-900 lg:text-6xl">
          About Me{" "}
        </h1>
        <h1 className="text-xl font-bold dark:text-blue-600 lg:text-4xl">
          Thatsaphon Sukanantatham
          <p>(Nat)</p>
        </h1>
        <div className="mt-3 grid grid-cols-[130px] gap-x-2 overflow-clip p-4 text-left text-lg text-slate-700 sm:grid-cols-[auto] lg:mt-0 lg:text-2xl">
          <p className="text-right">Date of birth:</p>
          <p>
            {`12 April 1994`} ({moment("1994-04-12").fromNow().slice(0, -4)})
          </p>
          <p className="text-right">Educations: </p>
          <p className="whitespace-pre-wrap">Bechelor of Accounting (TU)</p>
          <p className="col-start-2">MSMIS (TU)</p>
          <p className="col-start-2">Fullstack Codecamp (Software Park)</p>
          <p className="text-right">Skills:</p>
          <div className="col-start-2 mb-2 flex flex-wrap gap-2">
            <Image
              className="inline h-8 dark:hover:rounded-xl dark:hover:bg-slate-200"
              src="/react.svg"
              alt="React.js Logo"
              width={32}
              height={32}
              priority
            />
            <Image
              className="inline h-8 dark:hover:rounded-xl dark:hover:bg-slate-200"
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={32}
              priority
            />
            <Image
              className="inline h-8 dark:hover:rounded-xl dark:hover:bg-slate-200"
              src="/angular.svg"
              alt="Angular Logo"
              width={32}
              height={32}
              priority
            />
          </div>
          <p className="col-start-2">
            <Image
              className="inline h-8 dark:hover:rounded-xl dark:hover:bg-slate-200"
              src="/nodejs.svg"
              alt="Nodejs Logo"
              width={60}
              height={32}
              priority
            />
            <Image
              className="inline h-8 dark:hover:rounded-xl dark:hover:bg-slate-200"
              src="/golang.svg"
              alt="Golang Logo"
              width={60}
              height={32}
              priority
            />
          </p>
          <p className="text-right">Email:</p>
          <p className="col-start-2">thatphon123@gmail.com</p>
          <p className="text-right">Tel:</p>
          <p className="col-start-2">080-0452922</p>
        </div>
        {nextButtonLink && (
          <p>
            <a href={nextButtonLink}>
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
    </div>
  );
}
