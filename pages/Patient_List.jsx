import NavBarSpe from "@/components/NavBarSpe";
import SpecialistCard from "@/components/SpecialistCard";
import clsx from "clsx";
import PatientCard from "@/components/PatientCard";




export default function PatientList() {
  return (
    <main className={clsx("bg-background h-screen w-full")}>
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
          "pt-6 px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto"
        )}
      > 
      </section>

    <section className="px-5  flex ml-20 flex-col bg-white w-[820px] rounded-[20px] ">
        <div className="min-[980px]:flex min-[980px]:flex-row justify-between items-center gap-5 px-6 py-4 bg-white min-[980px]:px-7 ">
            <p className="text-xl">Mis pacientes</p>
            <div className="flex items-center border-2 border-primary_main py-1 rounded-lg">
                <input type="text" placeholder="Buscar Paciente" className="max-w-[90%] w-full py-1 focus:outline-none pl-3  mr-2" />
                <img src="assets/icons/browser.png" alt="Buscador" className="px-2" />
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
        </div>
        
    </section>

    </main>
  );
}