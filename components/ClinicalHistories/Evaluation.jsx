import { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/router";
// import Input from "@/components/Input";
import AccordionFormSection from "../AccordeonFormSection";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { getbyTemplateId } from "@/services/templates";

export default function Evaluation() {
  const { setCurrentStep } = useContext(multiStepContext);
  const [formDataTemplate, setFormDataTemplate] = useState({});
  const [sectionForm, setSectionForm] = useState({});
  // const [modal, setModal] = useState(false);
  // const [inputList, setInputList] = useState([]);

  const getTemplateData = async (token) => {
    const credetials = { id: "2", token: token };
    try {
      const response = await getbyTemplateId(credetials);
      const dataJSON = await response.json();
      setFormDataTemplate(dataJSON.data);
      setSectionForm(dataJSON.data.screens[0]);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      // router.push("/LogIn");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

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
      <div className={clsx("flex justify-end pt-10")}>
        <button
          onClick={() => {
            setCurrentStep(2);
          }}
          className={clsx(
            "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
          )}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
