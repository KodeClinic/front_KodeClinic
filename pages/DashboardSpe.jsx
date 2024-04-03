import React from "react";
import clsx from "clsx";
import NavBarSpe from "@/components/NavBarSpe";
import SpecialistCard from "@/components/SpecialistCard";
import AccordionAppointments from "@/components/AccordionAppointments";
import AccordionFreeAgenda from "@/components/AccordeonFreeAgenda";
import { useState } from "react";

// Para utilizar el calendario
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import es from "dayjs/locale/es";
dayjs.locale(es);
// import localeData from "dayjs/plugin/localeData";
// dayjs.extend(localeData);

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
];

const freeAgendaData = [
  {
    id: "65",
    timeLapse: "9:00 - 10:00 am",
  },
  {
    id: "66",
    timeLapse: "9:00 - 10:00 am",
  },
  {
    id: "67",
    timeLapse: "9:00 - 10:00 am",
  },
  {
    id: "68",
    timeLapse: "9:00 - 10:00 am",
  },
];

export default function DashboardEsp() {
  const [Date, setDate] = useState(dayjs());

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarSpe pageName={"Agenda"} />

      <SpecialistCard
        name={"Juan José Martinez Perez"}
        gender={"male"}
        email={"mart.juan@gmail.com"}
        cel={"33 12 34 56 89"}
        cedProf={"12345678"}
      />
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
            <AccordionAppointments props={data} />
          </div>
          <div>
            <AccordionFreeAgenda props={freeAgendaData} />
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={Date}
              onChange={(newValue) => setDate(newValue)}
            />
          </LocalizationProvider>
        </div>
      </section>
    </main>
  );
}
