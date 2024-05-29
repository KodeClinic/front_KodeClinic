import NavBarPat from "@/components/NavBarPat";
import clsx from "clsx";
import PatientBand from "@/components/PatientBand";
import SliderPatient from "@/components/SliderPatient";
import AppointmentListPatient from "@/components/AppointmentListPatient";
import EditInformation from "@/components/EditInformation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { pxInformation } from "@/services/patients";
import { getUserById } from "@/services/users/auth";
import { useRouter } from "next/router";

const dataSpecialist = {
  name: "Xavier",
  lastName: "Hernandez Torres",
  birthDate: "20/12/1980",
  gender: "male",
  contactPhone: 3336393538,
  email: "xavier@gmail.com",
  adress: "Av. Revolución 1580",
  colony: "Americana",
  state: "Jalisco",
  license: "12345678",
  patientList: ["id_patient_1", "id_patient_2", "id_patient_3"],
};

const dataPatient = {
  specialist: "id_specialist_1",
  medicalRecord: "id_medicalRecord_1",
  name: "Roberto ",
  lastName: "Cisneros Ávila",
  birthDate: "20/12/1996",
  gender: "male",
  ocupation: "Abogado",
  bloodType: "O+",
  religion: "Católico",
  contactPhone: 3345867898,
  email: "roberto@gmail.com",
  adress: "Ladron de Guevara 158",
  colony: "Alpes",
  state: "Oaxaca",
  emergencyContact: [
    {
      emergencyName1: "Raimundo Cisneros",
      phoneContact1: 3335363837,
      relationship: "Padre",
    },
    {
      emergencyName1: "Maria Cisneros",
      phoneContact1: 3336383230,
      relationship: "Madre",
    },
  ],
};

const nextAppointmentData = [
  {
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "9:00 - 10:00 am",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 20,
      W: 1,
    },
    consultingAddress: "Consultorio",
    consultType: "valoration",
    paymentType: "cash",
    paymentStatus: "paid",
    appointmentStatus: "completed",
    condition: "Fisura",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "10:00 - 11:00 am",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 21,
      W: 2,
    },
    consultingAddress: "Consultorio",
    consultType: "valoration",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "completed",
    condition: "Fisura",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "10:00 - 11:00 am",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 22,
      W: 3,
    },
    consultingAddress: "Consultorio",
    consultType: "valoration",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "completed",
    condition: "Fractura",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "11:00 - 12:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 23,
      W: 4,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "12:00 - 13:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 24,
      W: 5,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "12:00 - 13:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 27,
      W: 1,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "12:00 - 13:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 28,
      W: 2,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
];

const historyAppointmentData = [
  {
    id: "1",
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "9:00 - 10:00 am",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 20,
      W: 1,
    },
    consultingAddress: "Consultorio",
    consultType: "valoration",
    paymentType: "cash",
    paymentStatus: "paid",
    appointmentStatus: "completed",
    condition: "Fisura",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    id: "2",
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "10:00 - 11:00 am",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 21,
      W: 2,
    },
    consultingAddress: "Consultorio",
    consultType: "valoration",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "completed",
    condition: "Fisura",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    id: "3",
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "10:00 - 11:00 am",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 22,
      W: 3,
    },
    consultingAddress: "Consultorio",
    consultType: "valoration",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "completed",
    condition: "Fractura",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    id: "4",
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "11:00 - 12:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 23,
      W: 4,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    id: "5",
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "12:00 - 13:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 24,
      W: 5,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    id: "6",
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "12:00 - 13:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 27,
      W: 1,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
  {
    id: "7",
    patient_id: "12345",
    patient_name: "Patricia Hernandez",
    patient_gender: "female",
    specialist_id: "1",
    specialist_name: "Xavier Medina Flores Reinoso",
    specialist_gender: "male",
    timeLapse: "12:00 - 13:00 pm",
    appointment_date: {
      y: 2023,
      M: 10,
      D: 28,
      W: 2,
    },
    consultingAddress: "Consultorio",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    appointmentStatus: "start",
    condition: "",
    clinic_history: {
      evaluation: {},
      treatment: {},
      clinic_notes: {},
    },
  },
];

const [pacientData, setPacientData] = useState({});
const [Date, setDate] = useState(dayjs());
const [appointments, setAppointments] = useState([]);

const fetchDataPx = async (id, token) => {
  try {
    const responsePx = await getUserById({
      id: id,
      token: token,
    });
    const responseUserJSON = await responsePx.json();
    console.log(responseUserJSON.data);
    setPacientData(responseUserJSON.data);

    const responseAppointments = await getAppointmentsbyPatient({
      patientId: id,
      token: token,
      year: Date.$y,
      month: Date.$M + 1,
      day: Date.$D,
    });

    const responseAppointmentsJSON = await responseAppointments.json();
    setAppointments(responseAppointmentsJSON.data);
  } catch (error) {
    console.log(error);
    alert(
      "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
    );
  }
};

useEffect(() => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  /*if (!token) {
    alert(
      "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
    );
    router.push("/LogIn");
  }*/
  fetchDataPx(id, token);
}, []);

export default function DashboardPat() {
  const [showModal, setShowModal] = useState(false);

  const mostrarModal = (show) => {
    setShowModal(show);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [pxData, setPxData] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const router = useRouter();
  const dataQuery = router.query;

  const fetchData = async (dataQuery, token) => {
    try {
      const responseUser = await getUserById({
        id: dataQuery.id,
        token: token,
      });
      const responseUserJSON = await responseUser.json();
      setPxData(responseUserJSON.data);
    } catch (error) {
      alert("Ocurrio un error");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Ocurrio un problema");
    }
    fetchData(dataQuery, token);
  }, []);

  console.log(dataQuery);

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarPat pageName={"Home"} />
      <PatientBand
        patient_name={dataPatient.name}
        patient_gender={dataPatient.gender}
        specialist_name={dataSpecialist.name}
        specialist_gender={dataSpecialist.gender}
        cel_Specialist={dataSpecialist.contactPhone}
        mostrarModal={mostrarModal}
        closeModal={closeModal}
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
          <SliderPatient props={nextAppointmentData} />
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

          <AppointmentListPatient props={historyAppointmentData} />
        </div>
      </section>
      <EditInformation isVisible={showModal} closeModal={closeModal} />
    </main>
  );
}
