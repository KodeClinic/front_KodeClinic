import clsx from "clsx";
import Badge from "./Badge";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppointmentListCardPatient({ props }) {
  const router = useRouter();
  const {
    _id,
    timeLapse,
    date,
    consultingAddress,
    consultType,
    // paymentType,
    // condition,
  } = props;

  return (
    <tr className={clsx("")}>
      <td
        className={clsx(
          "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {date.day + "/" + date.month + "/" + date.year}
      </td>
      <td
        className={clsx(
          "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {timeLapse}
      </td>
      {/* <td
        className={clsx(
          "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {condition}
      </td> */}
      <td
        className={clsx(
          "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        <Badge badgeType={consultType} timeLapse={""} consultingAddress={""} />
      </td>
      <td
        className={clsx(
          "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {consultingAddress}
      </td>
      {/* <td
        className={clsx(
          "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        <Badge badgeType={paymentType} timeLapse={""} consultingAddress={""} />
      </td> */}
      <td>
        <button
          onClick={() => {
            router.push({
              pathname: "Appointment/[appointment_id]",
              query: { appointment_id: _id },
            });
          }}
          className={clsx(
            "text-green_button font-bold w-[165px] text-center border-2 border-green_button px-6 py-1 rounded-md cursor-pointer text-[16px]",
            "hover:text-white hover:border-none hover:bg-green_button"
          )}
        >
          Ver detalle
        </button>
      </td>
    </tr>
  );
}
