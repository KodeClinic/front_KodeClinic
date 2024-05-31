import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { getAppointmentsbyPatient } from "@/services/appointments";
import AppointmentList from "./AppointmentList";
import PatientClinicalHistory from "./PatientClinicalHistory";
import AppointmentListCardPatient from "../AppointmentListCardPatient";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import TwoButtonsModal from "../TwoButtons_Modal.jsx";
import ConfirmationModal from "../MedicalRecords/ConfirmationModal";
import { updateClinicalHistory } from "@/services/clinicalHistories";

export default function PatientAppointments() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  // const [appointmentList, setAppointmentList] = useState([]);

  //Context
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentId, setAppointmentId] = useState("");
  const [userData, setUserData] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  const modalProps = {
    title: "Historia Clínica del paciente",
    description:
      "¿Está seguro que desea finalizar la actualización de la Historia Clínica?",
    buttonLeft: "Cancelar",
    buttonRight: "Actualizar",
  };

  const confirmationProps = {
    text: "Historia Clínica actualizada con éxito",
    button: "Entendido",
    successIcon: true,
  };

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setToken(token);
    setId(id);
    // }

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
      // setAppointmentList(dataJSON.data);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
    }
  };

  const submitData = async () => {
    try {
      const responseUpdate = await updateClinicalHistory({
        data: userData,
        templateId: 2,
        patientId: patientId,
        token: token,
        appointmentId: appointmentId,
      });
      const dataJSON = await responseUpdate.json();
    } catch (error) {
      alert("Error al actualizar información por favor intentelo de nuevo");
      router.push({
        pathname: "/PatientDetails/[patient_id]",
        query: { patient_id: patientId, id: id },
      });
    }
    setIsDisable(!isDisable);
    setUserData("");
    setModal(!modal);
    setConfirmation(!confirmation);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDisable = () => {
    setIsDisable(!isDisable);
  };

  const toggleConfirmation = () => {
    setConfirmation(!confirmation);
    router.push({
      pathname: "/PatientDetails/[patient_id]",
      query: { patient_id: patientId },
    });
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
            <PatientClinicalHistory />
          </section>
        );
    }
  };

  return (
    <multiStepContext.Provider
      value={{
        setCurrentPage,
        setAppointmentId,
        appointmentId,
        userData,
        setUserData,
        modal,
        isDisable,
        submitData,
        toggleModal,
        toggleConfirmation,
        handleDisable,
      }}
    >
      <section>{renderPage(currentPage)}</section>
      {modal && <TwoButtonsModal props={modalProps} />}
      {confirmation && <ConfirmationModal props={confirmationProps} />}
    </multiStepContext.Provider>
  );
}
