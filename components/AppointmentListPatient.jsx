import clsx from "clsx";
import AppointmentListCardPatient from "./AppointmentListCardPatient";

export default function AppointmentListPatient({ props }) {
  return (
    <div
      className={clsx(
        " flex flex-row  justify-start overflow-auto rounded-md shadow-md min-[1110px]:w-fit"
      )}
    >
      {/* <div className={clsx("overflow-auto rounded-md shadow-md ")}> */}
      <table className={clsx("rounded-md shadow-md")}>
        <thead
          className={clsx("bg-blue_gray-50 border-b-2 border-blue_gray-200")}
        >
          <tr>
            <th
              className={clsx(
                "text-[16px] sm:text-[18px] font-bold min-w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Fecha
            </th>
            <th
              className={clsx(
                "text-[16px] sm:text-[18px] font-bold min-w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Hora
            </th>
            {/* <th
              className={clsx(
                "text-[16px] sm:text-[18px] font-bold min-w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Padecimiento
            </th> */}
            <th
              className={clsx(
                "text-[16px] sm:text-[18px] font-bold min-w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Tipo de Cita
            </th>
            <th
              className={clsx(
                "text-[16px] sm:text-[18px] font-bold min-w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Lugar
            </th>
            {/* <th
              className={clsx(
                "text-[18px] font-bold w-[180px] p-4 text-start tracking-wide text-nowrap "
              )}
            >
              Tipo de Pago
            </th> */}
            <th className={clsx(" p-4 w-[174px]")}></th>
          </tr>
        </thead>
        <tbody className={clsx("divide-y divide-blue_gray-100")}>
          {props.length == 1 && (
            <AppointmentListCardPatient key={`item-1`} props={props[0]} />
          )}

          {props.length < 1 &&
            props.map((appointment, index) => {
              return (
                <AppointmentListCardPatient
                  key={`item-${index}`}
                  props={appointment}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
