import clsx from "clsx";
import React from "react";
import { useState } from "react";
import AppointmentCard from "./AppointmentCard";

export default function AccordionAppointments({ props }) {
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
        <span>Citas programadas</span>
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
          <div className={clsx(" flex flex-col gap-4")}>
            {props.map((date) => {
              return <AppointmentCard key={date?.id} props={date} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
