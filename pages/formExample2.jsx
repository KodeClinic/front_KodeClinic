import { useFormik } from "formik";
import clsx from "clsx";
import { formExampleSchema } from "@/schemas/formExample";
import CustomSelect from "@/components/NewAppointment/SelectInput";

export default function formExample2() {
  const onSubmit = () => {};

  const selectStyles1 = {
    control: (styles) => ({
      ...styles,
      width: 300,
      minHeight: 48,
      borderRadius: 6,
      border: "2px solid #ef4444",
    }),
  };

  const selectStyles2 = {
    control: (styles) => ({
      ...styles,
      width: 300,
      minHeight: 48,
      borderRadius: 6,
      border: "2px solid #2196F3",
    }),
  };

  const optionSelect = [
    { value: "male", label: "Hombre" },
    { value: "female", label: "Mujer" },
  ];

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      gender: "",
      address: "",
    },
    validationSchema: formExampleSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Correo electrónico
          </label>
          <input
            className={clsx(
              "shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline",
              errors.email && touched.email
                ? "border-red"
                : "border-primary_main"
            )}
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className={clsx("text-sm text-red text-center font-medium")}>
              {errors.email}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Contraseña
          </label>
          <input
            className={clsx(
              "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:shadow-outline",
              errors.password && touched.password
                ? "border-red"
                : "border-primary_main"
            )}
            id="password"
            type="text"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-4">
          <p className={clsx("font-semibold")} htmlFor="gender">
            {" "}
            Sexo
          </p>

          <CustomSelect
            selectStyles={
              errors.gender && touched.gender ? selectStyles1 : selectStyles2
            }
            options={optionSelect}
            value={values.gender}
            onChange={(value) => setFieldValue("gender", value.value)}
          />

          {errors.gender && touched.gender ? (
            <p className={clsx("text-sm text-red text-center font-medium")}>
              Genero requerido
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className={clsx(
              "bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  flex justify-center items-center gap-2"
            )}
            type="submit"
          >
            Cargando
          </button>
        </div>
      </form>
      <div className="pt-10"></div>
    </>
  );
}
