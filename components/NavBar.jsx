import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className={clsx("bg-white drop-shadow-md", "fixed top-0 z-50 w-full")}>
      <div
        className={clsx(
          "flex flex-col ",
          "min-[980px]:flex-row min-[980px]:justify-between",
          "lg:max-w-[1440px] lg:m-auto"
        )}
      >
        <div
          className={clsx(
            "flex items-center px-4 gap-1 py-[18px] min-[980px]:py-3",
            " sm:px-14  min-[980px]:pl-20 min-[980px]:pr-0"
          )}
        >
          <img
            className={clsx("w-7 h-7", "min-[980px]:w-8 min-[980px]:h-8")}
            src="assets/img-kodeclinic-logo.png"
            alt="kodeclinic_logo"
          />
          <div>
            <span
              className={clsx(
                "text-blue_button text-[16px] font-medium",
                "min-[980px]:text-2xl"
              )}
            >
              Kode
            </span>
            <span
              className={clsx(
                "text-blue_button text-[16px] font-extrabold",
                "min-[980px]:text-[22px]"
              )}
            >
              Clinic
            </span>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "w-7 h-7 absolute right-4 top-6 sm:right-14",
            "cursor-pointer min-[980px]:hidden",
            "min-[980px]:w-8 min-[980px]:h-8"
          )}
        >
          {isOpen ? (
            <img src="assets/icons/close-icon.svg" alt="close-menu" />
          ) : (
            <img src="assets/icons/menu-icon.svg" alt="menu" />
          )}
        </div>
        <div
          className={clsx(
            "flex flex-col gap-4",
            "py-5 px-4 sm:pr-14 max-w-[360px] ",
            "min-[980px]:flex-row min-[980px]:max-w-[740px] min-[980px]:pr-20 min-[980px]:pl-0 min-[980px]:gap-7 min-[980px]:py-3",
            "absolute min-[980px]:static z-[-1] right-0 top-[60spx] w-full min-[980px]:z-auto bg-white min-[980px]:items-center min-[980px]:justify-end",
            "transition-all, ease-in duration-300",
            isOpen ? "top-12" : "top-[-490px]"
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-start gap-4",
              "text-[14px] font-semibold ",
              "min-[980px]:flex-row min-[980px]:gap-6"
            )}
          >
            <button className={clsx("px-4 py-2", "min-[980px]:px-0")}>
              Inicio
            </button>
            <button className={clsx("px-4 py-2", "min-[980px]:px-0")}>
              Sobre Nosotros
            </button>
            <button className={clsx("px-4 py-2", "min-[980px]:px-0")}>
              Funcionalidades
            </button>
          </div>
          <div
            className={clsx(
              "flex flex-col gap-4",
              "text-[14px]",
              "min-[980px]:flex-row "
            )}
          >
            <button
              onClick={() => router.push("/CreateAccount")}
              className={clsx(
                "text-white font-semibold",
                "border-2 border-blue_button bg-blue_button rounded-md",
                "max-w-[327px] px-4 py-2 max-h-[40px]",
                "min-[980px]:rounded-full min-[980px]:w-[150px]"
              )}
            >
              ¡Registrate!
            </button>
            <button
              onClick={() => router.push("/LogIn")}
              className={clsx(
                "text-blue_button font-semibold",
                "border-2 border-blue_button rounded-md",
                "max-w-[327px] px-4 py-2 max-h-[40px]",
                "min-[980px]:rounded-full min-[980px]:w-[150px]"
              )}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
