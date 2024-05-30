import React from "react";
import clsx from "clsx";
import { useState } from "react";
import Input from "./Input";

export default function AccordionFormSection({ props, sectionName }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      className={clsx(
        "px-5 py-4 rounded-lg w-full bg-blue_gray-50 drop-shadow-md transition-all duration-300 ease-in-out"
      )}
    >
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className={clsx(
          "flex justify-between w-full  text-[18px] font-semibold text-blue_gray-700 transition-all duration-300 ease-in-out",
          accordionOpen ? "py-4" : ""
        )}
      >
        <span>{sectionName}</span>
        {accordionOpen ? (
          <img
            className={clsx("rotate-90 transition-transform")}
            src="/assets/icons/collapse_arrow-icon.svg"
            alt="collapse-icon"
          />
        ) : (
          <img
            className={clsx("-rotate-90 transition-transform")}
            src="/assets/icons/collapse_arrow-icon.svg"
            alt="collapse-icon"
          />
        )}
      </button>
      <div
        className={clsx(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className={clsx("overflow-hidden", accordionOpen ? "pb-36" : "")}>
          <div
            className={clsx(
              "grid grid-cols-1 items-center gap-6 sm:grid-cols-2 min-[980px]:grid-cols-3"
            )}
          >
            {props.map((item) => {
              return <Input key={item._id} props={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
