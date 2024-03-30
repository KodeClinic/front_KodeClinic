import clsx from "clsx";

export default function Badge({ badgeType }) {
  let { icon, label, description, styles } = badgeType;

  if (badgeType == "valoration") {
    icon = "assets/icons/stethoscope-icon.svg";
    label = "valoration";
    description = "Valoración";
    styles = "bg-[#DABCFF]";
  } else if (badgeType == "therapy") {
    icon = "assets/icons/physical_therapy-icon.svg";
    label = "physical-therapy";
    description = "Fisioterápia";
    styles = "bg-[#FFBCE4]";
  } else if (badgeType == "cash") {
    icon = "assets/icons/cash-icon.svg";
    label = "cash";
    description = "Efectivo";
    styles = "bg-[#BCFFE3]";
  } else if (badgeType == "paid") {
    icon = "assets/icons/done-icon.svg";
    label = "paid";
    description = "Pagada";
    styles = "bg-[#BCFFC3]";
  } else if (badgeType == "topay") {
    icon = "assets/icons/pending-icon.svg";
    label = "to-pay";
    description = "P. Consultorio";
    styles = "bg-[#FFD0BC]";
  } else if (badgeType == "completed") {
    icon = "assets/icons/stethoscope_check_white-icon.svg";
    label = "completed";
    description = "Completada";
    styles = "bg-[#455A64] text-white";
  } else if (badgeType == "start") {
    icon = "assets/icons/play_white-icon.svg";
    label = "start";
    description = "Comenzar";
    styles = "bg-[#46B251] text-white";
  } else if (badgeType == "appointment") {
    icon = "assets/icons/schedule_white-icon.svg";
    label = "appointment";
    description = "Agendar cita";
    styles = "bg-[#0745CB] text-white";
  }

  return (
    <span
      className={clsx(
        "flex flex-row gap-1 justify-center items-center w-[140px] h-7 px-2 py-1 rounded-full",
        styles
      )}
    >
      <img src={icon} alt={label} />
      <p className={clsx("text-[14px] font-normal text-center w-[104px]")}>
        {description}
      </p>
    </span>
  );
}
