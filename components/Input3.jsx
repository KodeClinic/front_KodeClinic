import React from "react";
import Select from "react-select";
import clsx from "clsx";

const selectStyles = {
  control: (styles) => ({
    ...styles,
    width: 300,
    minHeight: 48,
    borderRadius: 6,
    border: "2px solid #2196F3",
  }),
};

export default function Input({ props }) {
  const {
    label,
    inputType,
    placeholder,
    isCheckbox,
    isSelect,
    isMulti,
    optionSelect,
  } = props;

  return (
    <div className={clsx("flex flex-col items-center")}>
      <div
        className={clsx(
          isCheckbox
            ? "flex flex-row-reverse justify-end items-center gap-3"
            : "flex flex-col"
        )}
      >
        <label
          className={clsx(
            "text-gray-900 font-semibold ",
            isCheckbox ? "text-[16px] w-[150px]" : "text-[14px]"
          )}
        >
          {label}
        </label>
        <div>
          {isSelect ? (
            <Select
              isMulti={isMulti}
              styles={selectStyles}
              placeholder={"Selecciona las opciones"}
              // className="ring-2 ring-inset ring-primary_main rounded-md w-[300px] h-12 py-2 text-gray-900 drop-shadow-sm cursor-pointer"
              options={optionSelect}
            />
          ) : (
            <input
              type={inputType}
              required
              placeholder={placeholder}
              className={clsx(
                "rounded-md py-2 text-gray-900 drop-shadow-sm ring-2 ring-inset  placeholder:text-gray-900 placeholder:pl-2 cursor-pointer",
                isCheckbox
                  ? "w-6 h-6 ring-blue_gray-500"
                  : "w-[300px] h-12 ring-primary_main"
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
