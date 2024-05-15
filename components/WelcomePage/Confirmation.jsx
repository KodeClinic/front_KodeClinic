import clsx from "clsx";

export default function Confirmation() {
  return (
    <>
      <div className={clsx("p-8")}>
        <div
          className={clsx(
            "min-[360px]:flex-col",
            "justify-center",
            "tracking-wide",
            "text-xl",
            "md:text-3xl",
            "flex ",
            "justify-items-center",
            "place-items-center",
            "justify-center",
            "space-x-2"
          )}
        >
          <span className={clsx("text-green_title font-semibold")}>
            {" "}
            ¡Felicidades!
          </span>
          <img
            className={clsx("max-w-20", "m-10")}
            src="/assets/Vector.png"
            alt="imgCheck"
          />
        </div>

        <div
          className={clsx(
            "mt-2",
            "text-base",
            "md:text-xl",
            "flex-col",
            "space-y-2",
            "m-2",
            "p-2",
            "sm:flex",
            "gap-5"
          )}
        >
          <div className={clsx("flex flex-col justify-center")}>
            <span className="text-center font-medium text-main_text">
              Ahora formas parte de la comunidad
            </span>
            <span className="text-center text-blue_button font-medium">
              KodeClinic
            </span>
          </div>

          <div className={clsx("flex justify-center")}>
            <span className="text-center font-medium text-main_text">
              Si deseas consultar, editar o mejorar la información de tu perfil
              podrás realizar los cambios accediendo desde el menú lateral
            </span>
          </div>
        </div>

        <div className={clsx("flex", "justify-center")}>
          <button
            className={clsx(
              "border",
              " border-2",
              "rounded-md",
              "p-2",
              "px-5",
              "mt-20",
              "m-10",
              "text-white font-medium",
              "bg-green_button",
              "text-sm",
              "md:text-lg"
            )}
          >
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}
