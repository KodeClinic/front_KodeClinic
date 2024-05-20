import { NewPacientContext } from "@/context/NewPacientContext";
import clsx from "clsx";
import { useContext } from "react";

export default function Personal_info() {
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
            <p className={clsx("mt-3 text-[15px]")}>Información personal</p>
          </div>
          <section className={clsx("sm:grid sm:grid-cols-2 sm:justify-center")}>
            <div className="mt-8">
              <p className={clsx("font-semibold text-[14px]")}>
                Nombre(s) del paciente
              </p>
              <input
                type="text"
                placeholder="Raúl"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.name}
                onChange={(event) => {
                  setNewPxData({ ...newPxData, name: event.target.value });
                }}
              />
            </div>

            <div className="mt-3 sm:mt-8">
              <p className={clsx("font-semibold text-[14px]")}>
                Apellidos(s) del paciente
              </p>
              <input
                type="text"
                placeholder="Perez"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.lastName}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    lastName: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Fecha de nacimiento
              </p>
              <input
                type="date"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.birthDate}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    birthDate: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Ocupación</p>
              <input
                type="text"
                placeholder="Estudiante, Ingeniero, Estilista....etc"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.occupation}
                onChange={(event) => {
                  setNewPxData({
                    ...newPxData,
                    occupation: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Sexo</p>
              <select
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.gender}
                onChange={(event) => {
                  setNewPxData({ ...newPxData, gender: event.target.value });
                }}
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Tipo de sanguíneo
              </p>
              <select
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.bloodType}
                onChange={(event) => {
                  setNewPxData({ ...newPxData, bloodType: event.target.value });
                }}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Religión</p>
              <input
                type="text"
                placeholder="Católica, Judía, Cristiano..etc"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
                value={newPxData.religion}
                onChange={(event) => {
                  setNewPxData({ ...newPxData, religion: event.target.value });
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
