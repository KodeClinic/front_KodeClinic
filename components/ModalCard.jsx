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
                        <p>Sexo</p>
                        <select className="shadow border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                        </select>
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
                        placeholder="Calle y Número"
                      />
                    </div>
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Colonia</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="colonia"
                        type="text"
                        placeholder="Colonia"
                      />
                    </div>

                    <div className={clsx("space-y-2", "ml-2")}>
                      <p>Estado</p>
                      <select className="shadow border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                        <option value="Ciudad_de_Mexico">
                          Ciudad de México
                        </option>
                        <option value="Ciudad_de_Mexico">
                          Estado de México
                        </option>
                        <option value="Aguascalientes">Aguascalientes</option>
                        <option value="Baja_California">Baja California</option>
                        <option value="Baja_California_sur">
                          Baja California Sur
                        </option>
                        <option value="Campeche">Campeche</option>
                        <option value="Coahuila">Coahuila</option>
                        <option value="Colima">Colima</option>
                        <option value="Chiapas">Chiapas</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Durango">Durango</option>
                        <option value="Guanajuato">Guanajuato</option>
                        <option value="Guerrero">Guerrero</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Michoacan">Michoacán</option>
                        <option value="Morelos">Morelos</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="Nuevo_Leon">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Queretaro">Querétaro</option>
                        <option value="Quintana_Roo">Quintana Roo</option>
                        <option value="San_Luis_Potosi">San Luis Potosí</option>
                        <option value="Sinaloa">Sinaloa</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Tabasco">Tabasco</option>
                        <option value="Tamaulipas">Tamaulipas</option>
                        <option value="Tlaxcala">Tlaxcala</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatan">Yucatán</option>
                        <option value="Zacatecas">Zacatecas</option>
                      </select>
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
                        placeholder="Cédula Profesional"
                      />
                    </div>
                    <div className={clsx("space-y-2", "ml-2")}>
                      <p> Especialidad</p>
                      <input
                        className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="especialidad"
                        type="text"
                        placeholder="Especialidad"
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
