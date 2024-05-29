import clsx from "clsx";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import PersonalInformation from "@/components/WelcomePage/PersonalInformation";
import ContactInformation from "@/components/WelcomePage/ContactInformation";
import ProfesionalInformation from "@/components/WelcomePage/ProfesionalInformation";
import Confirmation from "@/components/WelcomePage/Confirmation";
import { WelcomePageContext } from "@/context/WelcomePageContext";
import { completeInformation } from "@/services/specialists";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function WelcomePage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [specialistId, setId] = useState(null);

  //Estados para el Context
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const specialistId = localStorage.getItem("id");
      setToken(token);
      setId(specialistId);
    }

    if (!token) {
      alert("Inicio de sesión expirado, por favor inicie sesión antes");
      router.push("/LogIn");
    }
  }, []);

  const submitData = () => {
    setFinalData(userData);
    completeInformation({
      data: userData,
      specialistId: specialistId,
      token: token,
    });
    setUserData("");
    setCurrentStep(4);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const renderCard = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <ContactInformation />;
      case 3:
        return <ProfesionalInformation />;
      case 4:
        return <Confirmation />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={clsx(
          "mt-6 mb-6",
          "max-w-md",
          "mx-auto",
          " bg-white",
          "rounded-xl",
          "shadow-lg",
          "overflow-hidden",
          "md:max-w-[1068px]",
          "flex-col",
          "justify-center"
        )}
      >
        <WelcomePageContext.Provider
          value={{
            currentStep,
            setCurrentStep,
            userData,
            setUserData,
            finalData,
            setFinalData,
            submitData,
            toggleModal,
            modal,
          }}
        >
          <div className="md:flex md:justify-between ">
            <div className={clsx("w-full flex justify-center")}>
              <div className="w-full md:flex md:flex-col md:justify-center">
                {renderCard(currentStep)}
                <div className={clsx("pt-4 pb-8")}>
                  <Stepper
                    style={{ width: "100%" }}
                    alternativeLabel
                    activeStep={currentStep - 1}
                  >
                    <Step>
                      <StepLabel></StepLabel>
                    </Step>
                    <Step>
                      <StepLabel></StepLabel>
                    </Step>
                    <Step>
                      <StepLabel></StepLabel>
                    </Step>
                  </Stepper>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "hidden",
                "md:flex",
                "flex-col",
                "justify-center",
                "place-items-center",
                "space-y-5",
                "bg-background",
                "p-5",
                "min-w-[360px]"
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
        </WelcomePageContext.Provider>
      </div>
    </>
  );
}
