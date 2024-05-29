import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useState } from "react";
import { verificationEmailSchema } from "@/schemas/validateEmail";
import { validateEmail } from "@/services/users/auth";
import clsx from "clsx";

export default function passwordVerification() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const data = router.query;

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const req = { email: data.email, securityCode: values.code };
      const response = await validateEmail(req);
      if (response.status === 200) {
        const dataJSON = await response.json();
        localStorage.setItem("token", dataJSON.token);
        router.push({
          pathname: "restorePassword",
          query: { email: data.email },
        });
        setIsLoading(false);
        setIsFailed(false);
      } else if (response.status === 401) {
        setIsLoading(false);
        setIsFailed(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsFailed(true);
    }
  };

  const {
    values,
    errors,
    isValid,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: verificationEmailSchema,
    onSubmit,
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white  rounded px-8 py-10 pt-6 pb-8 mb-4">
          <div className="flex justify-center items-center mb-7 flex-col">
            <img src="/assets\img-kodeclinic-logo.png" alt="KodeClinic_Logo" />
            <h2 className="text-2xl text-blue_button text-center">
              <span>Kode</span>
              <span className="font-bold">Clinic</span>
            </h2>
          </div>
          <div className="mb-4 flex flex-col justify-center text-center">
            <h1 className="text-2xl font-bold text-center">
              ¿Olvidaste tu contraseña?
            </h1>
            <p className="text-blue_grey-700 text-xs mt-2 sm:text-base mb-3">
              Por favor ingresa el codigo que enviamos al correo electronico
              registrado
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 font-semibold text-sm  mb-2">
                Código
              </label>

              <input
                className={clsx(
                  "text-center shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-0.5",
                  errors.code && touched.code
                    ? "border-red"
                    : "border-primary_main"
                )}
                maxLength="4"
                id="code"
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <button
                className={clsx(
                  "bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center gap-2",
                  isLoading ? "opacity-65" : ""
                )}
                type="submit"
                disabled={isLoading}
              >
                <img
                  className={clsx(
                    "animate-spin h-5 w-5",
                    isLoading ? "block" : "hidden"
                  )}
                  src="/assets/icons/loading-icon.svg"
                  alt="loading-icon"
                />
                {isLoading ? "Cargando..." : "Verificar"}
              </button>
              {isValid ? (
                ""
              ) : (
                <p className="text-sm font-medium text-red p-2 rounded flex text-center">
                  Ingresa el código correcto
                </p>
              )}
              {isFailed && (
                <p className="text-sm font-medium text-red p-2 rounded flex text-center">
                  Código incorrecto, por favor ingresa el código correcto
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
