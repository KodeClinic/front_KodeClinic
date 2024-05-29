import { useState, useEffect, useContext } from "react";
import AccordionFormSection from "../AccordeonFormSection";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { getbyTemplateId } from "@/services/templates";
import TwoButtonsModal from "../TwoButtons_Modal.jsx";
import ConfirmationModal from "./ConfirmationModal";

export default function NonPathological() {
  const { setCurrentStep, modal, toggleModal, confirmation, clinicalStart } =
    useContext(multiStepContext);
  const [formDataTemplate, setFormDataTemplate] = useState({});
  const [sectionForm, setSectionForm] = useState({});
  const [token, setToken] = useState(null);

  const modalProps = {
    title: "Antecendetes Médicos del paciente",
    description: "¿Está seguro que desea finalizar los Antecendentes Médicos?",
    buttonLeft: "Cancelar",
    buttonRight: "Finalizar",
  };

  const confirmationProps = {
    text: "Antecedentes Médicos guardados con éxito",
    button: "Entendido",
    successIcon: true,
  };

  const clinicalStartProps = {
    text: "A continuación comenzaremos con la Historia Clínica del Paciente",
    button: "Comenzar",
    successIcon: false,
  };

  const getTemplateData = async (token) => {
    const credetials = { id: "1", token: token };
    try {
      const response = await getbyTemplateId(credetials);
      const dataJSON = await response.json();
      setFormDataTemplate(dataJSON.data);
      setSectionForm(dataJSON.data.screens[1]);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setToken(token);
    }

    if (!token) {
      alert("Usuario no autorizado, por favor inicie sesión antes");
    }
    getTemplateData(token);
  }, []);

  return (
    <div className={clsx("bg-white")}>
      <h1 className="pb-[14px] text-center text-xl font-semibold text-green_title sm:text-3xl sm:pb-11">
        {formDataTemplate.name}
      </h1>
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
      <div className={clsx("flex justify-between pt-10")}>
        <button
          onClick={() => {
            setCurrentStep(1);
          }}
          className={clsx(
            "bg-blue_gray-50 font-semibold rounded-md text-blue_gray-700 py-2 px-3 text-lg"
          )}
        >
          Atrás
        </button>

        <button
          onClick={toggleModal}
          className={clsx(
            "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
          )}
        >
          Finalizar
        </button>
        {modal && <TwoButtonsModal props={modalProps} />}
        {confirmation && <ConfirmationModal props={confirmationProps} />}
        {/* se debe cambiar por opcional para cuando se accede por patientDetails a generar antecedentes */}
        {clinicalStart && <ConfirmationModal props={clinicalStartProps} />}
      </div>
    </div>
  );
}
