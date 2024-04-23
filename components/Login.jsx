import { useRouter } from "next/router";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/loginForm";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { login } from "@/services/users/auth";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await login(values);
      if (response.status === 200) {
        const dataJSON = await response.json();
        localStorage.setItem("token", dataJSON.token);
        // router.push("/DashboardSpe");
        router.push({
          pathname: "identify/EmailVerfication",
          query: { email: values.email },
        });
        setIsLoading(false);
        setIsFailed(false);
      } else if (response.status === 401) {
        setIsLoading(false);
        setIsFailed(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsFailed(true);
    }
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white  rounded px-8 py-10 pt-6 pb-8 mb-4">
          <div className="flex justify-center items-center mb-7 flex-col">
            <img src="assets\img-kodeclinic-logo.png" alt="KodeClinic_Logo" />
            <h2 className="text-2xl text-blue_button text-center">
              <span>Kode</span>
              <span className="font-bold">Clinic</span>
            </h2>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-center">
              Iniciar<span className="text-blue-500"> Sesión</span>
            </h1>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
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
              <label className="block text-gray-700 text-sm  mb-2">
                Contraseña
              </label>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline",
                  errors.password && touched.password
                    ? "border-red"
                    : "border-primary_main"
                )}
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <p className="text-blue_grey-700 text-xs italic">
                ¿Olvidaste tu contraseña?
              </p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <button
                className={clsx(
                  "bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  flex justify-center items-center gap-2",
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
                  Imposible logearte con estas crendeciales, por favor intenta
                  con otras
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="bg-gray-100 rounded-b flex flex-col w-full p-4 items-center justify-between">
          <p className="text-gray-600 text-sm">
            ¿Aún no tienes una cuenta?
            <Link
              className="text-blue_button font-bold hover:underline ml-2"
              href="/CreateAccount"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
