import { useState, useEffect } from "react";
import Input from "@/components/Input";
import clsx from "clsx";
import { getbyTemplateId } from "@/services/templates";

const formData = [
  {
    label: "Alergias",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    isMulti: false,
    optionSelect: [],
  },
  {
    label: "Hipertensión",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    isMulti: false,
    optionSelect: [],
  },
  {
    label: "Cancer",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    isMulti: false,
    optionSelect: [],
  },
  {
    label: "Sobrepeso",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    isMulti: false,
    optionSelect: [],
  },
  {
    label: "Diabetes",
    inputType: "checkbox",
    placeholder: "",
    isCheckbox: true,
    isSelect: false,
    isMulti: false,
    optionSelect: [],
  },
  {
    label: "Hernias",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Umbilical", label: "Umbilical" },
      { value: "Epigastrica", label: "Epigastrica" },
      { value: "Inguinal", label: "Inguinal" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "Esguinces",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Cervical", label: "Cervical" },
      { value: "Rodilla", label: "Rodilla" },
      { value: "Tobillo", label: "Tobillo" },
      { value: "Otro", label: "Otro" },
      { value: "Ninguno", label: "Ninguno" },
    ],
  },
  {
    label: "Luxaciónes",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Hombro", label: "Hombro" },
      { value: "Codo", label: "Codo" },
      { value: "Fémur", label: "Fémur" },
      { value: "Rodilla", label: "Rodilla" },
      { value: "Tobillo", label: "Tobillo" },
      { value: "Muñeca", label: "Muñeca" },
      { value: "Tibia", label: "Tibia" },
      { value: "Peroné", label: "Peroné" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "Fracturas",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Disco", label: "Disco" },
      { value: "Clavícula", label: "Clavícula" },
      { value: "Fémur", label: "Fémur" },
      { value: "Húmero", label: "Húmero" },
      { value: "Radio", label: "Radio" },
      { value: "Cúbito", label: "Cúbito" },
      { value: "Cadera", label: "Cadera" },
      { value: "Muñeca", label: "Muñeca" },
      { value: "Tibia", label: "Tibia" },
      { value: "Peroné", label: "Peroné" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E. Respiratorias",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Asma", label: "Asma" },
      { value: "Disnea", label: "Disnea" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E. Musculáres",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Rupturas", label: "Rupturas" },
      { value: "Distensión", label: "Distensión" },
      { value: "Sarcopenia", label: "Sarcopenia" },
      { value: "Contusión", label: "Contusión" },
      { value: "Contractura", label: "Contractura" },
      { value: "Calambre", label: "Calambre" },
      { value: "DOMS", label: "DOMS" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E. Cardiovasculares",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Arritmias", label: "Arritmias" },
      { value: "Arteriopatía coronaria", label: "Arteriopatía coronaria" },
      { value: "Insuficiencia cardiaca", label: "Insuficiencia cardiaca" },
      { value: "Valvulopatía cardiaca", label: "Valvulopatía cardiaca" },
      {
        value: "Afección cardiaca congénita",
        label: "Afección cardiaca congénita",
      },
      { value: "Miocardiopatía", label: "Miocardiopatía" },
      { value: "Pericarditis", label: "Pericarditis" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },

  {
    label: "E. Neourológicas",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Parkinson", label: "Parkinson" },
      { value: "EVC", label: "EVC" },
      { value: "ELA ", label: "ELA " },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E. Renales",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E. Vasculaes",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Insuf. Venosa", label: "Insuf. Venosa" },
      { value: "Trombosis V.P.", label: "Trombosis V.P." },
      { value: "Telangiectaseas", label: "Telangiectaseas" },
      { value: "Várices", label: "Várices" },
      { value: "Vena varicosa", label: "Vena varicosa" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E. Óseas",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Artritis R.", label: "Artritis R." },
      { value: "Artrosis", label: "Artrosis" },
      { value: "Osteoartrósis", label: "Osteoartrósis" },
      { value: "Osteoporósis", label: "Osteoporósis" },
      { value: "Osteonecrósis", label: "Osteonecrósis" },
      { value: "Osteopenia", label: "Osteopenia" },
      { value: "Osteopenia", label: "Osteopenia" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E. Hepáticas",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
  {
    label: "E.T.S.",
    inputType: "",
    placeholder: "Selecciona todas las que apliquen",
    isCheckbox: false,
    isSelect: true,
    isMulti: true,
    optionSelect: [
      { value: "Sífilis", label: "Sífilis" },
      { value: "Gonorrea", label: "Gonorrea" },
      { value: "Clamidia", label: "Clamidia" },
      { value: "Herpes simple", label: "Herpes simple" },
      { value: "VPH", label: "VPH" },
      { value: "VIH", label: "VIH" },
      { value: "Otra", label: "Otra" },
      { value: "Ninguna", label: "Ninguna" },
    ],
  },
];

export default function formExample() {
  // const dataQuery = router.query;
  const dataQuery = { id: "1" };

  const [formDataTemplate, setFormDataTemplate] = useState([]);

  const onLogin = async (dataQuery, token) => {
    const credetials = { id: dataQuery.id, token: token };
    try {
      const response = await getbyTemplateId(credetials);
      const dataJSON = await response.json();
      setFormDataTemplate(dataJSON.data.screens[0].screenInputs);
      console.log(dataJSON.data);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      // router.push("/LogIn");
    }
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMwNTU1N2JiMjNlODliZjllMzUzY2EiLCJlbWFpbCI6ImdkdXJhbi5yaWNhcmRvQGdtYWlsLmNvbSIsImlhdCI6MTcxNDUyMDAwMSwiZXhwIjoxNzE0NjA2NDAxfQ.EATz3tRjBA7UnHJlHMCttKrchCtf9nFRW8MfOSmW98M";

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
    }
    onLogin(dataQuery, token);
  }, []);

  return (
    <div>
      <p className="py-5">Formulario</p>
      <div
        className={clsx(
          "grid grid-cols-1 place-items-center sm:grid-cols-2 min-[980px]:grid-cols-3 gap-5 px-6"
        )}
      >
        {formDataTemplate.map((props) => {
          return (
            <Input key={`${props?.inputType}-${props?.label}`} props={props} />
          );
        })}
      </div>
    </div>
  );
}
