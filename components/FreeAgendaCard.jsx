import clsx from "clsx";
import Badge from "./Badge";

export default function FreeAgendaCard({ props }) {
  return (
    <div
      className={clsx(
        "bg-white drop-shadow-md",
        "py-3 px-4",
        "border border-blue_gray-300 rounded-lg flex flex-col items-center justify-center gap-3",
        "min-[980px]:items-start min-[980px]:max-w-[416px]"
      )}
    >
      {/* Horario Libre */}
      <div
        className={clsx(
          "flex flex-col items-center gap-1",
          "min-[980px]:flex-row "
        )}
      >
        <span
          className={clsx(
            "text-blue_gray-700 text-[16px] font-bold",
            "min-[980px]:text-[20px]"
          )}
        >
          Horario Libre
        </span>
      </div>

      {/* Informacion de la cita */}
      <div
        className={clsx(
          "flex flex-col items-center w-full gap-2",
          "min-[980px]:flex-row min-[980px]:justify-between"
        )}
      >
        {/* Horario y dirección */}
        <div className={clsx("inline-flex flex-col gap-3")}>
          <Badge
            badgeType={"appointment"}
            timeLapse={props.timeLapse}
            consultingAddress={""}
          />
        </div>
        {/* Agendar cita */}
        <img
          className={clsx("min-[980px]:hidden")}
          src="assets/icons/horizontal_line-icon.svg"
          alt="line"
        />

        <img
          className={clsx("hidden min-[980px]:block")}
          src="assets/icons/vertical_line-icon.svg"
          alt="line"
        />
        <div>
          <Badge badgeType={"schedule"} timeLapse={""} consultingAddress={""} />
        </div>
      </div>
    </div>
  );
}
