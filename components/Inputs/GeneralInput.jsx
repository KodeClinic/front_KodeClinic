import React, { useContext } from "react";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";

export default function GeneralInput({ props }) {
  const { label, inputType, placeholder, _id } = props;
  const { userData, setUserData } = useContext(multiStepContext);

  return (
    <div className={clsx("flex flex-col")}>
      <label className={clsx("text-gray-900 font-semibold ", "text-[14px]")}>
        {label}
      </label>
      <div>
        <input
          type={inputType}
          required
          placeholder={placeholder}
          className={clsx(
            "rounded-md py-2 text-gray-900 drop-shadow-sm ring-2 ring-inset  placeholder:text-gray-900 placeholder:pl-2 cursor-pointer",
            "w-[300px] h-12 ring-primary_main"
          )}
          value={userData[label]} //para generar un propiedad dentro del objeto global
          onChange={(event) => {
            setUserData({ ...userData, [_id]: event.target.value }); //para generar un propiedad dentro del objeto global
            // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
          }}
        />
      </div>
    </div>
  );
}
