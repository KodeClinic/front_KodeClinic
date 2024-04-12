import Input from "@/components/Input";
import clsx from "clsx";

const formData = [
  {
    label: "Alergias",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    optionSelect: [],
  },
  {
    label: "Hipertensión",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    optionSelect: [],
  },
  {
    label: "Sobrepeso",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    optionSelect: [],
  },
  {
    label: "Cancer",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    optionSelect: [],
  },
  {
    label: "Tipo de Ejercicio",
    inputType: "text",
    placeholder: "Tipo de Ejercicio",
    isCheckbox: false,
    isSelect: false,
    optionSelect: [],
  },
  {
    label: "Fecha",
    inputType: "date",
    placeholder: "Ingresa fecha",
    isCheckbox: false,
    isSelect: false,
    optionSelect: [],
  },
  {
    label: "Fecha",
    inputType: "date",
    placeholder: "Ingresa fecha",
    isCheckbox: false,
    isSelect: false,
    optionSelect: [],
  },
  {
    label: "Fecha",
    inputType: "date",
    placeholder: "Ingresa fecha",
    isCheckbox: false,
    isSelect: true,
    optionSelect: ["Sí", "No"],
  },
];

export default function formExample() {
  return (
    <div>
      <p className="py-5">Formulario</p>
      <div
        className={clsx(
          "grid grid-cols-1 place-items-center sm:grid-cols-2 min-[980px]:grid-cols-3 gap-5 px-6"
        )}
      >
        {formData.map((props) => {
          return (
            <Input key={`${props?.inputType}-${props?.label}`} props={props} />
          );
        })}
      </div>
    </div>
  );
}
