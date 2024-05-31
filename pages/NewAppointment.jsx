import clsx from "clsx";
import { useState } from "react";
import AppointmentNewPatient from "@/components/NewAppointment/newPatient";
import AppointmentExistingPatient from "@/components/NewAppointment/existingPatient";
import NavBarSpe from "@/components/NavBarSpe";

export default function NewAppointment() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <AppointmentNewPatient />;

      case 2:
        return <AppointmentExistingPatient />;
    }
  };

  return (
    <>
      <NavBarSpe pageName={"Agenda"} />

      <main
        className={clsx(
          "bg-background",
          "w-full min-h-screen",
          "p-10 pt-[128px]"
        )}
      >
        <div
          className={clsx(
            "min-[980px]:max-w-[1128px]",
            "mx-auto",
            " bg-white",
            "rounded-[20px]",
            "shadow-lg",
            "md:max-w-3xl"
          )}
        >
          <div className={clsx("flex", "justify-center")}>
            <div className="md:flex justify-between px-16 py-12">
              <div
                className={clsx(
                  "min-[360px]:flex-col",
                  "justify-center",
                  "tracking-wide",
                  "text-xl",
                  "md:text-3xl",
                  "flex",
                  "space-x-2",
                  "space-y-4"
                )}
              >
                <span
                  className={clsx(
                    "text-green_title",
                    "text-center font-semibold text-xl min-[980px]:text-[30px]"
                  )}
                >
                  Registro de Nueva Cita
                </span>

                <div
                  className={clsx(
                    "flex",
                    "justify-start",
                    "text-base font-semibold md:text-lg",
                    "pt-2"
                  )}
                >
                  <button
                    onClick={() => {
                      setCurrentPage(1);
                    }}
                    data-tab-target="#tab1"
                    className={clsx(
                      " border-b-2 border-[white]",
                      currentPage == 1
                        ? "text-blue_button border-blue_button"
                        : "text-blue_gray-400 hover:text-blue_button hover:border-blue_button"
                    )}
                  >
                    Nuevo Paciente
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage(2);
                    }}
                    data-tab-target="#tab2"
                    className={clsx(
                      "p-4",
                      " border-b-2 border-[white]",
                      currentPage == 2
                        ? "text-blue_button border-blue_button"
                        : "text-blue_gray-400 hover:text-blue_button hover:border-blue_button"
                    )}
                  >
                    Paciente Existente
                  </button>
                </div>
                {renderPage(currentPage)}
              </div>
            </div>

            <div
              className={clsx(
                "hidden",
                "min-[1230px]:flex min-[980px]:w-[360px]",
                "flex-col",
                "justify-center",
                "place-items-center",
                "space-y-5",
                "bg-[#E5EDFF]",
                "rounded-r-[20px]",
                "p-5"
              )}
            >
              <img
                className={clsx("max-w-20")}
                src="/assets/KodeClinic_logo_1.svg"
                alt=""
              />
              <img
                className={clsx("m-10")}
                src="/assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
                alt="imgFisio"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
