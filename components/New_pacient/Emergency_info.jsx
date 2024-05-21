import { NewPacientContext } from "@/context/NewPacientContext";
import clsx from "clsx";
import { useContext } from "react";

export default function Emergency_info() {
  const { newPxData, setNewPxData, submitData } = useContext(NewPacientContext);

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
            <p className={clsx("text-center mt-3 text-[15px]")}>
              Información de contacto de emergencia
            </p>
          </div>
          <section className={clsx("sm:grid sm:grid-cols-2 sm:justify-center")}>
            <div className="mt-8">
              <p className={clsx("font-semibold text-[14px]")}>
                Nombre de contacto 1
              </p>
              <input
                type="text"
                placeholder="Karla Romero Alcalá"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.emergencyContactName}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    emergencyContactName: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3 sm:mt-8">
              <p className={clsx("font-semibold text-[14px]")}>
                Parentesco de contacto 1
              </p>
              <select
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.emergencyContactRelatioship}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    emergencyContactRelatioship: event.target.value,
                  });
                }}
              >
                <option value="Padre">Padre</option>
                <option value="Madre">Madre</option>
                <option value="Herman@">Herman@</option>
                <option value="Espos@">Espos@</option>
                <option value="Hij@">Hij@</option>
                <option value="Amig@">Amig@</option>
              </select>
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Número telefonico
              </p>
              <input
                type="text"
                placeholder="5555223904"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.emergencyContactPhone}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    emergencyContactPhone: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-8 sm:mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Nombre de contacto 2
              </p>
              <input
                type="text"
                placeholder="Karla Romero Alcalá"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.emergencyContactName2}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    emergencyContactName2: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Parentesco de contacto 2
              </p>
              <select
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.emergencyContactRelatioship2}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    emergencyContactRelatioship2: event.target.value,
                  });
                }}
              >
                <option value="Padre">Padre</option>
                <option value="Madre">Madre</option>
                <option value="Herman@">Herman@</option>
                <option value="Espos@">Espos@</option>
                <option value="Hij@">Hij@</option>
                <option value="Amig@">Amig@</option>
              </select>
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Número telefonico
              </p>
              <input
                type="text"
                placeholder="5555223904"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.emergencyContactPhone2}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    emergencyContactPhone2: event.target.value,
                  });
                }}
              />
            </div>
          </section>
          <button
            onClick={() => {
              submitData();
            }}
            className={clsx(
              "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg hover:bg-blue_button/15",
              "mt-12 w-64"
            )}
          >
            Concluir Registro
          </button>
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
