import NavBarPat from "@/components/NavBarPat";
import clsx from "clsx";
import PatientBand from "@/components/PatientBand";
import SliderPatient from "@/components/SliderPatient";
import AppointmentListPatient from "@/components/AppointmentListPatient";
// import EditInformation from "@/components/EditInformation";
import { useEffect, useState } from "react";
import { getUserById } from "@/services/users/auth";
import { getAppointmentsbyPatient } from "@/services/appointments";

export default function DashboardPat() {
  const [pxData, setPxData] = useState({});
  const [specialistData, setSpecialistData] = useState({});
  const [appointments, setAppointments] = useState([]);

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
      setAppointments(responseAppointmentsPxJSON.data);
      // console.log("Información de Citas: ", responseAppointmentsPxJSON.data);
    } catch (error) {
      alert("Ocurrio un error");
    }
  };

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setToken(token);
    setId(id);
    // }

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
          <SliderPatient props={appointments} />
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
            "w-full drop-shadow-md px-6 py-4 min-[980px]:px-7",
            "bg-white rounded-[20px] py-4 flex flex-col gap-3"
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

          <AppointmentListPatient props={appointments} />
        </div>
      </section>
    </main>
  );
}
