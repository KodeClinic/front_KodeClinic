import Card_function from "@/components/Card_function";
import clsx from "clsx";

export default function LandinPage() {
  return (
    <main>
      <section className="bg-background p-4">
        <h1
          className={clsx(
            "text-green_title font-semibold text-center p-4",
            "sm:text-[20px] md:text-[38px]"
          )}
        >
          Funcionalidades
        </h1>
        <span
          className={clsx(
            "text-center text-[#0745CB]",
            "sm:text-[14px] md:text-[18px] lg:text-[22px]"
          )}
        >
          Kode
        </span>
        <span
          className={clsx(
            "text-center text-[#0745CB] font-bold",
            "sm:text-[14px] md:text-[18px] lg:text-[22px]"
          )}
        >
          Clinic{" "}
        </span>
        <span
          className={clsx(
            "text-center text-blue_gray-600",
            "sm:text-[14px] md:text-[18px] lg:text-[22px]"
          )}
        >
          cuenta con funciones especializadas en la gestión de documentación
          médica para que saques el mejor provecho a tu Consultorio
        </span>

        <div className="flex flex-row justify-center gap-16 over">
          <Card_function />
        </div>
      </section>

      <section className="bg-white p-4 mt-3">
        <div className="grid grid-cols-2 justify-center">
          <div>
            <h1 className="text-green_title font-bold text-[14px] md:text-[20px]">
              Navegacion
            </h1>

            <p className="text-[12px] md:text-[18px]">Inicio</p>
            <p className="text-[12px] md:text-[18px]">Nosotros</p>
            <p className="text-[12px] md:text-[18px]">Funcionalidades</p>
          </div>
          <div>
            <h1 className="text-green_title font-bold text-[14px] md:text-[20px]">
              Contacto
            </h1>
            <p className="text-[12px] md:text-[18px] flex gap-2">
              <span>
                <img src="assets/icons/telephone.svg" alt="" />
              </span>
              5513044788
            </p>
            <p className="text-[12px] md:text-[18px] flex gap-2">
              <span>
                <img src="assets/icons/envelope.svg" alt="" />
              </span>
              kodeclinic@mail.com
            </p>
            <p className="text-[12px] md:text-[18px] flex gap-2">
              <span>
                <img src="assets/icons/geo-alt.svg" alt="" />
              </span>
              26, Libertad, CDMX
            </p>
          </div>
        </div>

        <div
          className={clsx(
            "flex items-center mt-4 gap-2",
            "flex-col md:flex-row lg:flex-row lg:justify-center"
          )}
        >
          <input
            className={clsx(
              "border-2 rounded-full border-[#0745CB] font-bold placeholder:text-[#0745CB] placeholder:text-center h-[48px] text-[13px]",
              "w-[328px]",
              "lg:w-[400px]"
            )}
            type="mail"
            name=""
            id=""
            placeholder="Correo electronico"
          />
          <button className="w-[328px] h-[48px] text-[12px] border-2 rounded-full border-[#0745CB] bg-[#0745CB] text-white font-bold">
            Recibir Información
          </button>
        </div>

        <div className="mt-4">
          <span className="text-green_title text-[20px] md:text-[25px]">
            Kode
          </span>
          <span className="text-green_title text-[20px] md:text-[25px] font-bold">
            Clinic
          </span>
          <p className="text-[14px] md:text-[16px] mt-4 text-blue_gray-600">
            Nuestra plataforma facilita la organización de expedientes médicos y
            la gestión de citas para terapeutas. Contáctanos para más
            información. ¡Gracias por confiar en nosotros para cuidar de tu
            salud!
          </p>
        </div>
        <div className="flex gap-6 mt-4">
          <img src="assets/icons/facebook.svg" alt="" />
          <img src="assets/icons/twitter.svg" alt="" />
          <img src="assets/icons/google.svg" alt="" />
          <img src="assets/icons/instagram.svg" alt="" />
          <img src="assets/icons/whatsapp.svg" alt="" />
        </div>
      </section>
    </main>
  );
}
