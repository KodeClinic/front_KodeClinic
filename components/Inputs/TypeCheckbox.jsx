import React, { useContext, useState } from "react";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";

export default function TypeCheckbox({ label, inputType, placeholder }) {
  const { userData, setUserData } = useContext(multiStepContext);
  const [checkValue, setCheckValue] = useState(true);
  return (
    <div
      className={clsx("flex flex-row-reverse justify-end items-center gap-3")}
    >
      <label
        className={clsx(
          "text-gray-900 font-semibold ",
          "text-[16px] w-[150px]"
        )}
      >
        {label}
      </label>
      <div>
        <input
          type={inputType}
          required
          placeholder={placeholder}
          className={clsx(
            "rounded-md py-2 text-gray-900 drop-shadow-sm ring-2 ring-inset  placeholder:text-gray-900 placeholder:pl-2 cursor-pointer",
            "w-6 h-6 ring-blue_gray-500"
          )}
          checked={userData[label]}
          onChange={(event) => {
            setCheckValue(!checkValue);
            setUserData({ ...userData, [label]: checkValue });
          }}
        />
      </div>
    </div>
  );
}
