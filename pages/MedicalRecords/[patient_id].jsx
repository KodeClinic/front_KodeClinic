import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import NavBarSpe from "@/components/NavBarSpe";
import Pathological from "@/components/MedicalRecords/Pathological";
import NonPathological from "@/components/MedicalRecords/NonPathological";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { postRecordsData } from "@/services/medicalRecords";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function MedicalRecords() {
  const router = useRouter();
  const patientId = router.query.patient_id;

  //Estados para el Context
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]); //corroborar si es un array o un objeto
  const [finalData, setFinalData] = useState([]); //corroborar si es un array o un objeto
  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [clinicalStart, setClinicalStart] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Inicio de sesión expirado, por favor inicie sesión antes");
      router.push("/LogIn");
    }
  }, []);

  // const steps = ["Patológicos", "No Patológicos", "Heredo Familiares"];
  const steps = ["Patológicos", "No Patológicos"];

  const submitData = () => {
    const token = localStorage.getItem("token");
    setFinalData(userData);
    console.log(finalData);
    postRecordsData({
      data: userData,
      templateId: 1,
      patientId: patientId,
      token: token,
    });
    setUserData("");
    setFinalData("");

    setModal(!modal);
    setConfirmation(!confirmation);
    console.log("confirmation modal:", confirmation);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleConfirmation = () => {
    if (clinicalStart) {
      setClinicalStart(!clinicalStart);
      router.push({
        pathname: "/ClinicalHistories/[patient_id]",
        query: { patient_id: patientId },
      });
    } else {
      setConfirmation(!confirmation);
      setClinicalStart(!clinicalStart);
    }
  };

  //   console.log(userData);
  // console.log("Data final: ", finalData);

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
      // case 3:
      //   return (
      //     <section className="bg-background">
      //       <Emergency_info />
      //     </section>
      //   );
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
