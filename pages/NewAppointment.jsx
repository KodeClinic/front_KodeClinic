import clsx from "clsx";
import { useState } from "react";
import SuccessModal from "@/components/SuccessModal";
import NavBar from "@/components/NavBar";

export default function NewAppointment() {
  const [showNewPatient, setShowNewPatient] = useState(true);
  const [showPatient, setShowPatient] = useState(false);

  const showFirstContent = () => {
    setShowNewPatient(true);
    setShowPatient(false);
  };

  const showSecondContent = () => {
    setShowNewPatient(false);
    setShowPatient(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <NavBar />

      <main className={clsx("bg-background", "w-full", "p-10", "pt-28")}>
        <div
          className={clsx(
            "max-w-md",
            "mx-auto",
            " bg-white",
            "rounded-xl",
            "shadow-lg",
            "overflow-hidden",
            "md:max-w-3xl"
          )}
        >
          <div className={clsx("m-5", "flex", "justify-between")}>
            <div class="md:flex justify-between">
              <div className={clsx("")}>
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
                  <span className={clsx("text-green_title", "text-center")}>
                    Registro de Nueva Cita
                  </span>

                  <div
                    className={clsx(
                      "flex",
                      "justify-start",
                      "text-base",
                      "pt-2",
                      "space-x-3"
                    )}
                  >
                    <button
                      onClick={showFirstContent}
                      className={`${
                        showNewPatient
                          ? "text-blue_button border-b-2 p-2 "
                          : "text-blue_gray-400 p-2"
                      }`}
                    >
                      Nuevo Paciente
                    </button>
                    <button
                      onClick={showSecondContent}
                      className={`${
                        showPatient
                          ? "text-blue_button border-b-2 p-2 "
                          : "text-blue_gray-400 p-2"
                      }`}
                    >
                      Paciente Existente
                    </button>
                  </div>
                  {showNewPatient && (
                    <div id="tab1" className="">
                      <div className={clsx("", "md:flex", "md:space-x-4")}>
                        <div className={clsx("text-base", "md:text-lg")}>
                          <p> Nombre(s)</p>
                          <input
                            className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Nombre"
                            type="text"
                            placeholder="Nombre(s)"
                          />
                        </div>

                        <div
                          className={clsx(
                            "pt-2",
                            "md:pt-0",
                            "text-base",
                            "md:text-lg"
                          )}
                        >
                          <p> Apellido(s)</p>
                          <input
                            className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Apellidos"
                            type="text"
                            placeholder="Apellido(s)"
                          />
                        </div>
                      </div>
                      <div className={clsx("pt-2")}>
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
                          <p> Número de Teléfono</p>
                          <input
                            className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Número de telefono"
                            type="Number"
                            placeholder="Número de Teléfono"
                          />
                        </div>
                      </div>
                      <div className={clsx("pt-2", "")}>
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
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
                          className={clsx(
                            "ml-2",
                            "text-base",
                            "md:text-lg",
                            ""
                          )}
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
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
                          <p> Tipo de Cita</p>
                          <select className="shadow border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                            <option value="Terapia">Terapia</option>
                            <option value="Valoracion">Valoración</option>
                          </select>
                        </div>
                      </div>
                      <div className={clsx("pt-2")}>
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
                          <p> Domicilio de Consulta</p>
                          <input
                            className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="domicilioDeConsulta"
                            type="Text"
                            placeholder="Domicilio de Consulta"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {showPatient && (
                    <div id="tab2" className="">
                      <div
                        className={clsx("", "md:flex", "md:space-x-4")}
                      ></div>
                      <div className={clsx("")}>
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
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
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
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
                          className={clsx(
                            "ml-2",
                            "text-base",
                            "md:text-lg",
                            ""
                          )}
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
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
                          <p> Tipo de Cita</p>
                          <select className="shadow border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                            <option value="Terapia">Terapia</option>
                            <option value="Valoracion">Valoración</option>
                          </select>
                        </div>
                      </div>
                      <div className={clsx("pt-2")}>
                        <div
                          className={clsx("ml-2", "text-base", "md:text-lg")}
                        >
                          <p> Domicilio de Consulta</p>
                          <input
                            className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="domicilioDeConsulta"
                            type="Text"
                            placeholder="Domicilio de Consulta"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "hidden",
                "md:flex",
                "flex-col",
                "justify-center",
                "place-items-center",
                "space-y-5",
                "bg-white",
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
          <div className="grid place-items-center m-12">
            <button
              onClick={openModal}
              className={clsx(
                "border",
                " border-2",
                "rounded-md",
                "p-2",
                "text-white",
                "bg-green_button",
                "text-sm",
                "md:text-lg"
              )}
            >
              Agendar Cita
            </button>
          </div>
        </div>
        <SuccessModal
          text="Cita guardada con éxito"
          button="Confirmar"
          isOpen={isModalOpen}
          onClose={closeModal}
        ></SuccessModal>
      </main>
    </>
  );
}
