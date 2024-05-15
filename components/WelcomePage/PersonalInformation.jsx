import clsx from "clsx";
import { useContext } from "react";
import { WelcomePageContext } from "@/context/WelcomePageContext";
import Select from "react-select";

const selectStyles = {
  control: (styles) => ({
    ...styles,
    width: 300,
    minHeight: 48,
    borderRadius: 6,
    border: "2px solid #2196F3",
  }),
};

const optionSelect = [
  { value: "male", label: "Hombre" },
  { value: "female", label: "Mujer" },
];

export default function PersonalInformation() {
  const { userData, setUserData, setCurrentStep } =
    useContext(WelcomePageContext);

  return (
    <>
      {/* <div
        className={clsx(
          "max-w-md",
          "mx-auto",
          " bg-white",
          "rounded-xl",
          "overflow-hidden",
          "md:max-w-3xl"
        )}
      >
        <div className="md:flex justify-between"> */}
      <div className={clsx("px-8 pt-8")}>
        <div
          className={clsx(
            "min-[360px]:flex-col",
            "justify-center",
            "tracking-wide",
            "text-xl",
            "md:text-3xl",
            "flex md:flex-row",
            "justify-items-center",
            "place-items-center",
            "justify-center",
            "space-x-2"
          )}
        >
          <span className={clsx("text-green_title font-semibold")}>
            {" "}
            Bienvenido a
          </span>
          <span className={clsx("text-blue_button font-semibold", "ml-2")}>
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
            "flex",
            "justify-center",
            "mt-5",
            "text-base md:text-xl",
            "text-blue_gray-700"
          )}
        >
          <p className={clsx("text-center font-semibold")}>
            Información Personal
          </p>
        </div>

        <div
          className={clsx(
            "mt-10",
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
          <div className={clsx("flex flex-col md:flex-row md:justify-between")}>
            <div className={clsx("space-y-2", "ml-2")}>
              <p className={clsx("font-semibold")}> Nombre(s)</p>
              <input
                className="shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="Nombre"
                type="text"
                placeholder="Nombre(s)"
                value={userData.name} //para generar un propiedad dentro del objeto global
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    name: event.target.value,
                  }); //para generar un propiedad dentro del objeto global
                  // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
                }}
              />
            </div>

            <div className={clsx("space-y-2", "ml-2")}>
              <p className={clsx("font-semibold")}> Apellido(s)</p>
              <input
                className="shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="Apellido"
                type="text"
                placeholder="Apellido(s)"
                value={userData.lastName} //para generar un propiedad dentro del objeto global
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    lastName: event.target.value,
                  }); //para generar un propiedad dentro del objeto global
                  // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
                }}
              />
            </div>
          </div>

          <div className={clsx("flex flex-col md:flex-row md:justify-between")}>
            <div className={clsx("space-y-2", "ml-2")}>
              <p className={clsx("font-semibold")}> Fecha de Nacimiento</p>
              <input
                className="shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="Nombre"
                type="date"
                placeholder="Fecha de Nacimiento"
                value={userData.birthDate} //para generar un propiedad dentro del objeto global
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    birthDate: event.target.value,
                  }); //para generar un propiedad dentro del objeto global
                  // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
                }}
              />
            </div>

            <div>
              <div className={clsx("space-y-2", "ml-2")}>
                {/* Select */}
                <p className={clsx("font-semibold")}>Sexo</p>

                <div className="relative mt-2">
                  <Select
                    styles={selectStyles}
                    placeholder={"Selecciona la opción"}
                    options={optionSelect}
                    value={userData.gender}
                    onChange={(event) => {
                      setUserData({ ...userData, gender: event }); //para generar un propiedad dentro del objeto global
                      // setUserData([...userData, { [label]: event }]); //para generar un nuevo objeto dentro del array
                    }}
                  />
                  {/* <button
                      type="button"
                      className="relative w-full cursor-default rounded bg-white px-3 pr-10 text-left text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 border-2 border-primary_main  py-2 text-gray-700 leading-tight focus:shadow-outline"
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
                    </button> */}
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
