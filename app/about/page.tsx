import moment from "moment";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 pb-36 lg:gap-5 text-center">
      <h1 className="text-3xl lg:text-6xl text-blue-600 font-bold">
        Thatsaphon Sukanantatham
      </h1>
      <div className="text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-500">
        <p>
          {`Date of birth - 12 April 1994`} ({moment("1994-04-12").fromNow()})
        </p>
        {/* {dayjs.from(dayjs("1994-04-12"))} */}
        <p>{`Bechelor of Accounting - Thammasat University`}</p>
      </div>
      {/* <h3 className="text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-500">
        {`Bechelor of Accounting - Thammasat University`}
      </h3>
      <h3 className="text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-500">
        {`Bechelor of Accounting - Thammasat University`}
      </h3> */}
      <p>
        <button
          type="button"
          className="text-lg lg:text-2xl p-2 border-2 rounded-md bg-slate-400 px-6 text-white">
          Start!
        </button>
      </p>
    </div>
  );
}
