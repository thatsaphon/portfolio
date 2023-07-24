import Image from "next/image";
import AboutPage from "./about/page";
import React from "react";
import ProjectPage from "./project/page";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24 pb-36 text-center lg:gap-5">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Hi there, My name is{" "}
          <span className="font-extrabold text-blue-900 dark:text-blue-400">
            Thatsaphon,
          </span>
        </h1>
        <h1 className="text-3xl font-bold lg:text-6xl">
          a Fullstack developer.
        </h1>
        <h3 className="mt-3 text-lg text-slate-700 dark:text-slate-400 lg:mt-0 lg:text-2xl">
          <p>
            a former accountant who, driven by a passion for technology,
            transitioned into the world of coding. With determination and
            self-study, I now thrive as a skilled programmer, combining their
            financial expertise with programming knowledge to create innovative
            solutions. My inspiring journey exemplifies the power of embracing
            new passions and continuously pursuing growth.
          </p>
        </h3>
        <p>
          <a href="#about">
            <button
              type="button"
              className="rounded-md bg-blue-700 p-2 px-6 text-lg text-white dark:bg-slate-200 dark:text-slate-900 lg:text-2xl"
            >
              Start!
            </button>
          </a>
        </p>
      </div>
      <div id="about">
        <AboutPage showNextButton={true} />
      </div>
      <div id="project">
        <ProjectPage showNextButton={true} />
      </div>
    </>
  );
}
