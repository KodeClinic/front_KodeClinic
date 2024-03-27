import Card_function from "@/components/Card_function";

export default function LandinPage() {
  return (
    <main>
      <section className="bg-background p-4">
        <h1 className=" text-green_title text-[20px] font-semibold text-center p-4">
          Funcionalidades
        </h1>
        <p className="text-[14px] text-center p-4">
          KodeClinic cuenta con funciones especializadas en la gestión de
          documentación médica para que saques el mejor provecho a tu
          Consultorio
        </p>
        <Card_function className="p-4" />
      </section>

      <section className="bg-white p-4">
        <div className="grid grid-cols-2 justify-center">
          <div>
            <h1 className="text-green_title font-bold text-[14px]">
              Navegacion
            </h1>
            <p className="text-[12px]">Inicio</p>
            <p className="text-[12px]">Nosotros</p>
            <p className="text-[12px]">Funcionalidades</p>
          </div>
          <div>
            <h1 className="text-green_title font-bold">Contacto</h1>
            <p className="text-[12px]">5513044788</p>
            <p className="text-[12px]">kodeclinic@mail.com</p>
            <p className="text-[12px]">26, Libertad, CDMX</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 gap-2">
          <input
            className="w-[328px] h-[48px] text-[12px] border-2 rounded-full border-[#0745CB] font-bold placeholder:text-[#0745CB] placeholder:text-center"
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
          <h1 className="font-bold text-[20px]">Kodeclinic</h1>
          <p className="text-[14px]">
            Nuestra plataforma facilita la organización de expedientes médicos y
            la gestión de citas para terapeutas. Contáctanos para más
            información. ¡Gracias por confiar en nosotros para cuidar de tu
            salud!
          </p>
        </div>
      </section>
    </main>
  );
}
