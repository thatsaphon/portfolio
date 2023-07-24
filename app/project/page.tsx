import ProjectCardComponent from "@/components/project-card";
import moment from "moment";
import Image from "next/image";
import React from "react";

type Props = { showNextButton?: boolean };

export default function ProjectPage({ showNextButton }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 pb-36 text-center lg:gap-5">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-6xl">
        Project{" "}
      </h1>
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-3">
        <ProjectCardComponent />
        <ProjectCardComponent />
        <ProjectCardComponent />
        <ProjectCardComponent />
      </div>
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
