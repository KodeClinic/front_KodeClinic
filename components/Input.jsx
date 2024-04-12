import clsx from "clsx";

export default function Input({ props }) {
  const { label, inputType, placeholder, isCheckbox, isSelect, optionSelect } =
    props;

  return (
    <div
      className={clsx(
        isCheckbox
          ? "flex flex-row-reverse justify-end items-center gap-3"
          : "flex-col"
      )}
    >
      <label
        class={clsx(
          "text-gray-900 font-semibold ",
          isCheckbox ? "text-[16px] w-[150px]" : "text-[14px]"
        )}
      >
        {label}
      </label>
      <div>
        {isSelect ? (
          <select className="ring-2 ring-inset ring-primary_main rounded-md w-[300px] h-12 py-2 text-gray-900 drop-shadow-sm cursor-pointer">
            <option hidden selected>
              Selecciona una opción
            </option>
            {optionSelect.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        ) : (
          <input
            type={inputType}
            //   autocomplete="email"
            required
            placeholder={placeholder}
            class={clsx(
              "rounded-md py-2 text-gray-900 drop-shadow-sm ring-2 ring-inset  placeholder:text-gray-900 placeholder:pl-2 cursor-pointer",
              isCheckbox
                ? "w-6 h-6 ring-blue_gray-500"
                : "w-[300px] h-12 ring-primary_main"
            )}
          />
        )}
      </div>
    </div>
  );
}
