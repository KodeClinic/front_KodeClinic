import clsx from "clsx";

export default function PatientBand({
  name_Patient,
  gender_Patient,
  name_Specialist,
  cel_Specialist,
}) {
  return (
    <section
      className={clsx(
        "drop-shadow-md",
        "pt-[88px] px-4 min-[980px]:pt-[132px]",
        "sm:px-14 min-[980px]:px-20",
        "min-[980px]:flex min-[980px]:flex-row ",
        "lg:max-w-[1440px] lg:m-auto",
        "relative"
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-5",
          "px-6 py-4 min-[980px]:pr-32",
          "bg-white rounded-[20px]",
          "min-[980px]:flex-row min-[980px]:justify-between",
          "min-[980px]:px-7 w-full"
        )}
      >
        {/* Informacion del Paciente */}
        <div className={clsx("flex flex-col gap-[10px]")}>
          <span
            className={clsx(
              "text-base font-semibold text-green_title",
              "min-[980px]:text-xl "
            )}
          >
            ¡Bienvenido de vuelta!
          </span>

          <div className={clsx("flex flex-col gap-[10px]")}>
            <div className={clsx("flex gap-[10px] items-center")}>
              {gender_Patient == "male" ? (
                <img
                  className={clsx("w-5 h-5")}
                  src="assets/icons/man-icon.svg"
                  alt=""
                />
              ) : (
                <img
                  className={clsx("w-5 h-5")}
                  src="assets/icons/woman-icon.svg"
                  alt=""
                />
              )}

              <span
                className={clsx(
                  "text-base font-normal",
                  "min-[980px]:text-[18px]"
                )}
              >
                {name_Patient}
              </span>
            </div>

            <div className={clsx("flex gap-[10px] items-center")}>
              <img
                className={clsx("w-5 h-5")}
                src="assets/icons/source_notes-icon.svg"
                alt=""
              />
              <span
                className={clsx(
                  "text-base font-normal",
                  "min-[980px]:text-[18px]",
                  "underline"
                )}
              >
                Último tratamiento
              </span>
            </div>
          </div>
        </div>

        {/* Informacion del Especialista */}
        <div className={clsx("flex flex-col gap-[10px] min-[980px]:items-end")}>
          <span
            className={clsx(
              "text-base font-semibold text-green_title",
              "min-[980px]:text-xl "
            )}
          >
            Tu Especialista
          </span>
          <div className={clsx("flex gap-[10px] items-center")}>
            <img
              className={clsx("w-5 h-5")}
              src="assets/icons/woman-icon.svg"
              alt=""
            />
            <span
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              {name_Specialist}
            </span>
          </div>
          <div
            className={clsx(
              "flex flex-col gap-[10px] min-[980px]:flex-row min-[980px]:gap-6"
            )}
          >
            <div className={clsx("flex gap-[10px] items-center")}>
              <img
                className={clsx("w-5 h-5")}
                src="assets/icons/phone-icon.svg"
                alt=""
              />
              <span
                className={clsx(
                  "text-base font-normal",
                  "min-[980px]:text-[18px]"
                )}
              >
                {cel_Specialist}
              </span>
            </div>

            <div className={clsx("flex gap-[10px] items-center")}>
              <img
                className={clsx("w-5 h-5")}
                src="assets/icons/med_info-icon.svg"
                alt=""
              />
              <span
                className={clsx(
                  "text-base font-normal",
                  "min-[980px]:text-[18px]",
                  "underline"
                )}
              >
                Ver más
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        className={clsx(
          "hidden sm:block",
          "w-[150px] h-[150px]",
          "absolute",
          "bottom-0 sm:right-10 min-[980px]:right-14"
        )}
        src="assets/img-PatientCard.png"
        alt="psiotherapy"
      />
    </section>
  );
}
