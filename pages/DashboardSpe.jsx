import clsx from "clsx";
import NavBarSpe from "@/components/NavBarSpe";
import SpecialistCard from "@/components/SpecialistCard";
import AccordionAppointments from "@/components/AccordionAppointments";
import AccordionFreeAgenda from "@/components/AccordeonFreeAgenda";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserById } from "@/services/users/auth";
import { getSpecialistAppointments } from "@/services/appointments";
import { getSpecialistAvailability } from "@/services/appointments";
import { DashboardContext } from "@/context/DashboardContex";
import ModalConfirmation from "@/components/ModalConfirmation";
import { deleteAppointment } from "@/services/appointments";

// Para utilizar el calendario
import { esES } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// import { es } from "dayjs/locale/es";
// dayjs.locale(es);
// import localeData from "dayjs/plugin/localeData";
// dayjs.extend(localeData);

export default function DashboardEsp() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  const [Date, setDate] = useState(dayjs());
  const [specialistData, setSpecialistData] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [modal, setModal] = useState(false);
  const [patientRef, setPatientRef] = useState("");
  const [appointmentRef, setAppointmentRef] = useState("");
  const [appointmentStatus, setAppointmentStatus] = useState("");
  const [toDelete, setToDelete] = useState(false);

  const modalPropsStart = {
    title: "Comenzar Cita con el Paciente",
    description: "¿Deseas iniciar con la Colsulta del Paciente?",
    buttonLeft: "Cancelar",
    buttonRight: "Iniciar",
  };
  const modalPropsDelete = {
    title: "Borrar Cita con el Paciente",
    description: "¿Deseas eliminar la Cita del Paciente?",
    buttonLeft: "Cancelar",
    buttonRight: "Eliminar",
  };
  const modalPropsCompleted = {
    title: "Cita del Paciente Completada",
    description:
      "Al dar clic en continuar será redirigido al Expediente Médico del Paciente",
    buttonLeft: "Cancelar",
    buttonRight: "Continuar",
  };

  const propsConfirmation = () => {
    if (appointmentStatus == "completed") {
      return modalPropsCompleted;
    } else if (appointmentStatus == "start") {
      return modalPropsStart;
    } else if (toDelete == true) {
      return modalPropsDelete;
    }
  };

  const toggleModal = () => {
    setPatientRef("");
    setAppointmentRef("");
    setAppointmentStatus("");
    setModal(!modal);
  };

  const handleConfirmation = () => {
    if (appointmentStatus == "completed") {
      router.push({
        pathname: "/PatientDetails/[patient_id]",
        query: { patient_id: patientRef },
      });
    } else if (appointmentStatus == "start") {
      router.push({
        pathname: "/MedicalRecords/[patient_id]",
        query: { patient_id: patientRef, appointment: appointmentRef },
      });
    } else if (toDelete == true) {
      deleteAppointmentFunction(appointmentRef);
    }
  };

  const deleteAppointmentFunction = async (appointmentRef) => {
    try {
      const response = await deleteAppointment({
        appointmentId: appointmentRef,
        token: token,
      });
      setModal(!modal);
      router.reload();
    } catch (error) {
      alert("Imposible borrar la Cita, intentelo más tarde");
    }
  };

  const fetchData = async (id, token) => {
    let dateObjet = {
      year: Date.$y,
      month: Date.$M + 1,
      day: Date.$D,
    };
    try {
      const responseUser = await getUserById({
        id: id,
        token: token,
      });
      const responseUserJSON = await responseUser.json();
      setSpecialistData(responseUserJSON.data);

      const responseAppointment = await getSpecialistAppointments({
        specialistId: id,
        token: token,
        year: Date.$y,
        month: Date.$M + 1,
        day: Date.$D,
      });

      const responseAppointmentJSON = await responseAppointment.json();
      setAppointments(responseAppointmentJSON.data);
      const responseFreeAgenda = await getSpecialistAvailability({
        token: token,
        specialistId: id,
        day: dateObjet.day,
        month: dateObjet.month,
        year: dateObjet.year,
      });

      const responseFreeAgendaJSON = await responseFreeAgenda.json();
      setSchedule(responseFreeAgendaJSON.data);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
  };

  const fetchCalendar = async (
    id,
    token,
    currentDay,
    currentMonth,
    currentYear
  ) => {
    try {
      const responseAppointment = await getSpecialistAppointments({
        specialistId: id,
        token: token,
        year: currentYear,
        month: currentMonth + 1,
        day: currentDay,
      });

      const responseAppointmentJSON = await responseAppointment.json();
      setAppointments(responseAppointmentJSON.data);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
    }
  };

  const getAvailability = async (currentDay, currentMonth, currentYear) => {
    let dateObjet = {
      year: currentYear,
      month: currentMonth + 1,
      day: currentDay,
    };

    try {
      const res = await getSpecialistAvailability({
        token: token,
        specialistId: id,
        data: dateObjet,
      });
      const dataJSON = await res.json();
      setSchedule(dataJSON.data);
    } catch (error) {
      alert("Error al intentar obtener la disponibilidad");
    }
  };

  const selectDate = (newValue) => {
    let currentDay = newValue.date();
    let currentMonth = newValue.month();
    let currentYear = newValue.year();

    setDate(newValue);
    fetchCalendar(id, token, currentDay, currentMonth, currentYear);
    getAvailability(currentDay, currentMonth, currentYear);
  };

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setToken(token);
    setId(id);
    // }

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    fetchData(id, token);
  }, []);

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarSpe pageName={"Agenda"} />

      <SpecialistCard
        name={specialistData?.name + " " + specialistData?.lastName}
        gender={specialistData?.gender}
        email={specialistData?.email}
        cel={specialistData?.cellphone}
        cedProf={specialistData?.specialistInformation?.medicalLicense}
      />
      <DashboardContext.Provider
        value={{
          toggleModal,
          handleConfirmation,
          setPatientRef,
          setAppointmentRef,
          setAppointmentStatus,
          setToDelete,
        }}
      >
        <section
          className={clsx(
            "flex flex-col-reverse gap-6 min-[1200px]:flex-row min-[980px]:justify-between",
            "pt-6 px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto"
          )}
        >
          {/* Lista de Citas */}
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
              Agenda del día {Date.date()}/{Date.month() + 1}/{Date.year()}
            </p>

            <div>
              <AccordionAppointments props={appointments} />
            </div>
            <div>
              <AccordionFreeAgenda props={schedule} />
            </div>
          </div>

          {/* Calendario */}
          <div
            className={clsx(
              "bg-white drop-shadow-md rounded-[20px] py-4 w-full min-[1200px]:w-fit h-fit"
            )}
          >
            <p
              className={clsx(
                "text-xl font-medium text-center text-green_title",
                "min-[980px]:text-2xl min-[980px]:px-7 min-[980px]:text-start"
              )}
            >
              Calendario
            </p>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              localeText={
                esES.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DateCalendar
                value={Date}
                onChange={(newValue) => selectDate(newValue)}
              />
            </LocalizationProvider>
          </div>
        </section>

        {modal && <ModalConfirmation props={propsConfirmation()} />}
      </DashboardContext.Provider>
    </main>
  );
}
