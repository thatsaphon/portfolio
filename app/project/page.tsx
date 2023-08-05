import ProjectCardComponent from "@/components/project-card";
import moment from "moment";
import Image from "next/image";
import React from "react";

type Props = { nextButtonLink?: string };

export default function ProjectPage({ nextButtonLink }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-5 pb-36 text-center lg:gap-5 lg:p-24">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-6xl">
        Projects
      </h1>
      <div className="flex w-full flex-col gap-3">
        <ProjectCardComponent
          src="/projects/erp-project.png"
          alt="erp-project"
          title="ERP for my future business (WIP)"
          content={
            <>
              <p>
                I am going to run my own business in next couple of years. I
                would like to write my own web application mainly focus on
                handling inventory and sales and also managing other expense or
                any financial transactions.
              </p>
              <br />
              <p>
                <strong>Stack:</strong>
                NextJS
              </p>
            </>
          }
          link="https://nextjs-erp.vercel.app"
        />
        <hr />
        <ProjectCardComponent
          src="/angular.svg"
          alt="angular"
          title="Recruitment Management"
          content={
            <>
              <p>I have worked in Belgian recruitment company.</p>
              <p>
                I mainly work on Frontend Angular and also prepare and fix API
                for my work for Angular project from .NET Core and SQL Server.
              </p>
              <br />
              <p>
                <strong>Stack:</strong> Angular - NgRx, ngneat, Pipe,
                Observable, Form
              </p>
            </>
          }
        />
        <hr />
        <ProjectCardComponent
          src="/golang.svg"
          alt="golang"
          title="Golang Applications"
          content={
            <>
              <p>I have worked in many projects in Go such as</p>
              <p>
                • <strong>Golang API</strong> - Gin Framework: a simply API with
                writing log on both database and files with Goroutine
              </p>
              • <strong>Golang Kafka</strong> - Server Producer Consumer: Design
              Kafka environment to replace old existing old message queue
              software. Implement Kafka Producer and Consumer.
              <p>
                • <strong>Golang Web</strong> - build a simply web application
                to test produce kafka messages
              </p>
              <p>
                • <strong>Golang exe</strong> - build batch applications run
                daily to calculate data and update to database
              </p>
            </>
          }
        />
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
  );
}
