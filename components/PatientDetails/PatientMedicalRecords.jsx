import clsx from "clsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getRecordsData } from "@/services/medicalRecords";
import Input from "../Input";
import AccordionFormSection from "../AccordeonFormSection";
import TwoButtonsModal from "../TwoButtons_Modal.jsx";
import ConfirmationModal from "../MedicalRecords/ConfirmationModal";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { updateRecordsData } from "@/services/medicalRecords";

export default function PatientMedicalRecords() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const [medRecords, setMedRecords] = useState({});
  const [sectionName, setSectionName] = useState("");
  const [inputList, setInputList] = useState([]);
  const [sectionForm, setSectionForm] = useState({});

  //Context
  const [userData, setUserData] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const modalProps = {
    title: "Antecendetes Médicos del paciente",
    description:
      "¿Está seguro que desea finalizar la actualización de los Antecendentes Médicos?",
    buttonLeft: "Cancelar",
    buttonRight: "Actualizar",
  };

  const confirmationProps = {
    text: "Antecedentes Médicos actualizados con éxito",
    button: "Entendido",
    successIcon: true,
  };

  const handleDisable = () => {
    setIsDisable(!isDisable);
    console.log("userdata", userData);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    getRecords(token, patientId);
  }, []);

  const getRecords = async (token, patientId) => {
    const response = await getRecordsData({
      patientId: patientId,
      token: token,
      templateId: 1,
    });
    const dataJSON = await response.json();
    setMedRecords(dataJSON.data[0]);
    setSectionForm(dataJSON.data[0].screens[1]);
    // console.log(dataJSON.data[0]);
    setSectionName(dataJSON.data[0].screens[0].title);
    setInputList(dataJSON.data[0].screens[0].inputList);
    setUserData(dataJSON.data[1]);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const submitData = async () => {
    const token = localStorage.getItem("token");
    console.log("data del submit", userData);
    try {
      const responseUpdate = await updateRecordsData({
        data: userData,
        templateId: 1,
        patientId: patientId,
        token: token,
      });
      const dataJSON = await responseUpdate.json();
    } catch (error) {
      alert("Error al actualizar información por favor intentelo de nuevo");
      router.push({
        pathname: "/PatientDetails/[patient_id]",
        query: { patient_id: patientId },
      });
    }
    setIsDisable(!isDisable);
    setUserData("");
    setModal(!modal);
    setConfirmation(!confirmation);
    // console.log("confirmation modal:", confirmation);
  };

  const toggleConfirmation = () => {
    setConfirmation(!confirmation);
    router.push({
      pathname: "/PatientDetails/[patient_id]",
      query: { patient_id: patientId },
    });
  };

  return (
    <>
      <multiStepContext.Provider
        value={{
          userData,
          setUserData,
          modal,
          isDisable,
          submitData,
          toggleModal,
          toggleConfirmation,
        }}
      >
        <div>
          <h1 className="pb-[14px] text-center text-xl font-semibold text-green_title sm:text-3xl sm:pb-11">
            {medRecords.name}
          </h1>
          <p
            className={clsx(
              " pb-6 text-center text-base font-medium sm:text-xl sm:font-semibold sm:text-start sm:pb-11"
            )}
          >
            {sectionName}
          </p>

          <div
            className={clsx(
              "grid grid-cols-1 place-items-center sm:grid-cols-2 min-[980px]:grid-cols-3 gap-5"
            )}
          >
            {inputList.map((props) => {
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
            {sectionForm.title}
          </p>
          <div className={clsx("grid grid-cols-1 place-items-center gap-5")}>
            {sectionForm?.sections?.map((props) => {
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
        {isDisable ? (
          <div className={clsx("flex justify-end pt-10")}>
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
        {modal && <TwoButtonsModal props={modalProps} />}
        {confirmation && <ConfirmationModal props={confirmationProps} />}
      </multiStepContext.Provider>
    </>
  );
}
