import clsx from "clsx";
import Badge from "./Badge";
import Link from "next/link";

export default function AppointmentListCardPatient({ props }) {
  const {
    id,
    timeLapse,
    appointment_date,
    consultingAddress,
    consultType,
    paymentType,
    condition,
  } = props;

  return (
    <tr className={clsx("")}>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {appointment_date.D +
          "/" +
          appointment_date.M +
          "/" +
          appointment_date.y}
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {timeLapse}
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {condition}
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        <Badge badgeType={consultType} timeLapse={""} consultingAddress={""} />
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {consultingAddress}
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        <Badge badgeType={paymentType} timeLapse={""} consultingAddress={""} />
      </td>
      <td>
        <Link
          href={`appointment/${id}`}
          className={clsx(
            "text-green_button font-bold w-[165px] text-center border-2 border-green_button px-6 py-1 rounded-md cursor-pointer"
          )}
        >
          Ver detalle
        </Link>
      </td>
    </tr>
  );
}
