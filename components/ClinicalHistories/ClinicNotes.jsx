import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Input from "@/components/Input";
import clsx from "clsx";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import { getbyTemplateId } from "@/services/templates";

export default function ClinicNotes() {
  const router = useRouter();

  const { setCurrentStep } = useContext(multiStepContext);

  const [formDataTemplate, setFormDataTemplate] = useState({});
  const [sectionName, setSectionName] = useState("");
  const [inputList, setInputList] = useState([]);

  const getTemplateData = async (token) => {
    const credetials = { id: "2", token: token };
    try {
      const response = await getbyTemplateId(credetials);
      const dataJSON = await response.json();
      //   setFormDataTemplate(dataJSON.data.screens[0].sections[0].inputList);
      setFormDataTemplate(dataJSON.data);
      setInputList(dataJSON.data.screens[2].inputList);
      setSectionName(dataJSON.data.screens[2].title);
      //   console.log(dataJSON.data);
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
          onClick={() => {
            setCurrentStep(3);
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