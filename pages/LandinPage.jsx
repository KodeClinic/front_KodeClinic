import NavBar from "@/components/NavBar";
import HeroCard from "@/components/HeroCard";
import clsx from "clsx";

export default function LandinPage() {
  return (
    <main className="bg-background h-full w-full">
      <NavBar />
      <section
        id="Hero-Section-1"
        className={clsx(
          "sm:flex sm:flex-row  min-[980px]:justify-between",
          "px-4 pt-[84px] pb-4",
          "sm:px-14 min-[980px]:px-20",
          "lg:max-w-[1440px] lg:m-auto"
        )}
      >
        <div
          id="hero-section"
          className={clsx("flex flex-col justify-between items-start gap-4")}
        >
          <div className={clsx("flex flex- col justify-between items-center")}>
            <div className={clsx("min-[980px]:max-w-[910px]")}>
              <h1
                className={clsx(
                  "font-semibold text-green_title text-[20px] tracking-[2px]",
                  "sm:text-[38px] sm:tracking-[4px]",
                  "min-[980px]:text-[64px]"
                )}
              >
                El perfecto aliado para{" "}
              </h1>
              <h1
                className={clsx(
                  "font-extrabold text-blue_button text-[20px] tracking-[2px]",
                  "sm:text-[38px] sm:tracking-[4px]",
                  "min-[980px]:text-[64px]"
                )}
              >
                administrar tu Consultorio
              </h1>
            </div>
            <img
              className={clsx("drop-shadow-md", "max-h-[136px]", "sm:hidden")}
              src="assets/img-doctor-heroSection-mobile.png"
              alt="doctor-image"
            />
          </div>

          <div
            className={clsx("flex flex-col gap-4", "min-[980px]:max-w-[910px]")}
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
              className={clsx(
                "text-white font-semibold text-[14px] min-[980px]:text-xl",
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
          src="assets/img-doctor-heroSection-mobile.png"
          alt="doctor-image"
        />
        <img
          className={clsx(
            "drop-shadow-md",
            "hidden",
            "min-[980px]:block min-[980px]:max-h-[526px]"
          )}
          src="assets/img-doctor-heroSection.png"
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
          "px-4 py-4",
          "sm:px-14 min-[980px]:px-20",
          "divide-y-2 divide-green_button"
        )}
      >
        <img
          className={clsx("h-7 w-7 fill-green_button")}
          src="assets/icons/heart1-icon.svg"
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
          "px-4 py-4 sm:px-14 min-[980px]:px-20",
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
        id="about-us"
        className={clsx("flex flex-col items-center", "py-4")}
      >
        <h2
          className={clsx(
            "text-xl text-green_title tracking-[2px] font-semibold pt-4 pb-5",
            "sm:text-[38px]"
          )}
        >
          Sobre Nosotros
        </h2>
        <div className={clsx("bg-white w-full", "lg:flex lg:justify-center")}>
          <div
            className={clsx(
              "flex flex-col items-center",
              "px-4 py-8 sm:px-14 min-[980px]:px-20",
              "min-[980px]:flex-row lg:max-w-[1280px]"
            )}
          >
            <div
              className={clsx(
                "flex flex-col items-center gap-4",
                "min-[980px]:max-w-[679px] "
              )}
            >
              <div className={clsx("text-center")}>
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
                  "text-[14px] sm:text-base min-[980px]:text-[22px] text-blue_gray-700 font-medium text-center"
                )}
              >
                Actualmente contamos con el Módulo de Fisioterápia y seguimos
                trabajando para poner a tu disposición muchos otros
              </span>
              <span
                className={clsx(
                  "text-[14px] sm:text-base min-[980px]:text-[22px] text-blue_gray-700 font-bold text-center"
                )}
              >
                ¿Qué esperas? Registrate y forma parte de la comunidad
              </span>

              <button
                className={clsx(
                  "text-blue_button font-semibold text-[14px] min-[980px]:text-xl",
                  "border-2 border-blue_button rounded-full",
                  "max-w-[327px] px-4 py-2 max-h-[40px] sm:max-h-[140px] min-[980px]:max-h-[198px]",
                  "sm:max-w-[156px] min-[980px]:max-w-[222px]"
                )}
              >
                ¡Comienza ahora!
              </button>
            </div>
            <div className={clsx("py-4 pl-5")}>
              <img
                className={clsx("max-h-[188px] drop-shadow-md", "sm:hidden")}
                src="assets/img-aboutUsSection-mobile.png"
                alt="sobre nosotros"
              />
              <img
                className={clsx(
                  "max-h-[300px] drop-shadow-md",
                  "hidden sm:block",
                  "min-[980px]:min-w-[539px] min-[980px]:min-h-[390px]"
                )}
                src="assets/img-aboutUsSection.png"
                alt="sobre nosotros"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
