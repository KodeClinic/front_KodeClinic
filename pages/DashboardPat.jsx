import NavBarPat from "@/components/NavBarPat";
import clsx from "clsx";
import PatientBand from "@/components/PatientBand";

export default function DashboardPat() {
  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarPat pageName={"Home"} />
      <PatientBand
        name_Patient={"Juan José Martinez Perez"}
        gender_Patient={"male"}
        name_Specialist={"Xavier Medina Flores Reinoso"}
        email_Specialist={"mart.juan@gmail.com"}
        cel_Specialist={"33 12 34 56 89"}
        cedProf={"12345678"}
      />
      <section
        className={clsx(
          "px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto",
          "py-5"
        )}
      >
        <div className={clsx("bg-white rounded-[20px] drop-shadow-md")}>
          <p>Próximas Citas</p>
        </div>
      </section>
      <section
        className={clsx(
          "px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto",
          "py-5"
        )}
      >
        <div className={clsx("bg-white rounded-[20px] drop-shadow-md")}>
          <p>Historial de Citas</p>
        </div>
      </section>
    </main>
  );
}
