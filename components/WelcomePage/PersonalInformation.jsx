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
