import NavBarSpe from "@/components/NavBarSpe";
import SpecialistCard from "@/components/SpecialistCard";
import clsx from "clsx";
import { useEffect, useState } from "react";
// import { useFormik } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";
import { getUserById } from "@/services/users/auth";
import PatientCard from "@/components/PatientCard";
import { getPatients } from "@/services/specialists";
// import PatientsDischarged from "@/components/PatientsDischarged";

export default function PatientList() {
  const router = useRouter();
  const [specialistData, setSpecialistData] = useState({});
  const [patientList, setPatientList] = useState([]);
  // const [selectPatientList, setSelectPatientList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    fetchData(id, token);
  }, []);

  const fetchData = async (id, token) => {
    try {
      const responseUser = await getUserById({
        id: id,
        token: token,
      });
      const responseUserJSON = await responseUser.json();
      setSpecialistData(responseUserJSON.data);

      const responsePatients = await getPatients({
        specialistId: id,
        token: token,
      });
      const responsePatientsJSON = await responsePatients.json();

      setPatientList(responsePatientsJSON.data);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo2"
      );
      router.push("/LogIn");
    }
  };

  return (
    <main className={clsx("bg-background w-full min-h-screen")}>
      <NavBarSpe pageName={"Lista de Pacientes"} />

      <SpecialistCard
        name={specialistData?.name + " " + specialistData?.lastName}
        gender={specialistData?.gender}
        email={specialistData?.email}
        cel={specialistData?.cellphone}
        cedProf={specialistData?.specialistInformation?.medicalLicense}
      />

      <section
        className={clsx(
          "pt-7 px-4 min-[980px]:pt-14",
          "sm:px-14 min-[980px]:px-20",
          "lg:max-w-[1440px] lg:m-auto",
          "pb-14"
        )}
      >
        <div
          className={clsx(
            "drop-shadow-md rounded-[20px]",
            "lg:max-w-[1440px] lg:m-auto",
            "bg-white w-full",
            "p-7"
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center sm:flex-row sm:justify-between pb-7"
            )}
          >
            <p className="text-xl font-medium  text-main_text min-[980px]:text-2xl ">
              Mis pacientes
            </p>
            <div className="flex items-center border-2 border-primary_main py-1 rounded-lg ">
              <input
                type="text"
                placeholder="Buscar Paciente"
                className="max-w-[90%] w-full  py-1 focus:outline-none pl-3  mr-2"
              />
              <img
                src="/assets/icons/Browser.png"
                alt="Buscador"
                className="px-2"
              />
            </div>
          </div>
          <div
            className={clsx(
              "grid grid-cols-1 gap-4 py-2 lg:grid-cols-3 mb-4 overflow-auto"
            )}
          >
            {patientList.map((patient) => {
              let fullName = `${patient.patientName} ${patient.patientLastName}`;
              return (
                <Link
                  href={{
                    pathname: "/PatientDetails/[patient_id]",
                    query: { patient_id: patient.patientID },
                  }}
                  key={`link-${patient.patientID}`}
                >
                  <PatientCard
                    key={`card-${patient.patientID}`}
                    name={fullName}
                    gender={patient.patientGender}
                    number={patient.patientCellphone}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
