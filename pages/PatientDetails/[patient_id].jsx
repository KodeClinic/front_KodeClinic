import clsx from "clsx";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import NavBarSpe from "@/components/NavBarSpe";
import PatientDetailsBand from "@/components/PatientDetailsBand";
import PatientMedicalRecords from "@/components/PatientDetails/PatientMedicalRecords";
import PatientAppointments from "@/components/PatientDetails/PatientAppointments";
import { getUserById } from "@/services/users/auth";

export default function PatientDetails() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const [currentPage, setCurrentPage] = useState(1);
  const [patientInfo, setPatientInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    getPatient(token, patientId);
  }, []);

  const getPatient = async (token, patientId) => {
    try {
      const response = await getUserById({
        id: patientId,
        // id: "664c07d67173bf0403f9f717",
        token: token,
      });
      const dataJSON = await response.json();
      setPatientInfo(dataJSON.data);
    } catch (error) {
      alert("Ocurrió un problema ");
    }
  };

  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <section>
            <PatientMedicalRecords />
          </section>
        );

      case 2:
        return (
          <section>
            <PatientAppointments />
          </section>
        );
    }
  };

  return (
    <main className={clsx("bg-background w-full min-h-screen")}>
      <NavBarSpe pageName={"Paciente"} />

      <PatientDetailsBand
        name={`${patientInfo.name} ${patientInfo.lastName}`}
        gender={patientInfo.gender}
        email={patientInfo.email}
        cel={patientInfo.cellphone}
      />
      <section
        className={clsx(
          "pt-7 px-4 min-[980px]:pt-8",
          "sm:px-14 min-[980px]:px-20",
          "lg:max-w-[1440px] lg:m-auto",
          "pb-14"
        )}
      >
        <div
          className={clsx(
            "flex",
            "justify-start",
            "text-base font-semibold md:text-lg",
            "pl-7 mb-3"
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
                : "text-blue_gray-400 border-background hover:text-blue_button hover:border-blue_button"
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
              "px-4 py-2",
              " border-b-2 border-[white]",
              currentPage == 2
                ? "text-blue_button border-blue_button"
                : "text-blue_gray-400 border-background hover:text-blue_button hover:border-blue_button"
            )}
          >
            Historias Clínicas
          </button>
        </div>
        <div
          className={clsx(
            "drop-shadow-md rounded-[20px]",
            "lg:max-w-[1440px] lg:m-auto",
            "bg-white w-full",
            "p-7"
          )}
        >
          {renderPage(currentPage)}
        </div>
      </section>
    </main>
  );
}