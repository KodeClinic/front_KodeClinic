import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import NavBarSpe from "@/components/NavBarSpe";
import Pathological from "@/components/MedicalRecords/Pathological";
import NonPathological from "@/components/MedicalRecords/NonPathological";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { postRecordsData } from "@/services/medicalRecords";
import { updateRecordsData } from "@/services/medicalRecords";
import { getRecordsData } from "@/services/medicalRecords";
import SkipRecordsModal from "@/components/MedicalRecords/SkipRecordsModal";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function MedicalRecords() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const appointmentId = router.query.appointment;
  const [token, setToken] = useState(null);

  //Estados para el Context
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]); //corroborar si es un array o un objeto
  const [finalData, setFinalData] = useState([]); //corroborar si es un array o un objeto
  const [modal, setModal] = useState(false);
  const [skipMedRecords, setSkipMedRecords] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [clinicalStart, setClinicalStart] = useState(false);
  const [emptyRecords, setEmptyRecords] = useState(true);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    setToken(token);
    // }

    if (!token) {
      alert("Inicio de sesión expirado, por favor inicie sesión antes");
      router.push("/LogIn");
    }

    getMedRecords(token, patientId);
  }, []);

  const getMedRecords = async (token, patientId) => {
    try {
      const response = await getRecordsData({
        patientId: patientId,
        token: token,
        templateId: 1,
      });

      if (response.status === 201) {
        const dataJSON = await response.json();
        setUserData(dataJSON.data[1]);
        setEmptyRecords(false);
        setSkipMedRecords(true);
      }
    } catch (error) {
      setEmptyRecords(true);
    }
  };

  const steps = ["Patológicos", "No Patológicos"];

  const modalProps = {
    title: "Antecendetes Médicos del paciente",
    description:
      "El paciente ya cuenta con Antecedentes Médicos ¿Desea pasar directamente a la Historia Clínica?",
    buttonLeft: "Editar Antecedentes",
    buttonRight: "Avanzar",
  };

  const submitData = async () => {
    setFinalData(userData);

    try {
      if (!emptyRecords) {
        await updateRecordsData({
          data: userData,
          // templateId: 1,
          patientId: patientId,
          token: token,
        });
      } else {
        await postRecordsData({
          data: userData,
          templateId: 1,
          patientId: patientId,
          token: token,
        });
      }
      setUserData("");
      setFinalData("");

      setModal(!modal);
      setConfirmation(!confirmation);
    } catch (error) {}
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleSkipRecords = () => {
    setSkipMedRecords(!skipMedRecords);
  };

  const onSkipRecords = () => {
    setSkipMedRecords(!skipMedRecords);
    router.push({
      pathname: "/ClinicalHistories/[patient_id]",
      query: { patient_id: patientId, appointment: appointmentId },
    });
  };

  const toggleConfirmation = () => {
    if (appointmentId === undefined) {
      router.push({
        pathname: "/PatientDetails/[patient_id]",
        query: { patient_id: patientId },
      });
    } else {
      if (clinicalStart) {
        setClinicalStart(!clinicalStart);
        router.push({
          pathname: "/ClinicalHistories/[patient_id]",
          query: { patient_id: patientId, appointment: appointmentId },
        });
      } else {
        setConfirmation(!confirmation);
        setClinicalStart(!clinicalStart);
      }
    }
  };

  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <section className="bg-background">
            <Pathological />
          </section>
        );

      case 2:
        return (
          <section className="bg-background">
            <NonPathological />
          </section>
        );
    }
  };

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarSpe pageName={"Consulta"} />

      <section
        className={clsx(
          "pt-[88px] pb-16 min-[980px]:pt-[130px] px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto"
        )}
      >
        <div
          className={clsx(
            "w-full drop-shadow-md px-[14px] py-9 min-[980px]:px-16",
            "bg-white rounded-[20px]"
          )}
        >
          <multiStepContext.Provider
            value={{
              currentStep,
              setCurrentStep,
              userData,
              setUserData,
              finalData,
              setFinalData,
              submitData,
              modal,
              toggleModal,
              confirmation,
              toggleConfirmation,
              clinicalStart,
              toggleSkipRecords,
              onSkipRecords,
            }}
          >
            <div className={clsx("flex justify-center pt-5 pb-10")}>
              <Stepper
                style={{ width: "100%" }}
                alternativeLabel
                activeStep={currentStep - 1}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            {renderPage(currentStep)}
            {skipMedRecords && <SkipRecordsModal props={modalProps} />}
          </multiStepContext.Provider>
        </div>
      </section>
    </main>
  );
}
