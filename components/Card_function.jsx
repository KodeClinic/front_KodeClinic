import { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";

const functionalities = [
  {
    icon: "assets/icons/medical_exp.svg",
    title: "Expediente Medico",
    description:
      "Digitaliza el Expediente Medico de tus pacientes y accede a él en cualquier momento",
  },
  {
    icon: "assets/icons/calendar.svg",
    title: "Agenda",
    description:
      "Genera y visualiza tus citas, así como tus pacientes sin peder ningún detalle",
  },
  {
    icon: "assets/icons/medkit.svg",
    title: "Tratamiento",
    description:
      "Comparte los tratamientos con tus pacientes que podrán visualizar desde su perfil",
  },
  {
    icon: "assets/icons/graph.svg",
    title: "Seguimiento",
    description:
      "Documenta el avance de tus pacientes creando historiales clínicos de cada consulta",
  },
  {
    icon: "assets/icons/directory.svg",
    title: "Directorio",
    description:
      "Accede a la información de contacto de tus pacientes de una manera rápida",
  },
  {
    icon: "assets/icons/profile.svg",
    title: "Perfil",
    description:
      "Actualiza tu perfil con tus últimos logros para que tus pacientes puedan visualizarlos",
  },
  {
    icon: "assets/icons/wallet.svg",
    title: "Pagos",
    description:
      "Tus pacientes podrán pagar sus consultas de manera digital a través de la plataforma",
  },
  {
    icon: "assets/icons/finance.svg",
    title: "Finanzas",
    description:
      "Lleva un control de tus ingresos día con día y visualizalos de una manera sencilla ",
  },
];

export default function Card_function() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(functionalities[0]);

  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition
      ? selectedIndex - 1
      : functionalities.length - 1;
    setSelectedCard(functionalities[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < functionalities.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedCard(functionalities[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="flex flex-row gap-9 items-center">
      <button
        onClick={previous}
        className={clsx(
          "bg-[#0745CB] text-white font-medium text-3xl w-14 h-14 rounded-full"
        )}
      >
        {"<"}
      </button>
      <main className="flex gap-3 justify-center items-center mt-5">
        <article
          className={clsx(
            "bg-white rounded-3xl shadow-2xl p-2 flex flex-col justify-center items-center",
            "w-[159px] h-[223px]",
            "md:w-[240px] h-[260px]",
            "lg:w-[290px] h-[250px]"
          )}
        >
          <img className="w-12 h-12" src={selectedCard.icon} alt="MDN" />
          <h1 className="font-bold text-[14px] mt-2">{selectedCard.title}</h1>
          <p className="text-blue_gray-600 text-[14px] mt-3">
            {selectedCard.description}
          </p>
        </article>
      </main>
      <button
        onClick={next}
        className={clsx(
          "bg-[#0745CB] text-white font-medium text-3xl w-14 h-14 rounded-full"
        )}
      >
        {">"}
      </button>
    </div>
  );
}
