import NavBar from "@/components/NavBar";
import HeroCard from "@/components/HeroCard";
import clsx from "clsx";
import Card_function from "@/components/Card_function";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LandinPage() {
  const router = useRouter();

  return (
    <main className="bg-background h-full w-full">
      <NavBar />
      <section
        id="Inicio"
        className={clsx(
          "sm:flex sm:flex-row sm:justify-between",
          "px-4 pb-7 pt-24 min-[980px]:pt-[134px]",
          "sm:px-14 min-[980px]:px-20 ",
          "lg:max-w-[1440px] lg:m-auto"
        )}
      >
        <div
          id="hero-section"
          className={clsx("flex flex-col justify-between items-start gap-4")}
        >
          <div className={clsx("flex flex- col justify-between items-center")}>
            <div
              className={clsx(
                "max-w-[328px] sm:max-w-[406px] min-[980px]:max-w-[604px]"
              )}
            >
              <span
                className={clsx(
                  "font-semibold text-green_title text-[20px] ",
                  "sm:text-[38px] ",
                  "min-[980px]:text-[64px]"
                )}
              >
                El perfecto aliado para{" "}
              </span>
              <span
                className={clsx(
                  "font-extrabold text-blue_button text-[20px] tracking-[2px]",
                  "sm:text-[38px] sm:tracking-[4px]",
                  "min-[980px]:text-[64px]"
                )}
              >
                administrar tu Consultorio
              </span>
            </div>
            <img
              className={clsx("drop-shadow-md", "max-h-[136px]", "sm:hidden")}
              src="/assets/img-doctor-heroSection-mobile.png"
              alt="doctor-image"
            />
          </div>

          <div
            className={clsx(
              "flex flex-col gap-4",
              "text-justify",
              "max-w-[328px] sm:max-w-[406px] min-[980px]:max-w-[604px]"
            )}
          >
            <span
              className={clsx(
                "text-[14px] font-medium text-blue_gray-700",
                "sm:text-[16px]",
                "min-[980px]:text-[25px]"
              )}
            >
              Libera tu tiempo para lo esencial: tus pacientes
            </span>
            <span
              className={clsx(
                "text-[14px] font-medium text-blue_gray-700",
                "sm:text-[16px]",
                "min-[980px]:text-[25px]"
              )}
            >
              Deja que nuestra plataforma gestione su historial completo,
              permitiéndote brindarles la atención médica que merecen
            </span>
            <button
              onClick={() => router.push("/CreateAccount")}
              className={clsx(
                "text-white drop-shadow-md font-semibold text-[14px] min-[980px]:text-xl",
                "border-2 border-blue_button bg-blue_button rounded-full",
                "max-w-[327px] px-4 py-2 max-h-[40px] sm:max-h-[140px] min-[980px]:max-h-[198px]",
                "sm:max-w-[156px] min-[980px]:max-w-[222px]"
              )}
            >
              ¡Comienza ahora!
            </button>
          </div>
        </div>
        <img
          className={clsx(
            "drop-shadow-md",
            "hidden",
            "sm:block sm:max-h-[233px] min-[980px]:hidden"
          )}
          src="/assets/img-doctor-heroSection-mobile.png"
          alt="doctor-image"
        />
        <img
          className={clsx(
            "drop-shadow-md",
            "hidden",
            "min-[980px]:block min-[980px]:max-h-[526px] pl-7"
          )}
          src="/assets/img-doctor-heroSection.png"
          alt="doctor-image"
        />
        {/* <button
          className={clsx(
            "hidden min-[980px]:block",
            "text-white font-semibold text-[14px]",
            "border-2 border-blue_button bg-blue_button rounded-full",
            "min-[980px]:h-[40px] min-[980px]:w-[156px]",
            "absolute z-10 top-[550px] right-[355px]"
          )}
        >
          ¡Comienza ahora!
        </button> */}
      </section>
      <section
        id="Hero-Section-2"
        className={clsx(
          "flex flex-col items-center gap-2",
          "px-4 pt-7 pb-4",
          "sm:px-14 min-[980px]:px-20",
          "divide-y-2 divide-green_button"
        )}
      >
        <img
          className={clsx("h-7 w-7 fill-green_button")}
          src="/assets/icons/heart1-icon.svg"
          alt="doctor-image"
        />

        <div className={clsx("flex flex-col items-center gap-2")}>
          <span
            className={clsx(
              "text-[14px] font-semibold text-green_button leading-[26px] text-center",
              "sm:text-xl"
            )}
          >
            ¡Optimiza tu consultorio con KodeClinic!
          </span>

          <span
            className={clsx(
              "text-[14px] font-normal text-blue_gray-700 text-center",
              "sm:text-xl"
            )}
          >
            Simplifica el seguimiento y la gestión de casos médicos
          </span>
        </div>
      </section>
      <section
        id="Hero-Section-3"
        className={clsx(
          "px-4 pt-4 sm:px-14 min-[980px]:px-20",
          "flex flex-col gap-5 sm:flex-row sm:justify-center"
        )}
      >
        <HeroCard
          name={"Expediente Médico"}
          description={
            "Digitaliza el Expediente Medico de tus pacientes y accede a él en cualquier momento"
          }
          icon={"assets/icons/newspaper-icon.svg"}
        />
        <HeroCard
          name={"Agenda"}
          description={
            "Genera y visualiza tus citas, así como tus pacientes sin peder ningún detalle"
          }
          icon={"assets/icons/calendar-icon.svg"}
        />
        <HeroCard
          name={"Tratamiento"}
          description={
            "Comparte los tratamientos con tus pacientes que podrán visualizar desde su perfil."
          }
          icon={"assets/icons/medkit-icon.svg"}
        />
      </section>
      <section
        id="Sobre-Nosotros"
        className={clsx("flex flex-col items-center", "pt-16")}
      >
        <h2
          className={clsx(
            "text-xl text-green_title tracking-[2px] font-semibold pt-4 pb-5",
            "sm:text-[38px]"
          )}
        >
          Sobre Nosotros
        </h2>
        <div
          className={clsx(
            "bg-white w-full",
            "px-4 py-8 sm:px-14 min-[980px]:px-20",
            "lg:flex lg:justify-center"
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center",
              "min-[980px]:flex-row lg:max-w-[1280px]"
            )}
          >
            <div
              className={clsx(
                "flex flex-col items-center gap-4 min-[980px]:items-stretch",
                "min-[980px]:max-w-[679px] "
              )}
            >
              <div className={clsx("text-center min-[980px]:text-justify")}>
                <span
                  className={clsx(
                    "text-[14px] sm:text-base min-[980px]:text-[22px] text-blue_button font-medium"
                  )}
                >
                  Kode
                </span>
                <span
                  className={clsx(
                    "text-[14px] sm:text-base min-[980px]:text-[22px] text-blue_button font-bold"
                  )}
                >
                  Clinic{" "}
                </span>
                <span
                  className={clsx(
                    "text-[14px] sm:text-base min-[980px]:text-[22px] text-blue_gray-700 font-medium"
                  )}
                >
                  es una plataforma diseñada para especialistas del sector salud
                  con herramientas que les ayudan a administrar la documentación
                  de sus pacientes
                </span>
              </div>
              <span
                className={clsx(
                  "text-[14px] sm:text-base min-[980px]:text-[22px] text-blue_gray-700 font-medium text-center min-[980px]:text-justify"
                )}
              >
                Actualmente contamos con el Módulo de Fisioterápia y seguimos
                trabajando para poner a tu disposición muchos otros
              </span>
              <span
                className={clsx(
                  "text-[14px] sm:text-base min-[980px]:text-[22px] text-blue_gray-700 font-bold text-center min-[980px]:text-justify"
                )}
              >
                ¿Qué esperas? Registrate y forma parte de la comunidad
              </span>

              <button
                onClick={() => router.push("/CreateAccount")}
                className={clsx(
                  "text-blue_button font-semibold drop-shadow-md text-[14px] min-[980px]:text-xl",
                  "border-2 border-blue_button rounded-full",
                  "max-w-[327px] px-4 py-2 max-h-[40px] sm:max-h-[140px] min-[980px]:max-h-[198px]",
                  "sm:max-w-[156px] min-[980px]:max-w-[222px]"
                )}
              >
                ¡Comienza ahora!
              </button>
            </div>
            <div className={clsx("py-4 pl-8")}>
              <img
                className={clsx("max-h-[188px] drop-shadow-md", "sm:hidden")}
                src="/assets/img-aboutUsSection-mobile.png"
                alt="sobre nosotros"
              />
              <img
                className={clsx(
                  "max-h-[300px] drop-shadow-md",
                  "hidden sm:block",
                  "min-[980px]:min-w-[539px] min-[980px]:min-h-[390px]"
                )}
                src="/assets/img-aboutUsSection.png"
                alt="sobre nosotros"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="Funcionalidades"
        className={clsx(
          "bg-background sm:px-14 min-[980px]:px-20",
          "pt-16",
          "lg:max-w-[1440px] lg:m-auto"
        )}
      >
        <h1
          className={clsx(
            "text-green_title font-semibold text-center p-4",
            "sm:text-[20px] md:text-[38px] "
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

      <section className="bg-white px-4 mt-14 sm:px-14 min-[980px]:px-20">
        <div className="grid grid-cols-2 justify-center lg:hidden">
          <div className="mt-5">
            <h1 className="text-green_title font-bold text-[14px] sm:text-[20px]">
              Navegacion
            </h1>

            <p className="text-[12px] sm:text-[18px] mt-2">Inicio</p>
            <p className="text-[12px] sm:text-[18px] mt-2">Nosotros</p>
            <p className="text-[12px] sm:text-[18px] mt-2">Funcionalidades</p>
          </div>
          <div className="mt-5">
            <h1 className="text-green_title font-bold text-[14px] sm:text-[20px]">
              Contacto
            </h1>
            <p className="text-[12px] sm:text-[18px] flex justify-start items-center gap-2 mt-2">
              <span>
                <img src="/assets/icons/telephone.svg" alt="" />
              </span>
              5513044788
            </p>
            <p className="text-[12px] sm:text-[18px] flex justify-start items-center gap-2 mt-2">
              <span>
                <img src="/assets/icons/envelope.svg" alt="" />
              </span>
              kodeclinic@mail.com
            </p>
            <p className="text-[12px] sm:text-[18px] flex justify-start items-center gap-2 mt-2">
              <span>
                <img src="/assets/icons/geo-alt.svg" alt="" />
              </span>
              26, Libertad, CDMX
            </p>
          </div>
        </div>

        <div
          className={clsx(
            "bg-white",
            "flex items-center mt-4 gap-2",
            "flex-col sm:flex-row sm:justify-between min-[980px]:justify-center"
          )}
        >
          <input
            className={clsx(
              "border-2 rounded-full border-[#0745CB] font-bold placeholder:text-[#0745CB] placeholder:text-center h-[48px] text-[13px]",
              "min-w-[328px] sm:min-w-[420px]",
              "min-[980px]:min-w-0 min-[980px]:w-[350px]",
              "mt-3 lg:mt-12"
            )}
            type="mail"
            name=""
            id=""
            placeholder="Correo electronico"
          />
          <button
            className={clsx(
              "min-w-[328px] h-[48px] text-[12px] font-bold mt-2",
              "border-2 rounded-full border-[#0745CB] bg-[#0745CB] text-white",
              "sm:min-w-0 sm:w-[180px] md:ml-6 lg:mt-12",
              "min-[980px]:w-[185px]"
            )}
          >
            Recibir Información
          </button>
        </div>
      </section>

      <section
        className={clsx("bg-white w-full", " lg:mx-auto  lg:justify-center")}
      >
        <div
          className={clsx(
            "bg-white w-full px-4",
            "sm:px-14 min-[980px]:px-20 pt-4",
            "lg:max-w-[1440px] lg:mx-auto grid lg:grid-cols-3 lg:justify-center lg:pt-9"
          )}
        >
          <div>
            <Link href="#Inicio">
              <span className="text-green_title text-[20px] md:text-[25px]">
                Kode
              </span>
              <span className="text-green_title text-[20px] md:text-[25px] font-bold">
                Clinic
              </span>
            </Link>
            <p className="text-[14px] md:text-[16px] mt-4 text-blue_gray-600">
              Nuestra plataforma facilita la organización de expedientes médicos
              y la gestión de citas para terapeutas. Contáctanos para más
              información. ¡Gracias por confiar en nosotros para cuidar de tu
              salud!
            </p>
          </div>
          <div className="hidden lg:block lg:max-w-[1440px] lg:m-auto lg:mt-0">
            <h1 className="lg:text-green_title lg:font-bold lg:text-[20px]">
              Navegacion
            </h1>
            <Link href="#Inicio">
              <p className="lg:text-[18px] lg:mt-2">Inicio</p>
            </Link>
            <Link href="#Sobre-Nosotros">
              <p className="lg:text-[18px] lg:mt-2">Nosotros</p>
            </Link>
            <Link href="#Funcionalidades">
              <p className="lg:text-[18px] lg:mt-2">Funcionalidades</p>
            </Link>
          </div>
          <div className="hidden lg:block lg:ml-40 lg:mt-0">
            <h1 className="lg:text-green_title lg:font-bold lg:text-[20px]">
              Contacto
            </h1>
            <p className="lg:text-[18px] lg:flex lg:justify-start lg:items-center lg:gap-2 lg:mt-2">
              <span>
                <img src="/assets/icons/telephone.svg" alt="" />
              </span>
              5513044788
            </p>
            <p className="lg:text-[18px] lg:flex lg:justify-start lg:items-center lg:gap-2 lg:mt-2">
              <span>
                <img src="/assets/icons/envelope.svg" alt="" />
              </span>
              kodeclinic@email.com
            </p>
            <p className="lg:text-[18px] lg:flex lg:justify-start lg:items-center lg:gap-2 lg:mt-2">
              <span>
                <img src="/assets/icons/geo-alt.svg" alt="" />
              </span>
              26, Libertad, CDMX
            </p>
          </div>
        </div>
      </section>

      <div className={clsx("bg-white", " lg:mx-auto")}>
        <div
          className={clsx(
            "bg-white",
            "flex gap-6 pt-4 py-10",
            "px-4 sm:px-14 min-[980px]:px-20",
            "lg:max-w-[1440px] lg:m-auto lg:pt-4 lg:py-10"
          )}
        >
          <img src="/assets/icons/facebook.svg" alt="" />
          <img src="/assets/icons/twitter.svg" alt="" />
          <img src="/assets/icons/google.svg" alt="" />
          <img src="/assets/icons/instagram.svg" alt="" />
          <img src="/assets/icons/whatsapp.svg" alt="" />
        </div>
      </div>
    </main>
  );
}
