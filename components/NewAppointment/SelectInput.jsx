import Select from "react-select";

export default function CustomSelect({
  onChange,
  options,
  value,
  selectStyles,
}) {
  const defaultValue = (options, value) => {
    return options
      ? options.find((option) => {
          option.value === value;
        })
      : "";
  };

  return (
    <Select
      styles={selectStyles}
      value={defaultValue(options, value)}
      onChange={(value) => onChange(value)}
      options={options}
    />
  );
}
