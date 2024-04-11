import clsx from "clsx";

export default function Personal_info() {
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
              />
            </div>

            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Fecha de nacimiento
              </p>
              <input
                type="date"
                placeholder="Nombres"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
              />
            </div>
            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Ocupación</p>
              <input
                type="text"
                placeholder="Estudiante, Ingeniero, Estilista....etc"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
              />
            </div>
            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Sexo</p>
              <select className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>
                Tipo de sanguíneo
              </p>
              <select className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]">
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="Femenino">B-</option>
                <option value="Femenino">AB+</option>
                <option value="Femenino">AB-</option>
                <option value="Femenino">O+</option>
                <option value="Femenino">O-</option>
              </select>
            </div>
            <div className="mt-3">
              <p className={clsx("font-semibold text-[14px]")}>Religión</p>
              <input
                type="text"
                placeholder="Católica, Judía, Cristiano..etc"
                className="border-2 border-[#2196F3] rounded-md w-[300px] h-[40px]"
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
