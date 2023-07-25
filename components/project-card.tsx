import React from "react";

type Props = {};

export default function ProjectCardComponent({}: Props) {
  return (
    <div className="h-[250px] w-[200px] rounded-xl bg-slate-800 p-2 dark:bg-slate-200">
      <div className="h-1/2 w-full rounded-xl bg-slate-200 dark:bg-slate-800"></div>
    </div>
  );
}
