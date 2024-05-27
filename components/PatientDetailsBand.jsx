import clsx from "clsx";

export default function PatientDetailsBand({
  name,
  gender,
  email,
  cel,
  // work,
  // religion,
  // address,
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
          "px-6 py-4",
          "bg-white rounded-[20px]",
          "min-[980px]:px-7 w-full"
        )}
      >
        <div className="flex flex-col min-[980px]:gap-[180px] min-[980px]:flex-row">
          <span
            className={clsx(
              "text-base font-semibold text-green_title",
              "min-[980px]:text-xl "
            )}
          >
            Nombre: {name}
          </span>
          {/* <div className={clsx("flex gap-[10px] items-center")}>
            <img
              className={clsx("w-5 h-5")}
              src="/assets/icons/build-icon.svg"
              alt=""
            />
            <span
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              {address}
            </span>
          </div> */}
        </div>

        <div
          className={clsx(
            "flex flex-col gap-[10px]",
            "min-[980px]:flex-row min-[980px]:justify-between min-[980px]:max-w-[900px]"
          )}
        >
          <div className={clsx("flex gap-[10px] items-center")}>
            {gender == "male" ? (
              <img
                className={clsx("w-5 h-5")}
                src="/assets/icons/man-icon.svg"
                alt=""
              />
            ) : (
              <img
                className={clsx("w-5 h-5")}
                src="/assets/icons/woman-icon.svg"
                alt=""
              />
            )}

            <span
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              {gender == "male" ? "Genero: Masculino" : "Genero: Femenino"}
            </span>
          </div>
          <div className={clsx("flex gap-[10px] items-center")}>
            <img
              className={clsx("w-5 h-5")}
              src="/assets/icons/mail-icon.svg"
              alt=""
            />
            <span
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              Correo: {email}
            </span>
          </div>

          <div className={clsx("flex gap-[10px] items-center")}>
            <img
              className={clsx("w-5 h-5")}
              src="/assets/icons/phone-icon.svg"
              alt=""
            />
            <span
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              Teléfono: {cel}
            </span>
          </div>
          {/* <div
            className={clsx(
              "flex gap-[10px] items-center min-[980px]:invisible xl:visible"
            )}
          >
            <img
              className={clsx("w-5 h-5")}
              src="/assets/icons/portfolio-icon.svg"
              alt=""
            />
            <span
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              {work}
            </span>
          </div> */}
          {/* <div className={clsx("flex gap-[10px] items-center")}>
            <img
              className={clsx("w-5 h-5")}
              src="/assets/icons/church-icon.svg"
              alt=""
            />
            <span
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              {religion}
            </span>
          </div> */}
        </div>
      </div>

      <img
        className={clsx(
          "hidden sm:block",
          "w-[150px] h-[150px]",
          "absolute",
          "bottom-0 sm:right-10 min-[980px]:right-8"
        )}
        src="/assets/img-PatientCard.png"
        alt="psiotherapy"
      />
    </section>
  );
}
