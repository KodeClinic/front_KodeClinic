import clsx from "clsx";
import Badge from "./Badge";
import { useRouter } from "next/router";

function MonthNames(number) {
  let month = "";
  switch (number) {
    case 0:
      month = "ENE";
      return month;
    case 1:
      month = "FEB";
      return month;
    case 2:
      month = "MAR";
      return month;
    case 3:
      month = "ABR";
      return month;
    case 4:
      month = "MAY";
      return month;
    case 5:
      month = "JUN";
      return month;
    case 6:
      month = "JUL";
      return month;
    case 7:
      month = "AGO";
      return month;
    case 8:
      month = "SEP";
      return month;
    case 9:
      month = "OCT";
      return month;
    case 10:
      month = "NOV";
      return month;
    case 11:
      month = "DIC";
      return month;
  }
}
function DayNames(number) {
  let day = "";
  switch (number) {
    case 0:
      day = "DOM";
      return day;
    case 1:
      day = "LUN";
      return day;
    case 2:
      day = "MAR";
      return day;
    case 3:
      day = "MIE";
      return day;
    case 4:
      day = "JUE";
      return day;
    case 5:
      day = "VIE";
      return day;
    case 6:
      day = "SAB";
      return day;
  }
}

export default function AppointmentCard_Patient({ props }) {
  const router = useRouter();
  const {
    consultType,
    paymentStatus,
    timeLapse,
    consultingAddress,
    date,
    status,
    _id,
  } = props;

  let statusType = "";
  if (status == "start") {
    statusType = "pending";
  } else if (status == "completed") {
    statusType = "completed";
  }

  return (
    <div
      className={clsx(
        "bg-white drop-shadow-md",
        "py-5 px-4",
        "border border-blue_gray-300 rounded-lg flex flex-col items-center justify-center gap-3",
        "min-[980px]:items-start min-[980px]:max-w-[360px]"
      )}
    >
      {/* Nombre Tipo de Cita */}
      <div
        className={clsx(
          "flex flex-row items-center gap-1",
          "min-[980px]:flex-row "
        )}
      >
        <span
          className={clsx(
            "text-blue_gray-700 text-[16px] font-bold",
            "min-[980px]:text-[20px]"
          )}
        >
          {consultType == "valoration"
            ? "Sesión de Valoración"
            : "Sesión de Fisioterapia"}
        </span>
      </div>

      {/* Informacion de la cita */}
      <div
        className={clsx(
          "flex flex-col items-center w-full gap-2",
          "min-[980px]:flex-row min-[980px]:justify-between"
        )}
      >
        <img
          className={clsx("min-[980px]:hidden")}
          src="assets/icons/horizontal_line-icon.svg"
          alt="line"
        />

        {/* Horario y dirección */}
        <div className={clsx("inline-flex flex-col gap-3")}>
          <Badge
            badgeType={"appointment"}
            timeLapse={timeLapse}
            consultingAddress={""}
          />
          <Badge
            badgeType={"address"}
            timeLapse={""}
            consultingAddress={consultingAddress}
          />
        </div>

        {/* Linea divisoria */}
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

        {/* Fehca y Pagos */}
        <div className={clsx("inline-flex flex-col gap-3 items-center ")}>
          <div className={clsx("flex items-center gap-2")}>
            <div className={clsx("text-[42px] font-bold")}>{date?.day}</div>
            <div>
              <div className={clsx("text-[16px] font-bold")}>
                {MonthNames(date?.month)}
              </div>
              <div className={clsx("text-[16px] font-bold")}>{date?.year}</div>
            </div>
          </div>
          <button
            onClick={() => {
              router.push({
                pathname: "/Appointment/[appointment_id]",
                query: { appointment_id: _id },
              });
            }}
            className={clsx(
              "text-green_button font-bold  text-center border-2 border-green_button px-2 py-1 rounded-md cursor-pointer text-sm",
              "hover:text-white hover:border-white hover:bg-green_button"
            )}
          >
            Ver detallle
          </button>
          {/* <Badge badgeType={statusType} timeLapse={""} consultingAddress={""} /> */}
        </div>
      </div>
    </div>
  );
}
