import React from "react";
import clsx from "clsx";
import TypeCheckbox from "./Inputs/TypeCheckbox";
import TypeSelect from "./Inputs/TypeSelect";
import TypeMultiSelect from "./Inputs/TypeMultiSelect";
import GeneralInput from "./Inputs/GeneralInput";

export default function Input({ props }) {
  const renderInput = (props) => {
    switch (props.inputType) {
      case "checkbox":
        return <TypeCheckbox props={props} />;
      case "select":
        return <TypeSelect props={props} />;
      case "multiselect":
        return <TypeMultiSelect props={props} />;
      default:
        return <GeneralInput props={props} />;
    }
  };

  return (
    <div className={clsx("flex flex-col items-center")}>
      {renderInput(props)}
    </div>
  );
}
