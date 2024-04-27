import NavBarPat from "@/components/NavBarPat";
import clsx from "clsx";

import CardOfPat from "@/components/CardOfPat";
import * as Tabs from "@radix-ui/react-tabs";

const dataSpecialist = {
  name: "Francisco Xavier",
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
  name: "Roberto Michel",
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
const tabItems = ["Antecedentes Médicos", "Historias Clínicas"];
export default function DashboardPat() {
  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarPat pageName={"Home"} />
      <CardOfPat
        name={"Juan José Martinez Perez"}
        gender={"male"}
        email={"mart.juan@gmail.com"}
        cel={"33 12 34 56 89"}
        work={"Programador"}
        religion={"Católica"}
        address={"Av. Juan de la barrera, #1808 Col. Condesa."}
      />

      {/* Proximas Citas */}

      <section
        className={clsx(
          "px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto",
          "py-5"
        )}
      >
        <div className="">
          <Tabs.Root
            className="max-w-screen-xl mx-auto px-4 md:px-0 "
            defaultValue="Historias Clínicas"
          >
            <Tabs.List
              className="w-full  flex items-center gap-x-3 overflow-x-auto text-sm"
              aria-label="Manage your account"
            >
              {tabItems.map((item, idx) => (
                <Tabs.Trigger
                  key={idx}
                  className="group outline-none py-1.5 border-b-2 border-background text-xl text-gray-500 data-[state=active]:border-blue_button data-[state=active]:text-blue_button"
                  value={item}
                >
                  <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
                    {item}
                  </div>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content value="Historias Clínicas">
              {" "}
              {/* Aqui poner las historias clinicas */}

              <div
                className={clsx(
                  "flex gap-5",
                  "w-full drop-shadow-md px-6 pt-4 pb-8 min-[980px]:px-7",
                  "bg-white rounded-[20px] py-4 flex flex-col gap-3 mt-4"
                )}
              >
                <span className="font-bold text-2xl">Citas</span>
              </div>
            </Tabs.Content>
            <Tabs.Content value="Antecedentes Médicos">
              {" "}
              {/* Aqui poner los antecedentes medicos */}
              <div
                className={clsx(
                  "flex gap-5",
                  "w-full drop-shadow-md px-6 pt-4 pb-8 min-[980px]:px-7",
                  "bg-white rounded-[20px] py-4 flex flex-col gap-3 mt-4"
                )}
              >
                <span className="font-bold text-2xl">
                  Personales patologicos
                </span>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </section>
    </main>
  );
}
