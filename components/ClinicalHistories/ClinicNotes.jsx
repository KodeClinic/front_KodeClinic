import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Input from "@/components/Input";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { getbyTemplateId } from "@/services/templates";
import TwoButtonsModal from "../TwoButtons_Modal.jsx";
import ConfirmationModal from "../MedicalRecords/ConfirmationModal.jsx";

export default function ClinicNotes() {
  const router = useRouter();
  const [formDataTemplate, setFormDataTemplate] = useState({});
  const [sectionName, setSectionName] = useState("");
  const [inputList, setInputList] = useState([]);
  const [token, setToken] = useState(null);

  const { setCurrentStep, modal, toggleModal, confirmation } =
    useContext(multiStepContext);

  const modalProps = {
    title: "Historia Clínica del paciente",
    description: "¿Está seguro que desea finalizar la Historia Clínica?",
    buttonLeft: "Cancelar",
    buttonRight: "Finalizar",
  };

  const confirmationProps = {
    text: "Historia Clínica guardada con éxito",
    button: "Entendido",
    successIcon: true,
  };

  const getTemplateData = async (token) => {
    const credetials = { id: "2", token: token };
    try {
      const response = await getbyTemplateId(credetials);
      const dataJSON = await response.json();
      setFormDataTemplate(dataJSON.data);
      setInputList(dataJSON.data.screens[2].inputList);
      setSectionName(dataJSON.data.screens[2].title);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      // router.push("/LogIn");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setToken(token);
    }

    if (!token) {
      alert("Inicio de sesión expirado, por favor inicie sesión antes");
      router.push("/LogIn");
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
      <div className={clsx("flex justify-between pt-10")}>
        <button
          onClick={() => {
            setCurrentStep(2);
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
      </div>
    </div>
  );
}
