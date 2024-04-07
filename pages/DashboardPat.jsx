import NavBarPat from "@/components/NavBarPat";
import clsx from "clsx";
import PatientBand from "@/components/PatientBand";
import SliderPatient from "@/components/SliderPatient";

const data = [
  {
    id: "1",
    name: "Patricia Hernandez",
    gender: "female",
    consultType: "valoration",
    paymentType: "cash",
    paymentStatus: "paid",
    timeLapse: "9:00 - 10:00 am",
    consultingAddress: "Consultorio",
    appointmentStatus: "completed",
  },
  {
    id: "2",
    name: "Armando Félix",
    gender: "male",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    timeLapse: "10:00 - 11:00 am",
    consultingAddress: "Consultorio",
    appointmentStatus: "start",
  },
  {
    id: "3",
    name: "Francisco Gonzalez",
    gender: "male",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    timeLapse: "11:00 - 12:00 pm",
    consultingAddress: "Consultorio",
    appointmentStatus: "start",
  },
  {
    id: "4",
    name: "Ericka Martinez",
    gender: "male",
    consultType: "therapy",
    paymentType: "cash",
    paymentStatus: "topay",
    timeLapse: "12:00 - 13:00 pm",
    consultingAddress: "Consultorio",
    appointmentStatus: "start",
  },
];

export default function DashboardPat() {
  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarPat pageName={"Home"} />
      <PatientBand
        name_Patient={"Juan José Martinez Perez"}
        gender_Patient={"male"}
        name_Specialist={"Xavier Medina Flores Reinoso"}
        cel_Specialist={"33 12 34 56 89"}
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
          <SliderPatient props={data} />
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
        </div>
      </section>
    </main>
  );
}
