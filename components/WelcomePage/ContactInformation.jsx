import clsx from "clsx";
import { useContext } from "react";
import { WelcomePageContext } from "@/context/WelcomePageContext";

export default function ContactInformation() {
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
            Información de Contacto
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
              <p className={clsx("font-semibold")}> Telefono de Contacto</p>
              <input
                className="shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="telefonoDeContacto"
                type="text"
                required
                placeholder="Telefono de contacto"
                value={userData.cellphone} //para generar un propiedad dentro del objeto global
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    cellphone: event.target.value,
                  }); //para generar un propiedad dentro del objeto global
                  // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
                }}
              />
            </div>
            <div className={clsx("space-y-2", "ml-2")}>
              <p className={clsx("font-semibold")}> Calle y Número</p>
              <input
                className="shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="calleYnumero"
                type="text"
                required
                placeholder="Calle y número"
                value={userData.address} //para generar un propiedad dentro del objeto global
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    address: event.target.value,
                  }); //para generar un propiedad dentro del objeto global
                  // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
                }}
              />
            </div>
          </div>

          <div className={clsx("flex flex-col md:flex-row md:justify-between")}>
            <div className={clsx("space-y-2", "ml-2")}>
              <p className={clsx("font-semibold")}> Colonia</p>
              <input
                className="shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="colonia"
                type="text"
                required
                placeholder="Colonia"
                value={userData.colony} //para generar un propiedad dentro del objeto global
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    colony: event.target.value,
                  }); //para generar un propiedad dentro del objeto global
                  // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
                }}
              />
            </div>

            <div className={clsx("space-y-2", "ml-2")}>
              <p className={clsx("font-semibold")}> Estado</p>
              <input
                className="shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="estado"
                type="text"
                required
                placeholder="Estado"
                value={userData.state} //para generar un propiedad dentro del objeto global
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    state: event.target.value,
                  }); //para generar un propiedad dentro del objeto global
                  // setUserData([...userData, { [label]: event.target.value }]); //para generar un nuevo objeto dentro del array
                }}
              />
            </div>
          </div>
          <div className={clsx("flex justify-between pt-8")}>
            <button
              onClick={() => {
                setCurrentStep(1);
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
      </div>
    </>
  );
}
