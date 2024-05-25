import clsx from "clsx";
import Badge from "./Badge";
import Link from "next/link";

export default function AppointmentCard({ props }) {
  const {
    patientId,
    consultType,
    paymentType,
    paymentStatus,
    timeLapse,
    consultingAddress,
    status,
    _id,
  } = props;

  let fullName = `${patientId.name} ${patientId.lastName}`;
  let gender = patientId.gender;

  return (
    <div
      className={clsx(
        "bg-white drop-shadow-md",
        "py-3 px-4",
        "border border-blue_gray-300 rounded-lg flex flex-col items-center justify-center gap-3",
        "min-[980px]:items-start min-[980px]:max-w-[880px]"
      )}
    >
      {/* Nombre del paciente */}
      <div
        className={clsx(
          "flex flex-col items-center gap-1",
          "min-[980px]:flex-row "
        )}
      >
        {gender == "male" ? (
          <img
            className={clsx("w-7 h-7 bg-[#C3D7EE] rounded-full p-1")}
            src="assets/icons/man-icon.svg"
            alt="male-patient"
          />
        ) : (
          <img
            className={clsx("w-7 h-7 bg-[#C3D7EE] rounded-full p-1")}
            src="assets/icons/woman-icon.svg"
            alt="female-patient"
          />
        )}

        <span
          className={clsx(
            "text-blue_gray-700 text-[16px] font-bold",
            "min-[980px]:text-[20px]"
          )}
        >
          {fullName}
        </span>
      </div>

      {/* Informacion de la cita */}
      <div
        className={clsx(
          "flex flex-col items-center w-full gap-2",
          "min-[980px]:flex-row min-[980px]:justify-between"
        )}
      >
        {/* tipo de cita */}
        <div>
          <Badge
            badgeType={consultType}
            timeLapse={""}
            consultingAddress={""}
          />
        </div>

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

        {/* Pagos */}
        <div>
          <Badge
            badgeType={paymentStatus}
            timeLapse={""}
            consultingAddress={""}
          />
        </div>

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
        {/* Comenzar o completada */}
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
        <Link
          href={{
            pathname: "/MedicalRecords/[patient_id]",
            query: { patient_id: _id },
          }}
        >
          <Badge badgeType={status} timeLapse={""} consultingAddress={""} />
        </Link>
      </div>
    </div>
  );
}
