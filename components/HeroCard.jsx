import clsx from "clsx";
import React from "react";

export default function HeroCard({ name, description, icon }) {
  return (
    <div
      className={clsx(
        "bg-white drop-shadow-md",
        "flex flex-row gap-5 items-center justify-center",
        "sm:flex-col px-4 sm:px-[17px] sm:items-start sm:justify-start",
        "min-[980px]:flex-row min-[980px]:items-center min-[980px]:px-8",
        "min-[980px]:max-w-[380px]",
        "py-5 rounded-2xl"
      )}
    >
      <div>
        <img className={clsx("h-[60px] min-w-[60px]")} src={icon} alt={name} />
      </div>
      <div
        className={clsx(
          "flex flex-col gap-[10px]",
          "max-w-[223px] sm:max-w-[166px]"
        )}
      >
        <span
          className={clsx(
            "text-[14px] font-bold sm:text-lg min-[980px]:text-xl"
          )}
        >
          {name}
        </span>
        <span className={clsx("text-[14px] font-normal")}>{description}</span>
      </div>
    </div>
  );
}
