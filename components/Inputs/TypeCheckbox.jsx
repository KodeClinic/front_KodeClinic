import React, { useContext, useState } from "react";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";

export default function TypeCheckbox({ props }) {
  const { label, inputType, placeholder, _id, propertyName } = props;
  const { userData, setUserData } = useContext(multiStepContext);
  const [checkValue, setCheckValue] = useState(true);

  const checkHandler = () => {
    setCheckValue(!checkValue);
    setUserData({ ...userData, [propertyName]: checkValue }); //para generar un propiedad dentro del objeto global
    // setUserData([...userData, { [_id]: checkValue }]); //para generar un nuevo objeto dentro del array
  };

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
          checked={!checkValue}
          onChange={checkHandler}
        />
      </div>
    </div>
  );
}
