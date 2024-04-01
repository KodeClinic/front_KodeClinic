import React from "react";
import clsx from "clsx";
import { useState } from "react";
import FreeAgendaCard from "./FreeAgendaCard";

export default function AccordionFreeAgenda({ props }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className={clsx("px-3 py-3 rounded-[20px]  bg-[#05C2B3]")}>
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className={clsx(
          "flex justify-between w-full  text-[18px] font-medium text-white",
          accordionOpen ? "pb-3" : ""
        )}
      >
        <span>Horarios Libres de la Agenda</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
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
