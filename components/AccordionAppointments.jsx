import clsx from "clsx";
import React from "react";
import { useState } from "react";
import AppointmentCard from "./AppointmentCard";

export default function AccordionAppointments({ props }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={clsx(
        "px-5 py-4 rounded-lg bg-blue_gray-50 drop-shadow-md transition-all duration-300 ease-in-out"
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
        <span>Citas programadas {props.length}</span>
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
          <div className={clsx(" flex flex-col gap-6")}>
            {props.length != 0
              ? props.map((date) => {
                  return (
                    <AppointmentCard
                      key={`appointment-${date?._id}`}
                      props={date}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
