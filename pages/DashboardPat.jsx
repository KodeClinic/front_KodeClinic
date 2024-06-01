import NavBarPat from "@/components/NavBarPat";
import clsx from "clsx";
import PatientBand from "@/components/PatientBand";
import SliderPatient from "@/components/SliderPatient";
import AppointmentListPatient from "@/components/AppointmentListPatient";
import AppointmentCard_Patient from "@/components/AppointmentCard_Patient";
import { useEffect, useState } from "react";
import { getUserById } from "@/services/users/auth";
import { getAppointmentsbyPatient } from "@/services/appointments";

export default function DashboardPat() {
  const [pxData, setPxData] = useState({});
  const [specialistData, setSpecialistData] = useState({});
  const [appointmentsPending, setAppointmentsPending] = useState([]);
  const [appointmentsCompleted, setAppointmentsCompleted] = useState([]);

  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  const fetchDataPx = async (id, token) => {
    try {
      //data del Paciente
      const responsePatient = await getUserById({
        id: id,
        token: token,
      });
      const responsePatientJSON = await responsePatient.json();
      setPxData(responsePatientJSON.data);

      //data del Especialista
      const responseSpecialist = await getUserById({
        id: responsePatientJSON.data.patientInformation.specialistId,
        token: token,
      });
      const responseSpecialistJSON = await responseSpecialist.json();
      setSpecialistData(responseSpecialistJSON.data);

      //Data de las citas del Paciente
      const responseAppointmentsPx = await getAppointmentsbyPatient({
        patientId: id,
        token: token,
      });
      const responseAppointmentsPxJSON = await responseAppointmentsPx.json();
      console.log(responseAppointmentsPxJSON.data);

      if (responseAppointmentsPxJSON.data.length == 1) {
        responseAppointmentsPxJSON.data[0].status == "start" &&
          setAppointmentsPending(responseAppointmentsPxJSON.data[0]);

        responseAppointmentsPxJSON.data[0].status == "completed" &&
          setAppointmentsCompleted([responseAppointmentsPxJSON.data[0]]);
      } else if (responseAppointmentsPxJSON.data.length > 1) {
        responseAppointmentsPxJSON.data.forEach((appointment) => {
          appointment.status == "start" &&
            setAppointmentsPending([...appointmentsPending, appointment]);

          appointment.status == "completed" &&
            setAppointmentsCompleted([...appointmentsPending, appointment]);
        });
      }
    } catch (error) {
      alert("Ocurrio un error");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setToken(token);
    setId(id);

    if (!token) {
      alert("Ocurrio un problema");
    }
    fetchDataPx(id, token);
  }, []);

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarPat pageName={"Home"} />
      <PatientBand
        patient_name={pxData.name}
        patient_lastname={pxData.lastName}
        patient_gender={pxData.gender}
        patientbirthdate={pxData.birthDate}
        specialist_name={`${specialistData.name} ${specialistData.lastName}`}
        specialist_gender={specialistData.gender}
        cel_Specialist={specialistData.cellphone}
      />

      {/* Proximas Citas */}
      <section
        className={clsx(
          "px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto",
          "py-5"
        )}
      >
        <div
          className={clsx(
            "flex gap-5",
            "w-full drop-shadow-md px-6 pt-4 pb-8 min-[980px]:px-7",
            "bg-white rounded-[20px] py-4 flex flex-col gap-3"
          )}
        >
          <p
            className={clsx(
              "text-xl text-center font-medium text-green_title",
              "min-[980px]:text-2xl min-[980px]:text-start"
            )}
          >
            Proximas citas
          </p>
          {appointmentsPending.length == 0 && (
            <p
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              No cuentas con próximas citas, por favor contacta a tu
              Especialista para agendar una nueva.
            </p>
          )}
          {[appointmentsPending].length == 1 && (
            <AppointmentCard_Patient
              key={"appointment-1"}
              props={appointmentsPending}
            />
          )}
          {appointmentsPending > 1 && (
            <SliderPatient props={appointmentsPending} />
            // <AppointmentCard_Patient
            //   key={"appointment-1"}
            //   props={appointmentsPending}
            // />
          )}
        </div>
      </section>

      {/* Historial de citas */}
      <section
        className={clsx(
          "px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto",
          "py-5"
        )}
      >
        <div
          className={clsx(
            "flex gap-5",
            "w-full drop-shadow-md px-6 pt-5 pb-6 min-[980px]:px-7",
            "bg-white rounded-[20px] flex flex-col gap-3"
          )}
        >
          <p
            className={clsx(
              "text-xl text-center font-medium text-green_title",
              "min-[980px]:text-2xl min-[980px]:text-start"
            )}
          >
            Historial de citas
          </p>
          {appointmentsCompleted.length == 0 && (
            <p
              className={clsx(
                "text-base font-normal",
                "min-[980px]:text-[18px]"
              )}
            >
              Las citas a las que asistas y se encuentren como completadas las
              podrá visualizar aquí.
            </p>
          )}
          {appointmentsCompleted.length != 0 && (
            <AppointmentListPatient props={appointmentsCompleted} />
          )}
        </div>
      </section>
    </main>
  );
}
