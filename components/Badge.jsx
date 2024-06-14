import clsx from "clsx";

export default function Badge({ badgeType, timeLapse, consultingAddress }) {
  let icon = "";
  let label = "";
  let description = "";
  let styles = "";
  let img_styles = "";

  if (badgeType == "valoration") {
    icon = "/assets/icons/stethoscope-icon.svg";
    label = "valoration";
    description = "Valoración";
    styles = "sm:w-[140px] sm:bg-[#DABCFF] text-blue_gray-700";
    img_styles = "bg-[#DABCFF] sm:bg-inherit rounded-full p-1";
  } else if (badgeType == "therapy") {
    icon = "/assets/icons/physical_therapy-icon.svg";
    label = "physical-therapy";
    description = "Fisioterapia";
    styles = "sm:w-[140px] sm:bg-[#FFBCE4] text-blue_gray-700";
    img_styles = "bg-[#FFBCE4] sm:bg-inherit rounded-full p-1";
  } else if (badgeType == "cash") {
    icon = "/assets/icons/cash-icon.svg";
    label = "cash";
    description = "Efectivo";
    styles = "sm:w-[140px] sm:bg-[#BCFFE3]";
    img_styles = "bg-[#BCFFE3] sm:bg-inherit rounded-full p-1";
  } else if (badgeType == "paid") {
    icon = "/assets/icons/done-icon.svg";
    label = "paid";
    description = "Pagada";
    styles = "sm:w-[140px] sm:bg-[#BCFFC3] text-blue_gray-700";
    img_styles = "bg-[#BCFFC3] sm:bg-inherit rounded-full p-1";
  } else if (badgeType == "topay") {
    icon = "/assets/icons/pending-icon.svg";
    label = "to-pay";
    description = "Pago Pte.";
    styles = "sm:w-[140px] sm:bg-[#FFD0BC] text-blue_gray-700";
    img_styles = "bg-[#FFD0BC] sm:bg-inherit rounded-full p-1";
  } else if (badgeType == "completed") {
    icon = "/assets/icons/stethoscope_check_white-icon.svg";
    label = "completed";
    description = "Completada";
    styles =
      "sm:w-[140px] bg-[#455A64] text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#303f46] duration-300";
    img_styles = "p-[5px]";
  } else if (badgeType == "start") {
    icon = "/assets/icons/play_white-icon.svg";
    label = "start";
    description = "Comenzar";
    styles =
      "sm:w-[140px] bg-[#46B251] text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#388d40] duration-300";
    img_styles = "p-[5px]";
  } else if (badgeType == "schedule") {
    icon = "/assets/icons/schedule_white-icon.svg";
    label = "schedule";
    description = "Agendar cita";
    styles =
      "sm:w-[140px] bg-[#0745CB] text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#05349a] duration-300";
    img_styles = "p-[6px]";
  } else if (badgeType == "appointment") {
    icon = "/assets/icons/access_time-icon.svg";
    label = "appointment";
    description = timeLapse;
    styles = "sm:w-[155px] text-blue_gray-700";
    img_styles = "bg-[#C3D7EE] rounded-full p-1";
  } else if (badgeType == "address") {
    icon = "/assets/icons/home_health-icon.svg";
    label = "consulting-address";
    description = consultingAddress;
    styles = "sm:w-[155px] text-blue_gray-700";
    img_styles = "bg-[#C3D7EE] rounded-full p-1";
  } else if (badgeType == "delete") {
    icon = "/assets/icons/cancel-icon.svg"; //
    label = "delete-appointment";
    description = "Borrar Cita";
    styles =
      "sm:w-[155px] text-[#b32606] transition ease-in-out delay-50 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-[#b32606] duration-300";
    img_styles = "bg-[#b32606] rounded-full p-1";
  }

  return (
    <div
      className={clsx(
        "flex flex-row gap-1 justify-center items-center h-7 px-2 py-1 rounded-full",
        styles
      )}
    >
      <img className={clsx("w-7 h-7", img_styles)} src={icon} alt={label} />
      <p className={clsx("text-[14px] font-normal text-start max-w-[108px]")}>
        {description}
      </p>
    </div>
  );
}
