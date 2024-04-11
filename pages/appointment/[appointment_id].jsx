import { useRouter } from "next/router";
import NavBarPat from "@/components/NavBarPat";
import PatientBand from "@/components/PatientBand";

const props = {
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
};

export default function AppointmentDetails() {
  const router = useRouter();
  const appointmentId = router.query.appointment_id;
  return (
    <main>
      <NavBarPat pageName={"Home > Detalles de la Cita"} />
      <PatientBand
        patient_name={props.patient_name}
        patient_gender={props.patient_gender}
        specialist_name={props.specialist_name}
        specialist_gender={props.specialist_gender}
        cel_Specialist={"33 12 34 56 89"}
      />
      <section>
        <p>{`Detalles de la cita ${appointmentId}`}</p>
      </section>
    </main>
  );
}
