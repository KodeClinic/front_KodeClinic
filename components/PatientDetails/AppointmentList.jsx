import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { getAppointmentsbyPatient } from "@/services/appointments";
import { multiStepContext } from "@/context/MedicalRecordStepContext";
import Badge from "../Badge";

export default function AppointmentList() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const [appointmentList, setAppointmentList] = useState([]);
  const [token, setToken] = useState(null);

  const { setCurrentPage, setAppointmentId } = useContext(multiStepContext);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    setToken(token);
    // }

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    getAppointments(token, patientId);
  }, []);

  const getAppointments = async (token, patientId) => {
    try {
      const response = await getAppointmentsbyPatient({
        patientId: patientId,
        token: token,
      });
      const dataJSON = await response.json();
      setAppointmentList(dataJSON.data);
    } catch (error) {
      // setEmptyRecords(true);
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push({ pathname: "/DashboardSpe" });
    }
  };

  return (
    <div>
      <h1 className="pb-[14px] text-center text-xl font-semibold text-green_title sm:text-3xl sm:pb-11">
        Historias Clínicas
      </h1>
      <div
        className={clsx(
          " flex flex-row  justify-start overflow-auto rounded-md shadow-md min-[1110px]:w-fit"
        )}
      >
        <table className={clsx("rounded-md shadow-md")}>
          {/* head */}
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
              <th
                className={clsx(
                  "text-[16px] sm:text-[18px] font-bold min-w-[174px] p-4 text-start tracking-wide text-nowrap"
                )}
              >
                Estatus
              </th>
              <th
                className={clsx(
                  "text-[16px] sm:text-[18px] font-bold min-w-[174px] p-4 text-start tracking-wide text-nowrap"
                )}
              >
                Ver Detalles
              </th>
            </tr>
          </thead>
          <tbody className={clsx("divide-y divide-blue_gray-100")}>
            {appointmentList.map((appointment, index) => {
              let date = `${appointment.date.day}/${appointment.date.month}/${appointment.date.year}`;
              let statusName = "";

              if (appointment.status === "completed") {
                statusName = "Completada";
              } else if (appointment.status === "start") {
                statusName = "Pendiente";
              }

              return (
                <tr key={`tr-${index}`}>
                  <td
                    className={clsx(
                      "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {date}
                  </td>
                  <td
                    className={clsx(
                      "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {appointment.timeLapse}
                  </td>
                  <td
                    className={clsx(
                      "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    <Badge
                      badgeType={appointment.consultType}
                      timeLapse={""}
                      consultingAddress={""}
                    />
                  </td>
                  <td
                    className={clsx(
                      "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {appointment.consultingAddress}
                  </td>
                  <td
                    className={clsx(
                      "text-[16px] sm:text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {statusName}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setCurrentPage(2);
                        setAppointmentId(appointment._id);
                      }}
                      className={clsx(
                        "text-green_button font-bold w-[165px] text-center border-2 border-green_button px-6 py-1 rounded-md cursor-pointer text-[16px]",
                        "hover:text-white hover:border-none hover:bg-green_button"
                      )}
                    >
                      Ver Detalle
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
