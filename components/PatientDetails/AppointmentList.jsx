import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { getAppointmentsbyPatient } from "@/services/appointments";
import { ClinicalHistoriesContext } from "@/context/ClinicalHistoriesContext";

export default function AppointmentList() {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const specialistId = router.query.id;
  const [appointmentList, setAppointmentList] = useState([]);

  const { setCurrentPage, setAppointmentId } = useContext(
    ClinicalHistoriesContext
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

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
      console.log("fecth appointments", dataJSON.data);
      // setSectionForm(dataJSON.data[0].screens[1]);
      // // console.log(dataJSON.data[0]);
      // setSectionName(dataJSON.data[0].screens[0].title);
      // setInputList(dataJSON.data[0].screens[0].inputList);
      // setUserData(dataJSON.data[1]);
    } catch (error) {
      // setEmptyRecords(true);
      // alert(
      //   "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      // );
    }
  };

  const goDetails = () => {};

  return (
    <div>
      <h1 className="pb-[14px] text-start text-xl font-semibold text-green_title sm:text-3xl sm:pb-11">
        Citas
      </h1>
      <div>
        <table className={clsx("")}>
          {/* head */}
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
                  "text-[18px] font-bold w-[174px] p-4 text-start tracking-wide text-nowrap"
                )}
              >
                Ver Detalles
              </th>
            </tr>
          </thead>
          <tbody className={clsx("divide-y divide-blue_gray-100")}>
            {appointmentList.map((appointment) => {
              let date = `${appointment.date.day}/${appointment.date.month}/${appointment.date.year}`;
              let consultName = "";

              if (appointment.consultType === "valoration") {
                consultName = "Valoración";
              } else if (appointment.consultType === "therapy") {
                consultName = "Terápia";
              }

              return (
                <tr>
                  <td
                    className={clsx(
                      "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {date}
                  </td>
                  <td
                    className={clsx(
                      "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {appointment.timeLapse}
                  </td>
                  <td
                    className={clsx(
                      "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {consultName}
                  </td>
                  <td
                    className={clsx(
                      "text-[18px] text-blue_gray-700 font-normal p-4 text-nowrap"
                    )}
                  >
                    {appointment.consultingAddress}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setCurrentPage(2);
                        console.log("appointmentId es:", appointment._id);
                        setAppointmentId(appointment._id);
                      }}
                      className={clsx(
                        "text-green_button font-bold w-[165px] text-center border-2 border-green_button px-6 py-1 rounded-md cursor-pointer"
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
