import Image from "next/image";
import AboutPage from "./about/page";
import React from "react";
import ProjectPage from "./project/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
      <div
        className="flex min-h-screen flex-col items-center justify-center p-5 pb-36 text-center lg:gap-5 lg:p-24"
        id="start"
      >
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
            I decided to challenge myself and transition from an accountant to a
            programmer. As I started coding, I discovered a passion for creating
            efficient algorithms and solving code issues, much like solving
            financial statements. This shift not only changed my career but also
            fueled my determination to eventually develop my own ERP system
            using technology to solve practical problems.
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
        <AboutPage nextButtonLink={`#project`} />
      </div>
      <div id="project">
        <ProjectPage nextButtonLink="#contact" />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}
