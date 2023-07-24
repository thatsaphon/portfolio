import Image from "next/image";
import AboutPage from "./about/page";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24 pb-36 lg:gap-5 text-center">
        <h1 className="text-3xl lg:text-6xl text-blue-600 dark:text-blue-400 font-bold">
          Hi there, My name is{" "}
          <span className="text-blue-900 dark:text-blue-300 font-extrabold">
            Thatsaphon,
          </span>
        </h1>
        <h1 className="text-3xl lg:text-6xl text-blue-600 dark:text-blue-400 font-bold">
          a Fullstack developer.
        </h1>
        <h3 className="text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-500">
          {`Let's see what have I done.`}
        </h3>
        <p>
          <a href="#about">
            <button
              type="button"
              className="text-lg lg:text-2xl p-2 border-2 rounded-md bg-slate-400 px-6 text-white">
              Start!
            </button>
          </a>
        </p>
      </div>
      <div id="about">
        <AboutPage></AboutPage>
      </div>
    </>
  );
}
