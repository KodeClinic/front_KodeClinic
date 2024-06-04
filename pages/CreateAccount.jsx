import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { createAccountSchema } from "@/schemas/CreateAccount";
import clsx from "clsx";
import { createAccount } from "@/services/users/auth";
import Link from "next/link";

export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const req = {
        email: values.email,
        password: values.password,
        role: "specialist",
      };
      const response = await createAccount(req);
      if (response.status === 200) {
        const dataJSON = await response.json();
        localStorage.setItem("token", dataJSON.token);
        router.push({
          pathname: "identify/EmailVerfication",
          query: { email: values.email },
        });
        setIsLoading(false);
        setIsFailed(false);
      } else if (response.status === 401) {
        setIsLoading(false);
        setIsFailed(true);
      } else if (response.status === 400) {
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
        password: "",
        confirmPassword: "",
      },
      validationSchema: createAccountSchema,
      onSubmit,
    });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white  rounded px-8 py-10 pt-6 pb-8 mb-1">
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
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-center">
              Registro de Especialistas
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold  mb-2">
                Correo electrónico
              </label>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
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
              <label className="block text-gray-700 text-sm font-semibold  mb-2">
                Contraseña
              </label>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                  errors.password && touched.password
                    ? "border-red"
                    : "border-primary_main",
                  values.confirmPassword === values.password ? "" : "border-red"
                )}
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p
                  className={clsx(
                    "text-sm text-red text-center font-medium mb-4"
                  )}
                >
                  {errors.password}
                </p>
              ) : (
                ""
              )}
              <label className="block text-gray-700 text-sm font-semibold  mb-2">
                Confirmar contraseña
              </label>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-red"
                    : "border-primary_main",
                  values.confirmPassword === values.password ? "" : "border-red"
                )}
                id="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.confirmPassword === values.password ? (
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
                {isLoading ? "Cargando..." : "Ingresar"}
              </button>
              {isFailed && (
                <p className="text-sm font-medium text-red p-2 rounded flex text-center">
                  Imposible registrarte con estas crendeciales, por favor
                  intenta con otras
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="bg-gray-100 rounded-b flex flex-col w-full items-center text-center justify-between">
          <p className="text-black text-sm ">
            Al crear una cuenta estás aceptando los{" "}
            <span className="text-blue_button font-semibold">
              Términos de Servicio
            </span>
            y
            <span className="text-blue_button font-semibold">
              {" "}
              Politicas de Privacidad
            </span>{" "}
            de Kode<span className="font-bold">Clinic</span>
          </p>
        </div>
      </div>
    </div>
  );
}
