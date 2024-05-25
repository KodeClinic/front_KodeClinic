import React from "react";
import clsx from "clsx";
import { useContext } from "react";
import { navbarContext } from "@/context/NavBarContext";
import Link from "next/link";

export default function HamburgerMenuSpe() {
  const { handleMenu, id, onLogout } = useContext(navbarContext);

  return (
    <div className="fixed z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-start items-center w-full ">
      <div className=" bg-background w-[280px] rounded-r-[20px] items-center flex-col h-screen ">
        <div className="items-center flex-col justify-center">
          <div
            className={clsx(
              "flex flex-row items-center justify-center px-4 gap-1 py-[18px] min-[980px]:py-3",
              "sm:px-14   mx-auto"
            )}
          >
            <img
              className={clsx("w-10 h-10", "min-[980px]:w-8 min-[980px]:h-8")}
              src="/assets/img-kodeclinic-logo.png"
              alt="kodeclinic_logo"
            />
            <div>
              <span className={clsx("text-blue_button text-2xl font-medium")}>
                Kode
              </span>
              <span
                className={clsx("text-blue_button text-[22px] font-extrabold")}
              >
                Clinic
              </span>

              <img
                src="/assets/icons/close-icon2.svg"
                alt="close"
                onClick={handleMenu}
                className="absolute top-5 left-[245px] w-[14px] h-[14px] mt-2 mr-2 cursor-pointer"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="flex-col mx-5 mt-[50px]">
            <Link
              href={{
                pathname: "/DashboardSpe",
                query: { id: id },
              }}
              className="flex-row flex mx-auto mb-4"
            >
              <img
                src="/assets/icons/Calendar-icon2.svg"
                alt=""
                className="w-[18px] h-[20px] mx-3"
              />
              <p className="mx-3 font-medium">Agenda</p>
            </Link>
            <Link
              href={{
                pathname: "/Patient_List",
                query: { id: id },
              }}
              className="flex-row flex mx-auto mb-4"
            >
              <img
                src="/assets/icons/Menu-icon-b.svg"
                alt=""
                className="w-[18px] h-[20px] mx-3"
              />
              <p className="mx-3 font-medium">Lista de Pacientes</p>
            </Link>
            {/* <Link
              href={{
                pathname: "/New_pacient",
                query: { id: id },
              }}
              className="flex-row flex mx-auto mb-4"
            >
              <img
                src="/assets/icons/addp-icon.svg"
                alt=""
                className="w-[18px] h-[20px] mx-3"
              />
              <p className="mx-3 font-medium">Nuevo Paciente</p>
            </Link> */}
            <Link
              className="flex-row flex mx-auto mb-4"
              href={{
                pathname: "/NewAppointment",
                query: { id: id },
              }}
            >
              <img
                src="/assets/icons/newappoiment-icon.svg"
                alt=""
                className="w-[18px] h-[20px] mx-3"
              />
              <p className="mx-3 font-medium">Nueva Cita</p>
            </Link>
          </div>

          <div className="flex-col mx-5 mt-[50px] absolute bottom-0 left-0">
            <div className="flex-row flex mx-auto mb-4">
              <img
                src="/assets/icons/config-icon.svg"
                alt=""
                className="w-[18px] h-[20px] mx-3"
              />
              <p className="mx-3 font-medium">Perfil</p>
            </div>
            <button onClick={onLogout} className="flex-row flex mx-auto mb-4">
              <img
                src="/assets/icons/signout-icon.svg"
                alt=""
                className="w-[18px] h-[20px] mx-3"
              />
              <p className="mx-3 font-medium">Cerrar Sesión</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
