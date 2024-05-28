import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/router";

import NavBarSpe from "@/components/NavBarSpe";
import Evaluation from "@/components/ClinicalHistories/Evaluation";
import Treatment from "@/components/ClinicalHistories/Treatment";
import ClinicNotes from "@/components/ClinicalHistories/ClinicNotes";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { updateClinicalHistory } from "@/services/clinicalHistories";
import { completeClinicalHistory } from "@/services/clinicalHistories";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function ClinicalHistories() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const appointmentId = router.query.appointment;

  //Estados
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const steps = ["Evaluación", "Tratamiento", "Notas Clínicas"];

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleConfirmation = () => {
    router.push({
      pathname: "/DashboardSpe",
    });

    // if (clinicalStart) {
    //   setClinicalStart(!clinicalStart);
    //   router.push({
    //     pathname: "/ClinicalHistories/[patient_id]",
    //     query: { patient_id: patientId },
    //   });
    // } else {
    //   setConfirmation(!confirmation);
    //   setClinicalStart(!clinicalStart);
    // }
  };

  const submitData = async () => {
    const token = localStorage.getItem("token");
    try {
      console.log("Final Data, Clinical Histories", userData);
      const response = await updateClinicalHistory({
        data: userData,
        templateId: 2,
        patientId: patientId,
        appointmentId: appointmentId,
        token: token,
      });
      console.log(response);
      const dataJSON = await response.json();
      setUserData("");

      setModal(!modal);
      setConfirmation(!confirmation);
    } catch (error) {
      alert(
        "A ocurrido un error al crear la Historia Clínica, por favor intentalo de nuevo2"
      );
      router.push({
        pathname: "/ClinicalHistory/[patient_id]",
        query: { patient_id: patientId },
      });
    }
  };

  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <section className="bg-background">
            <Evaluation />
          </section>
        );

      case 2:
        return (
          <section className="bg-background">
            <Treatment />
          </section>
        );
      case 3:
        return (
          <section className="bg-background">
            <ClinicNotes />
          </section>
        );
    }
  };

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarSpe pageName={"Consulta"} />;
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
              submitData,
              modal,
              toggleModal,
              confirmation,
              toggleConfirmation,
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
          </multiStepContext.Provider>
        </div>
      </section>
    </main>
  );
}
