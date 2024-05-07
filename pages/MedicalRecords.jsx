import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import clsx from "clsx";

import NavBarSpe from "@/components/NavBarSpe";
import Pathological from "@/components/MedicalRecords/Pathological";
import NonPathological from "@/components/MedicalRecords/NonPathological";
import MedicalRecordStepContext from "@/context/MedicalRecordStepContext";
import { multiStepContext } from "@/context/MedicalRecordStepContext";

export default function MedicalRecords() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  console.log(userData);

  // const { setCurrentStep } = useContext(multiStepContext);
  // const [currentStep, finalData] = useContext(MedicalRecordStepContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Usuario no autorizado, por favor inicie sesión antes");
    }
    // onLogin(token);
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentStep(newPage);
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
      // case 3:
      //   return (
      //     <section className="bg-background">
      //       <Emergency_info />
      //     </section>
      //   );
    }
  };

  const handleInputChange = (id, event) => {};

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
            }}
          >
            {renderPage(currentStep)}
            <div className={clsx("flex justify-center pt-6")}>
              <Pagination
                className={clsx(" sm:left-[500px]")}
                count={2}
                page={currentStep}
                onChange={handlePageChange}
              ></Pagination>
            </div>
          </multiStepContext.Provider>
        </div>
      </section>
    </main>
  );
}
