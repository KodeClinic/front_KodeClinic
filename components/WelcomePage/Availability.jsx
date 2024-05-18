import clsx from "clsx";
import AvailabilityForm from "./AvailabilityForm";
import { useContext } from "react";
import { useRouter } from "next/router";
import { WelcomePageContext } from "@/context/WelcomePageContext";

export default function Availability() {
  const router = useRouter();
  const { setCurrentStep, submitData } = useContext(WelcomePageContext);

  return (
    <>
      <div className={clsx("px-8 pt-8")}>
        <div
          className={clsx(
            "min-[360px]:flex-col",
            "justify-center",
            "tracking-wide",
            "text-xl",
            "md:text-3xl",
            "flex md:flex-row",
            "justify-items-center",
            "place-items-center",
            "justify-center",
            "space-x-2"
          )}
        >
          <span className={clsx("text-green_title font-semibold")}>
            {" "}
            Bienvenido a
          </span>
          <span className={clsx("text-blue_button font-semibold", "ml-2")}>
            {" "}
            KodeClinic
          </span>
        </div>
        <div className={clsx("flex justify-center")}>
          <span
            className={clsx(
              "text-blue_gray-700",
              "md:text-base",
              "mt-2",
              "text-center"
            )}
          >
            Antes de continuar completa tu perfil
          </span>
        </div>
        <div
          className={clsx(
            "flex",
            "justify-center",
            "mt-5",
            "text-base md:text-xl",
            "text-blue_gray-700"
          )}
        >
          <p className={clsx("text-center font-semibold")}>Disponibilidad</p>
        </div>
        <div
          className={clsx(
            "mt-10",
            "text-base",
            "md:text-xl",
            "flex-col",
            "space-y-2",
            "m-2",
            "p-2",
            "sm:flex",
            "gap-5"
          )}
        >
          <div
            className={clsx("space-y-2", "ml-2", "flex flex-col items-center")}
          >
            <AvailabilityForm />
          </div>
          <div className={clsx("flex justify-between pt-10")}>
            <button
              onClick={() => {
                setCurrentStep(3);
              }}
              className={clsx(
                "bg-blue_gray-50 font-semibold rounded-md text-blue_gray-700 py-2 px-3 text-lg"
              )}
            >
              Atrás
            </button>

            <button
              onClick={() => {
                submitData();
                setCurrentStep(5);
              }}
              className={clsx(
                "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
              )}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
