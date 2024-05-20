import { NewPacientContext } from "@/context/NewPacientContext";
import clsx from "clsx";
import { useContext } from "react";

export default function Contact_info() {
  const { newPxData, setNewPxData } = useContext(NewPacientContext);

  return (
    <div className="bg-background p-5 flex justify-center">
      <article
        className={clsx(
          "p-4 mt-16 bg-white w-[328px] h-[812px] justify-center rounded-xl shadow-2xl",
          "sm:p-0 sm:w-[1128px] sm:h-[600px] sm:grid sm:grid-cols-3"
        )}
      >
        <section className="sm:p-4 sm:col-span-2 sm:ml-6">
          <div className="p-5 flex flex-col justify-center items-center">
            <h1
              className={clsx(
                "text-green_title",
                "font-semibold text-center text-[20px]"
              )}
            >
              Registro de nuevo paciente
            </h1>
            <p className={clsx("mt-3 text-[15px]")}>Información de contacto</p>
          </div>
          <section className={clsx("sm:grid sm:grid-cols-2 sm:justify-center")}>
            <div className="mt-8">
              <p className={clsx("font-semibold text-[14px]")}>
                Correo Electrónico
              </p>
              <input
                type="text"
                placeholder="micorreo@mail.com"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.email}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    email: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3 sm:mt-8">
              <p className={clsx("font-semibold text-[14px]")}>Dirección</p>
              <input
                type="text"
                placeholder="Calle y número exterior"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.address}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    address: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Colonia</p>
              <input
                type="text"
                placeholder="Aquiles Serdan"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.colony}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    colony: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Estado</p>
              <select
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.state}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    state: event.target.value,
                  });
                }}
              >
                <option value="Ciudad_de_Mexico">Ciudad de México</option>
                <option value="Ciudad_de_Mexico">Estado de México</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja_California">Baja California</option>
                <option value="Baja_California_sur">Baja California Sur</option>
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
            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Número de telefono
              </p>
              <input
                type="text"
                placeholder="5557841726"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.cellphone}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    cellphone: event.target.value,
                  });
                }}
              />
            </div>
          </section>
        </section>

        <section className="hidden bg-[#E5EDFF] sm:flex sm:flex-col sm:justify-center sm:items-center sm:rounded-r-lg gap-5">
          <img
            src="assets/KodeClinic_logo_1.svg"
            alt=""
            className="w-[80px] h-[80px]"
          />

          <img
            src="assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
            alt="MDN"
            className="w-[230px] h-[438px]"
          />
        </section>
      </article>
    </div>
  );
}
