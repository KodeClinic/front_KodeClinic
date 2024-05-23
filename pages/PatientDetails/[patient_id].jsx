import clsx from "clsx";
import { useState } from "react";

import NavBarSpe from "@/components/NavBarSpe";
import PatientDetailsBand from "@/components/PatientDetailsBand";
import PatientAppointments from "@/components/PatientDetails/PatientAppointments";
import PatientMedicalRecords from "@/components/PatientDetails/PatientMedicalRecords";

export default function PatientDetails() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <PatientMedicalRecords />;

      case 2:
        return <PatientAppointments />;
    }
  };

  return (
    <main className={clsx("bg-background w-full h-fit")}>
      <NavBarSpe pageName={"Paciente"} />

      <PatientDetailsBand
        name={"Juan José Martinez Perez"}
        gender={"male"}
        email={"mart.juan@gmail.com"}
        cel={"33 12 34 56 89"}
        work={"Programador"}
        religion={"Católica"}
        address={"Av. Juan de la barrera, #1808 Col. Condesa."}
      />
      <section
        className={clsx(
          "pt-7 px-4 min-[980px]:pt-14",
          "sm:px-14 min-[980px]:px-20",
          "lg:max-w-[1440px] lg:m-auto",
          "pb-14"
        )}
      >
        <div
          className={clsx(
            "drop-shadow-md rounded-[20px]",
            "lg:max-w-[1440px] lg:m-auto",
            "bg-white w-full",
            "p-7"
          )}
        >
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
              Antedecedentes Médicos
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
              Historias Clínicas
            </button>
          </div>
          {renderPage(currentPage)}
        </div>
      </section>
    </main>
  );
}
