import React from "react";
import clsx from "clsx";
import { useState } from "react";
import FreeAgendaCard from "./FreeAgendaCard";

export default function AccordionFreeAgenda({ props }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      className={clsx(
        "px-5 py-4 rounded-lg  bg-blue_gray-50 drop-shadow-md transition-all duration-300 ease-in-out"
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
        <span>Horarios Libres</span>
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
        <div className={clsx("overflow-hidden")}>
          <div
            className={clsx(" grid grid-cols-1 gap-6 min-[980px]:grid-cols-2")}
          >
            {props.map((date) => {
              return <FreeAgendaCard key={date?.id} props={date} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
