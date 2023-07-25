import moment from "moment";
import Image from "next/image";
import React from "react";

type Props = { showNextButton?: boolean };

export default function AboutPage({ showNextButton }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 pb-36 text-center lg:gap-5">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-6xl">
        About Me{" "}
      </h1>
      <h1 className="text-xl font-bold dark:text-blue-400 lg:text-4xl">
        Thatsaphon Sukanantatham
        <p>(Nat)</p>
      </h1>
      <div className="mt-3 grid grid-cols-2 gap-x-2 text-left text-lg text-slate-700 dark:text-white sm:grid-cols-[200px] lg:mt-0 lg:text-2xl ">
        <p className="text-right">Date of birth:</p>
        <p>
          {`12 April 1994`} ({moment("1994-04-12").fromNow()})
        </p>
        <p className="text-right">Educations: </p>
        <p>Bechelor of Accounting (TU)</p>
        <p className="col-start-2">MSMIS (TU)</p>
        <p className="col-start-2">Fullstack Codecamp (Software Park)</p>
        <p className="text-right">Skills:</p>
        <p className="col-start-2 mb-2 flex gap-2">
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
        </p>
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
      {/* <h3 className="text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-500">
        {`Bechelor of Accounting - Thammasat University`}
      </h3>
      <h3 className="text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-500">
        {`Bechelor of Accounting - Thammasat University`}
      </h3> */}
      {showNextButton && (
        <p>
          <a href="#project">
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
