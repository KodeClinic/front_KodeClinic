import NavBar from "@/components/NavBar";
import clsx from "clsx";

export default function LandinPage() {
  return (
    <main className="bg-background h-screen w-screen">
      <NavBar />
      <section
        id="Hero-Section-1"
        className={clsx(
          "sm:flex sm:flex-row  min-[980px]:justify-between",
          "px-4 pt-5",
          "sm:px-14 min-[980px]:px-20"
        )}
      >
        <div
          id="hero-section"
          className={clsx("flex flex-col justify-between items-start gap-4")}
        >
          <div className={clsx("flex flex- col justify-between items-center")}>
            <div className={clsx("min-[980px]:max-w-[910px]")}>
              <span
                className={clsx(
                  "font-semibold text-green_title text-[20px] tracking-[2px]",
                  "sm:text-[38px] sm:tracking-[4px]",
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
        <button
          className={clsx(
            "hidden min-[980px]:block",
            "text-white font-semibold text-[14px]",
            "border-2 border-blue_button bg-blue_button rounded-full",
            "min-[980px]:h-[40px] min-[980px]:w-[156px]",
            "absolute z-10 top-[550px] right-[355px]"
          )}
        >
          ¡Comienza ahora!
        </button>
      </section>
      <section
        id="Hero-Section-2"
        className={clsx(
          "flex flex-col items-center gap-2",
          "px-4 pt-5",
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
    </main>
  );
}
