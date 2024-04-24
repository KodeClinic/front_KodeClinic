import { useRouter } from "next/router";
import { useFormik } from "formik";
import { recoveryEmailSchema } from "@/schemas/recoveryEmail";
import { useState } from "react";
import { forgotPassword } from "@/services/users/auth";
import clsx from "clsx";
import Link from "next/link";

export default function RecoveryEmail() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await forgotPassword(values);
      if (response.status === 201) {
        const dataJSON = await response.json();
        router.push({
          pathname: "passwordVerification",
          query: { email: values.email },
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

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: recoveryEmailSchema,
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
              Por favor ingresa el correo electrónico registrado
            </p>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
              <label className="block text-gray-300 font-semibold text-sm  mb-2">
                Correo electrónico
              </label>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
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

            <div className="flex items-center justify-between">
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
                {isLoading ? "Enviando..." : "Enviar código"}
              </button>
              {isFailed && (
                <p className="text-sm font-medium text-red p-2 rounded flex text-center">
                  El correo proporcionado no está registrado, por favor intenta
                  con un correo registrado
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
