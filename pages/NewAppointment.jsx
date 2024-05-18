import clsx from "clsx";
import { useState } from "react";
import SuccessModal from "@/components/SuccessModal";
import { PaymentModal } from "@/components/Payment_Modal";
import TwoButtonsModal from "@/components/TwoButtons_Modal.jsx";
import NewPatientModal from "@/components/NewPatient_Modal";
import AppointmentNewPatient from "@/components/NewAppointment/newPatient";
import AppointmentExistingPatient from "@/components/NewAppointment/existingPatient";
import AppointmentExistingPatient2 from "@/components/NewAppointment/existingPatient2";
import NavBarSpe from "@/components/NavBarSpe";

export default function NewAppointment() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <AppointmentNewPatient />;

      case 2:
        return <AppointmentExistingPatient2 />;
      // <AppointmentExistingPatient />;
    }
  };

  return (
    <>
      <NavBarSpe pageName={"Agenda"} />

      <main className={clsx("bg-background", "w-full", "p-10 pt-[128px]")}>
        <div
          className={clsx(
            "min-[980px]:max-w-[1128px]",
            "mx-auto",
            " bg-white",
            "rounded-[20px]",
            "shadow-lg",
            // "overflow-hidden",
            "md:max-w-3xl"
          )}
        >
          <div className={clsx("flex", "justify-center")}>
            <div className="md:flex justify-between px-16 py-12">
              <div
                className={clsx(
                  "min-[360px]:flex-col",
                  "justify-center",
                  "tracking-wide",
                  "text-xl",
                  "md:text-3xl",
                  "flex",
                  "space-x-2",
                  "space-y-4"
                )}
              >
                <span
                  className={clsx(
                    "text-green_title",
                    "text-center font-semibold text-xl min-[980px]:text-[30px]"
                  )}
                >
                  Registro de Nueva Cita
                </span>

                <div
                  className={clsx(
                    "flex",
                    "justify-start",
                    "text-base font-semibold md:text-lg",
                    "pt-2"
                  )}
                >
                  <button
                    onClick={() => {
                      setCurrentPage(1);
                    }}
                    data-tab-target="#tab1"
                    className={clsx(
                      " border-b-2 border-[white]",
                      currentPage == 1
                        ? "text-blue_button border-blue_button"
                        : "text-blue_gray-400 hover:text-blue_button hover:border-blue_button"
                    )}
                  >
                    Nuevo Paciente
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage(2);
                    }}
                    data-tab-target="#tab2"
                    className={clsx(
                      "p-4",
                      " border-b-2 border-[white]",
                      currentPage == 2
                        ? "text-blue_button border-blue_button"
                        : "text-blue_gray-400 hover:text-blue_button hover:border-blue_button"
                    )}
                  >
                    Paciente Existente
                  </button>
                </div>
                {renderPage(currentPage)}

                {/* <AppointmentNewPatient /> */}

                {/* Tab 2 Paciente Existente */}
                {/* <div id="tab2" className={clsx("tab-content", "hidden")}>
                  <div className={clsx("", "md:flex", "md:space-x-4")}></div>
                  <div className={clsx("")}>
                    <div className={clsx("ml-2", "text-base", "md:text-lg")}>
                      <p> Buscar Paciente</p>

                      <form class="flex items-center max-w-lg mx-auto shadow appearance-none border-2 border-primary_main rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <div class="relative w-full">
                          <input
                            type="search"
                            id="search-patient"
                            class="m-2"
                            placeholder="Nombre del Paciente"
                            required
                          />
                        </div>
                        <div>
                          <button type="submit">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24.5 26.25L16.625 18.375C16 18.875 15.2812 19.2708 14.4688 19.5625C13.6562 19.8542 12.7917 20 11.875 20C9.60417 20 7.68229 19.2135 6.10938 17.6406C4.53646 16.0677 3.75 14.1458 3.75 11.875C3.75 9.60417 4.53646 7.68229 6.10938 6.10938C7.68229 4.53646 9.60417 3.75 11.875 3.75C14.1458 3.75 16.0677 4.53646 17.6406 6.10938C19.2135 7.68229 20 9.60417 20 11.875C20 12.7917 19.8542 13.6562 19.5625 14.4688C19.2708 15.2812 18.875 16 18.375 16.625L26.25 24.5L24.5 26.25ZM11.875 17.5C13.4375 17.5 14.7656 16.9531 15.8594 15.8594C16.9531 14.7656 17.5 13.4375 17.5 11.875C17.5 10.3125 16.9531 8.98438 15.8594 7.89062C14.7656 6.79688 13.4375 6.25 11.875 6.25C10.3125 6.25 8.98438 6.79688 7.89062 7.89062C6.79688 8.98438 6.25 10.3125 6.25 11.875C6.25 13.4375 6.79688 14.7656 7.89062 15.8594C8.98438 16.9531 10.3125 17.5 11.875 17.5Z"
                                fill="#2196F3"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className={clsx("pt-2", "")}>
                    <div className={clsx("ml-2", "text-base", "md:text-lg")}>
                      <p> Fecha para Agendar</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="appointmentDate"
                        type="Date"
                        placeholder="Número de Teléfono"
                      />
                    </div>
                  </div>
                  <div className={clsx("pt-2", "")}>
                    <div
                      className={clsx("ml-2", "text-base", "md:text-lg", "")}
                    >
                      <p> Horario</p>
                      <div className="flex">
                        <input
                          className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="horaInicio"
                          type="Time"
                          placeholder="Apellido(s)"
                        />
                        <p className="p-2">a</p>
                        <input
                          className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="horaFinal"
                          type="Time"
                          placeholder="Apellido(s)"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={clsx("pt-2")}>
                    <div className={clsx("ml-2", "text-base", "md:text-lg")}>
                      <p> Tipo de Cita</p>
                      <div class="relative mt-2">
                        <button
                          type="button"
                          className="relative w-full cursor-default rounded bg-white px-3 pr-10 text-left text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 border-2 border-primary_main  py-2 text-gray-700 leading-tight  focus:shadow-outline"
                          aria-haspopup="listbox"
                          aria-expanded="true"
                          aria-labelledby="listbox-label"
                        >
                          <span className="flex items-center">
                            <span className="ml-3 block truncate">Terapia</span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <svg
                              classNme="h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={clsx("pt-2")}>
                    <div className={clsx("ml-2", "text-base", "md:text-lg")}>
                      <p> Domicilio de Consulta</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="domicilioDeConsulta"
                        type="Text"
                        placeholder="Domicilio de Consulta"
                      />
                    </div>
                  </div>
                </div> */}

                {/* <AppointmentExistingPatient /> */}
              </div>
            </div>

            <div
              className={clsx(
                "hidden",
                "min-[1230px]:flex min-[980px]:w-[360px]",
                "flex-col",
                "justify-center",
                "place-items-center",
                "space-y-5",
                "bg-[#E5EDFF]",
                "rounded-r-[20px]",
                "p-5"
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
        </div>
        {/* <SuccessModal
          text="Cita guardada con éxito"
          button="Confirmar"
        ></SuccessModal> */}
        {/* <PaymentModal></PaymentModal> */}
        {/* <TwoButtonsModal
          title="Cerrar Sesión"
          button1="Cancelar"
          button2="Confirmar"
        ></TwoButtonsModal> */}
        {/* <NewPatientModal></NewPatientModal> */}
      </main>
    </>
  );
}
