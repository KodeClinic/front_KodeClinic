import clsx from "clsx";
import Badge from "./Badge";

export default function AppointmentListCardPatient() {
  return (
    <tr className={clsx("")}>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {"31/10/2023"}
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {"3:00 pm"}
      </td>
      <td>{"Fisura"}</td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        <Badge badgeType={"valoration"} timeLapse={""} consultingAddress={""} />
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {"Consultorio"}
      </td>
      <td
        className={clsx(
          "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
        )}
      >
        {"Efectivo"}
      </td>
      <td>
        <button
          className={clsx(
            "text-green_button font-bold w-[165px] text-center border-2 border-green_button px-6 py-1 rounded-md"
          )}
        >
          Ver detalle
        </button>
      </td>
    </tr>
  );
}
