import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { getAppointmentsbyPatient } from "@/services/appointments";
import AppointmentList from "./AppointmentList";
import PatientClinicalHistory from "./PatientClinicalHistory";
import { ClinicalHistoriesContext } from "@/context/ClinicalHistoriesContext";
import AppointmentListCardPatient from "../AppointmentListCardPatient";

export default function PatientAppointments() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const specialistId = router.query.id;
  const [appointmentList, setAppointmentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentId, setAppointmentId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    getAppointments(token, patientId);
  }, []);

  const getAppointments = async (token, patientId) => {
    try {
      const response = await getAppointmentsbyPatient({
        patientId: patientId,
        token: token,
      });
      const dataJSON = await response.json();
      setAppointmentList(dataJSON.data);
      console.log("fecth appointments", dataJSON.data);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
    }
  };
  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <section>
            <AppointmentList />
          </section>
        );

      case 2:
        return (
          <section>
            <PatientClinicalHistory appointmentId={appointmentId} />
          </section>
        );
    }
  };

  const goDetails = () => {};

  return (
    <ClinicalHistoriesContext.Provider
      value={{ setCurrentPage, setAppointmentId }}
    >
      <section>{renderPage(currentPage)}</section>
    </ClinicalHistoriesContext.Provider>
  );
}
