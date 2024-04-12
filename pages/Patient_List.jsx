import NavBarSpe from "@/components/NavBarSpe";
import SpecialistCard from "@/components/SpecialistCard";
import clsx from "clsx";
import PatientCard from "@/components/PatientCard";
import PatientsDischarged from "@/components/PatientsDischarged";




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

      <section className="flex flex-col items-center justify-start gap-6 px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto">
      <div className="w-full max-w-[820px] flex flex-col gap-6 bg-white rounded-md items-center"> {/* Lista de pacientes */}
          <div className="flex items-center justify-between gap-5 px-6 py-4 rounded-lg flex-col">
            <p className="text-xl">Mis pacientes</p>
            <div className="flex items-center border-2 border-primary_main py-1 rounded-lg w-full">
              <input type="text" placeholder="Buscar Paciente" className="max-w-[90%] w-full py-1 focus:outline-none pl-3  mr-2" />
              <img src="assets/icons/browser.png" alt="Buscador" className="px-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
          </div>
        </div>

        <section
        className={clsx(
          "flex flex-col gap-6 sm:flex-row",
          "pt-6 px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto"
        )}
      > 
      </section>

        <div className="w-full max-w-[412px] bg-white mx-auto rounded-lg"> {/* Pacientes dados de alta */}
          <p className="text-center my-3 text-lg font-semibold">Pacientes dados de Alta Médica</p>
          <div className="flex flex-col gap-4">
            <PatientsDischarged />
            <PatientsDischarged />
            <PatientsDischarged />
            <PatientsDischarged />
          </div>
        </div>

    
      </section>



    </main>
  );
}