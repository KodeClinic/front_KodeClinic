import NavBarSpe from "@/components/NavBarSpe";
import SpecialistCard from "@/components/SpecialistCard";
import Calendar from "@/components/Calendar";
import clsx from "clsx";

export default function DashboardEsp() {
  return (
    <main className={clsx("bg-background h-full w-full")}>
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
          "flex flex-col gap-6 sm:flex-row",
          "pt-6 px-4 sm:px-14 min-[980px]:px-20"
        )}
      >
        <div className={clsx("bg-white rounded-[20px]")}>
          <Calendar />
        </div>
        <div className={clsx("bg-white rounded-[20px]")}>
          <Calendar />
        </div>
      </section>
    </main>
  );
}
