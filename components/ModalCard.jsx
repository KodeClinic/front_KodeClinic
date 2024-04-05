import clsx from "clsx";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Availability from "./Availability";

export default function ModalCard() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const renderCard = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <>
            <div
              className={clsx(
                "max-w-md",
                "mx-auto",
                " bg-white",
                "rounded-xl",
                "overflow-hidden",
                "md:max-w-3xl"
              )}
            >
              <div class="md:flex justify-between">
                <div className={clsx("p-8")}>
                  <div
                    className={clsx(
                      "min-[360px]:flex-col",
                      "justify-center",
                      "tracking-wide",
                      "text-xl",
                      "md:text-3xl",
                      "flex ",
                      "justify-items-center",
                      "place-items-center",
                      "justify-center",
                      "space-x-2"
                    )}
                  >
                    <span className={clsx("text-green_title")}>
                      {" "}
                      Bienvenido a
                    </span>
                    <span className={clsx("text-blue_button", "ml-2")}>
                      {" "}
                      KodeClinic
                    </span>
                  </div>
                  <div className={clsx("flex justify-center")}>
                    <span
                      className={clsx(
                        "text-blue_gray-700",
                        "md:text-base",
                        "mt-2",
                        "text-center"
                      )}
                    >
                      Antes de continuar completa tu perfil
                    </span>
                  </div>
                  <div
                    className={clsx(
                      "mt-2",
                      "text-base",
                      "md:text-xl",
                      "flex-col",
                      "space-y-2",
                      "m-2",
                      "p-2",
                      "sm:flex",
                      "gap-5"
                    )}
                  >
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Nombre(s)</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Nombre"
                        type="text"
                        placeholder="Nombre(s)"
                      />
                    </div>

                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Apellido(s)</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Apellido"
                        type="text"
                        placeholder="Apellido(s)"
                      />
                    </div>

                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Fecha de Nacimiento</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Nombre"
                        type="date"
                        placeholder="Fecha de Nacimiento"
                      />
                    </div>

                    <div>
                      <div className={clsx("space-y-2", "ml-2")}>
                        {/* Select */}
                        <label
                          id="listbox-label"
                          class="block md:text-lg leading-6 text-gray-900"
                        >
                          Sexo
                        </label>

                        <div class="relative mt-2">
                          <button
                            type="button"
                            class="relative w-full cursor-default rounded bg-white px-3 pr-10 text-left text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 border-2 border-primary_main rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            aria-haspopup="listbox"
                            aria-expanded="true"
                            aria-labelledby="listbox-label"
                          >
                            <span class="flex items-center">
                              <span class="ml-3 block truncate">Femenino</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <svg
                                class="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>

                          {/* <ul
                            class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            tabindex="-1"
                            role="listbox"
                            aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-option-3"
                          >
                            <li
                              class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                              id="listbox-option-0"
                              role="option"
                            >
                              <div class="flex items-center">
                                <span class="font-normal ml-3 block truncate">
                                  Masculino
                                </span>
                              </div>

                              <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                <svg
                                  class="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </span>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* stepper */}

                  <div
                    className={clsx(
                      "flex",
                      "justify-center",
                      "mt-5",
                      "text-base md:text-xl",
                      "text-blue_gray-700"
                    )}
                  >
                    <p className={clsx("text-center")}>Información Personal</p>
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
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div
              className={clsx(
                "max-w-md",
                "mx-auto",
                " bg-white",
                "rounded-xl",
                "overflow-hidden",
                "md:max-w-3xl"
              )}
            >
              <div class="md:flex justify-between">
                <div className={clsx("p-8")}>
                  <div
                    className={clsx(
                      "min-[360px]:flex-col",
                      "justify-center",
                      "tracking-wide",
                      "text-xl",
                      "md:text-3xl",
                      "flex ",
                      "justify-items-center",
                      "place-items-center",
                      "justify-center",
                      "space-x-2"
                    )}
                  >
                    <span className={clsx("text-green_title")}>
                      {" "}
                      Bienvenido a
                    </span>
                    <span className={clsx("text-blue_button", "ml-2")}>
                      {" "}
                      KodeClinic
                    </span>
                  </div>
                  <div className={clsx("flex justify-center")}>
                    <span
                      className={clsx(
                        "text-blue_gray-700",
                        "md:text-base",
                        "mt-2",
                        "text-center"
                      )}
                    >
                      Antes de continuar completa tu perfil
                    </span>
                  </div>
                  <div
                    className={clsx(
                      "mt-2",
                      "text-base",
                      "md:text-xl",
                      "flex-col",
                      "space-y-2",
                      "m-2",
                      "p-2",
                      "sm:flex",
                      "gap-5"
                    )}
                  >
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Telefono de Contacto</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="telefonoDeContacto"
                        type="text"
                        placeholder="Telefono de contacto"
                      />
                    </div>
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Calle y Número</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="calleYnumero"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Colonia</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="colonia"
                        type="text"
                        placeholder=""
                      />
                    </div>

                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Estado</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="estado"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* stepper */}

                  <div
                    className={clsx(
                      "flex",
                      "justify-center",
                      "mt-5",
                      "text-base md:text-xl",
                      "text-blue_gray-700"
                    )}
                  >
                    <p>Información de Contacto</p>
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
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div
              className={clsx(
                "max-w-md",
                "mx-auto",
                " bg-white",
                "rounded-xl",
                "overflow-hidden",
                "md:max-w-3xl"
              )}
            >
              <div class="md:flex justify-between">
                <div className={clsx("p-8")}>
                  <div
                    className={clsx(
                      "min-[360px]:flex-col",
                      "justify-center",
                      "tracking-wide",
                      "text-xl",
                      "md:text-3xl",
                      "flex ",
                      "justify-items-center",
                      "place-items-center",
                      "justify-center",
                      "space-x-2"
                    )}
                  >
                    <span className={clsx("text-green_title")}>
                      {" "}
                      Bienvenido a
                    </span>
                    <span className={clsx("text-blue_button", "ml-2")}>
                      {" "}
                      KodeClinic
                    </span>
                  </div>
                  <div className={clsx("flex justify-center")}>
                    <span
                      className={clsx(
                        "text-blue_gray-700",
                        "md:text-base",
                        "mt-2",
                        "text-center"
                      )}
                    >
                      Antes de continuar completa tu perfil
                    </span>
                  </div>
                  <div
                    className={clsx(
                      "mt-2",
                      "text-base",
                      "md:text-xl",
                      "flex-col",
                      "space-y-2",
                      "m-2",
                      "p-2",
                      "sm:flex",
                      "gap-5"
                    )}
                  >
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Cédula Profesional</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cedulaProfesional"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Especialidad</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="especialidad"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* stepper */}

                  <div
                    className={clsx(
                      "flex",
                      "justify-center",
                      "mt-5",
                      "text-base md:text-xl",
                      "text-blue_gray-700"
                    )}
                  >
                    <p>Información Profesional</p>
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
                    "bg-[white]",
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
          </>
        );
      case 4:
        return (
          <>
            <div
              className={clsx(
                "max-w-md",
                "mx-auto",
                " bg-white",
                "rounded-xl",
                "overflow-hidden",
                "md:max-w-3xl"
              )}
            >
              <div class="md:flex justify-between">
                <div className={clsx("p-8")}>
                  <div
                    className={clsx(
                      "min-[360px]:flex-col",
                      "justify-center",
                      "tracking-wide",
                      "text-xl",
                      "md:text-3xl",
                      "flex ",
                      "justify-items-center",
                      "place-items-center",
                      "justify-center",
                      "space-x-2"
                    )}
                  >
                    <span className={clsx("text-green_title")}>
                      {" "}
                      Bienvenido a
                    </span>
                    <span className={clsx("text-blue_button", "ml-2")}>
                      {" "}
                      KodeClinic
                    </span>
                  </div>
                  <div className={clsx("flex justify-center")}>
                    <span
                      className={clsx(
                        "text-blue_gray-700",
                        "md:text-base",
                        "mt-2",
                        "text-center"
                      )}
                    >
                      Antes de continuar completa tu perfil
                    </span>
                  </div>
                  <div
                    className={clsx(
                      "mt-2",
                      "text-base",
                      "md:text-xl",
                      "flex-col",
                      "space-y-2",
                      "m-2",
                      "p-2",
                      "sm:flex",
                      "gap-5"
                    )}
                  >
                    <div className={clsx("space-y-2", "ml-2")}>
                      <Availability></Availability>
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "flex",
                      "justify-center",
                      "mt-5",
                      "text-base md:text-xl",
                      "text-blue_gray-700"
                    )}
                  >
                    <p>Disponibilidad</p>
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
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div
              className={clsx(
                "max-w-md",
                "mx-auto",
                " bg-white",
                "rounded-xl",

                "overflow-hidden",
                "md:max-w-3xl"
              )}
            >
              <div class="md:flex justify-between">
                <div className={clsx("p-8")}>
                  <div
                    className={clsx(
                      "min-[360px]:flex-col",
                      "justify-center",
                      "tracking-wide",
                      "text-xl",
                      "md:text-3xl",
                      "flex ",
                      "justify-items-center",
                      "place-items-center",
                      "justify-center",
                      "space-x-2"
                    )}
                  >
                    <span className={clsx("text-green_title")}>
                      {" "}
                      ¡Felicidades!
                    </span>
                    <img
                      className={clsx("max-w-20", "m-10")}
                      src="/assets/Vector.png"
                      alt="imgCheck"
                    />
                  </div>

                  <div
                    className={clsx(
                      "mt-2",
                      "text-base",
                      "md:text-xl",
                      "flex-col",
                      "space-y-2",
                      "m-2",
                      "p-2",
                      "sm:flex",
                      "gap-5"
                    )}
                  >
                    <div className={clsx("flex flex-col justify-center")}>
                      <span className="text-center">
                        Ahora formas parte de la comunidad
                      </span>
                      <span className="text-center text-blue_button">
                        KodeClinic
                      </span>
                    </div>

                    <div className={clsx("flex justify-center")}>
                      <span className="text-center">
                        Si deseas consultar, editar o mejorar la información de
                        tu perfil podrás realizar los cambios accediendo desde
                        el menú lateral
                      </span>
                    </div>
                  </div>

                  <div className={clsx("flex", "justify-center")}>
                    <button
                      className={clsx(
                        "border",
                        " border-2",
                        "rounded-md",
                        "p-2",
                        "px-5",
                        "mt-20",
                        "m-10",
                        "text-white",
                        "bg-green_button",
                        "text-sm",
                        "md:text-lg"
                      )}
                    >
                      Confirmar
                    </button>
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
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={clsx(
          "max-w-md",
          "mx-auto",
          " bg-white",
          "rounded-xl",
          "shadow-lg",
          "overflow-hidden",
          "md:max-w-3xl",
          "flex-col",
          "justify-center"
        )}
      >
        <div className="grid place-items-center">
          {renderCard(currentPage)}
          <Pagination
            className="m-5"
            count={5}
            page={currentPage}
            onChange={handlePageChange}
          ></Pagination>
        </div>
      </div>
    </>
  );
}
