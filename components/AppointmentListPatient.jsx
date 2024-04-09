import clsx from "clsx";
import AppointmentListCardPatient from "./AppointmentListCardPatient";

export default function AppointmentListPatient() {
  return (
    <div className={clsx("overflow-auto rounded-md shadow-md ")}>
      <table>
        <thead
          className={clsx("bg-blue_gray-50 border-b-2 border-blue_gray-200")}
        >
          <tr>
            <th
              className={clsx(
                "text-[18px] font-bold w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Fecha
            </th>
            <th
              className={clsx(
                "text-[18px] font-bold w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Hora
            </th>
            <th
              className={clsx(
                "text-[18px] font-bold w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Padecimiento
            </th>
            <th
              className={clsx(
                "text-[18px] font-bold w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Tipo de Cita
            </th>
            <th
              className={clsx(
                "text-[18px] font-bold w-[174px] p-4 text-start tracking-wide text-nowrap"
              )}
            >
              Lugar
            </th>
            <th
              className={clsx(
                "text-[18px] font-bold w-[174px] p-4 text-start tracking-wide text-nowrap "
              )}
            >
              Tipo de Pago
            </th>
            <th className={clsx("text-[18px] font-bold p-4 text-start")}></th>
          </tr>
        </thead>
        <tbody className={clsx("divide-y divide-blue_gray-100")}>
          <AppointmentListCardPatient />
          <AppointmentListCardPatient />
        </tbody>
      </table>
    </div>
  );
}
