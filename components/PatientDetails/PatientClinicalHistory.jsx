import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { getClinicalHistory } from "@/services/clinicalHistories";
import AccordionFormSection from "../AccordeonFormSection";
import Input from "../Input";

export default function PatientClinicalHistory() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const specialistId = router.query.id;

  const [clinicalData, setClinicalData] = useState({});
  const [emptyClinicalHistory, setEmptyClinicalHistory] = useState(false);

  const [sectionName1, setSectionName1] = useState("");
  const [sectionForm1, setSectionForm1] = useState({});

  const [sectionName2, setSectionName2] = useState("");
  const [inputList2, setInputList2] = useState([]);

  const [sectionName3, setSectionName3] = useState("");
  const [inputList3, setInputList3] = useState([]);

  const {
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
  } = useContext(multiStepContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    getClinicalData(token, patientId);
  }, []);

  const getClinicalData = async (token, patientId) => {
    try {
      const response = await getClinicalHistory({
        patientId: patientId,
        appointmentId: appointmentId,
        token: token,
      });
      const dataJSON = await response.json();
      setClinicalData(dataJSON.data[0]);
      setUserData(dataJSON.data[1]);
      console.log("historia clinica", dataJSON.data[0]);

      setSectionName1(dataJSON.data[0].screens[0].title);
      setSectionName2(dataJSON.data[0].screens[1].title);
      setSectionName3(dataJSON.data[0].screens[2].title);

      setSectionForm1(dataJSON.data[0].screens[0]);
      setInputList2(dataJSON.data[0].screens[1].inputList);
      setInputList3(dataJSON.data[0].screens[2].inputList);
    } catch (error) {
      setEmptyClinicalHistory(true);
      // alert(
      //   "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      // );
    }
  };

  return (
    <>
      {emptyClinicalHistory ? (
        <section>
          <div className={clsx("flex flex-col items-center")}>
            <h1 className="pb-[14px] text-center text-xl font-semibold text-green_title sm:text-3xl sm:pb-11">
              Paciente sin Historia Clínica
            </h1>
            <p className={clsx(" text-lg pb-[14px] sm:pb-11")}>
              ¿Deseas generar la Historia Clínica del paciente?
            </p>
            <div
              className={clsx(
                "flex flex-col-reverse flexjustify-between pt-10 "
              )}
            >
              <button
                onClick={() => {
                  setCurrentPage(1);
                }}
                className={clsx(
                  "bg-blue_gray-50 font-semibold rounded-md text-blue_gray-500 py-2 px-3 text-lg mt-5"
                )}
              >
                Regresar
              </button>
              <button
                onClick={() => {
                  router.push({
                    pathname: "/ClinicalHistories/[patient_id]",
                    query: {
                      patient_id: patientId,
                      appointment: appointmentId,
                    },
                  });
                }}
                className={clsx(
                  "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg max-w-[300px] "
                )}
              >
                Generar Historia Clínica
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div>
            <h1 className="pb-[14px] text-center text-xl font-semibold text-green_title sm:text-3xl sm:pb-11">
              {clinicalData.name}
            </h1>
            <p
              className={clsx(
                " pb-6 text-center text-base font-medium sm:text-xl sm:font-semibold sm:text-start sm:pb-11"
              )}
            >
              {sectionForm1.title}
            </p>
            <div className={clsx("grid grid-cols-1 place-items-center gap-5")}>
              {sectionForm1?.sections?.map((props) => {
                return (
                  <AccordionFormSection
                    key={props._id}
                    props={props.inputList}
                    sectionName={props.name}
                  />
                );
              })}
            </div>
          </div>

          <div className={clsx("pt-14")}>
            <p
              className={clsx(
                " pb-6 text-center text-base font-medium sm:text-xl sm:font-semibold sm:text-start sm:pb-11"
              )}
            >
              {sectionName2}
            </p>

            <div
              className={clsx(
                "grid grid-cols-1 place-items-center sm:grid-cols-2 min-[980px]:grid-cols-3 gap-5"
              )}
            >
              {inputList2.map((props) => {
                return <Input key={props._id} props={props} />;
              })}
            </div>
          </div>

          <div className={clsx("pt-14")}>
            <p
              className={clsx(
                " pb-6 text-center text-base font-medium sm:text-xl sm:font-semibold sm:text-start sm:pb-11"
              )}
            >
              {sectionName3}
            </p>

            <div
              className={clsx(
                "grid grid-cols-1 place-items-center sm:grid-cols-2 min-[980px]:grid-cols-3 gap-5"
              )}
            >
              {inputList3.map((props) => {
                return <Input key={props._id} props={props} />;
              })}
            </div>
          </div>

          {isDisable ? (
            <div className={clsx("flex justify-between pt-10")}>
              <button
                onClick={() => {
                  setCurrentPage(1);
                }}
                className={clsx(
                  "bg-blue_gray-50 font-semibold rounded-md text-blue_gray-500 py-2 px-3 text-lg"
                )}
              >
                Regresar
              </button>
              <button
                onClick={handleDisable}
                className={clsx(
                  "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
                )}
              >
                Editar
              </button>
            </div>
          ) : (
            <div className={clsx("flex justify-between pt-10")}>
              <button
                onClick={handleDisable}
                className={clsx(
                  "bg-blue_gray-50 font-semibold rounded-md text-blue_gray-500 py-2 px-3 text-lg"
                )}
              >
                Cancelar
              </button>
              <button
                onClick={toggleModal}
                className={clsx(
                  "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
                )}
              >
                Actualizar
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}
