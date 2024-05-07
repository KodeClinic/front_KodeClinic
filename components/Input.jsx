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
        return (
          <TypeCheckbox
            label={props.label}
            inputType={props.inputType}
            placeholder={props.placeholder}
          />
        );
      case "select":
        return (
          <TypeSelect label={props.label} optionSelect={props.optionSelect} />
        );
      case "multiselect":
        return (
          <TypeMultiSelect
            label={props.label}
            optionSelect={props.optionSelect}
          />
        );
      default:
        return (
          <GeneralInput
            label={props.label}
            inputType={props.inputType}
            placeholder={props.placeholder}
          />
        );
    }
  };

  return (
    <div className={clsx("flex flex-col items-center")}>
      {renderInput(props)}
    </div>
  );
}
