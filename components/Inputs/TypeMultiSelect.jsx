import React, { useContext } from "react";
import Select from "react-select";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";

const selectStyles = {
  control: (styles) => ({
    ...styles,
    width: 300,
    minHeight: 48,
    borderRadius: 6,
    border: "2px solid #2196F3",
  }),
};

export default function TypeMultiSelect({ props }) {
  const { label, optionSelect, _id } = props;
  const { userData, setUserData } = useContext(multiStepContext);
  return (
    <div className={clsx("flex flex-col")}>
      <label className={clsx("text-gray-900 font-semibold ", "text-[14px]")}>
        {label}
      </label>
      <div>
        <Select
          isMulti
          styles={selectStyles}
          placeholder={"Selecciona las opciones"}
          options={optionSelect}
          value={userData[label]}
          onChange={(event) => {
            setUserData({ ...userData, [_id]: event }); //para generar un propiedad dentro del objeto global
            // setUserData([...userData, { [label]: event }]); //para generar un nuevo objeto dentro del array
          }}
        />
      </div>
    </div>
  );
}
