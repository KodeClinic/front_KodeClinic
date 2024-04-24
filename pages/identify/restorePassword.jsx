import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { restorePasswordSchema } from "@/schemas/restorePassword";
import clsx from "clsx";
import { restorePassword } from "@/services/users/auth";
import Link from "next/link";

export default function NewPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const router = useRouter();
  const data = router.query;

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const req = { email: data.email, newpassword: values.newPassword };
      const response = await restorePassword(req);
      if (response.status === 201) {
        const dataJSON = await response.json();
        localStorage.setItem("token", dataJSON.token);
        router.push({
          pathname: "../PasswordChanged",
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
        newPassword: "",
        confirmPassword: "",
      },
      validationSchema: restorePasswordSchema,
      onSubmit,
    });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white  rounded px-8 py-10 pt-6 pb-8 mb-4">
          <Link
            href={"LandinPage"}
            className="flex justify-center items-center mb-7 flex-col"
          >
            <img src="/assets\img-kodeclinic-logo.png" alt="KodeClinic_Logo" />
            <h2 className="text-2xl text-blue_button text-center">
              <span>Kode</span>
              <span className="font-bold">Clinic</span>
            </h2>
          </Link>
          <div className="mb-4 flex flex-col justify-center text-center">
            <h1 className="text-2xl font-bold text-center">
              Crear nueva contraseña
            </h1>
            <p className="text-blue_grey-700 text-xs mt-2 sm:text-sm">
              Tu nueva contraseña debe ser diferente de
            </p>
            <p className="text-blue_grey-700 text-xs sm:text-sm ">
              las que utilizaste previamente
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Nueva contraseña
              </label>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                  errors.newPassword && touched.newPassword
                    ? "border-red"
                    : "border-primary_main",
                  values.confirmPassword === values.newPassword
                    ? ""
                    : "border-red"
                )}
                id="newPassword"
                type="password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.newPassword && touched.newPassword ? (
                <p
                  className={clsx(
                    "text-sm text-red text-center font-medium mb-4"
                  )}
                >
                  {errors.newPassword}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold  mb-2">
                Confirmar contraseña
              </label>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-red"
                    : "border-primary_main",
                  values.confirmPassword === values.newPassword
                    ? ""
                    : "border-red"
                )}
                id="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.confirmPassword === values.newPassword ? (
                ""
              ) : (
                <p
                  className={clsx(
                    "text-sm text-red text-center font-medium mb-4"
                  )}
                >
                  Las contraseñas deben de ser identicas
                </p>
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
                {isLoading ? "Cargando..." : "Cambiar contraseña"}
              </button>
              {isFailed && (
                <p className="text-sm font-medium text-red p-2 rounded flex text-center">
                  Imposible utilizar esta contraseña, por favor intenta con otra
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
