import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { ClinicalHistoriesContext } from "@/context/ClinicalHistoriesContext";

export default function PatientClinicalHistory(appointmentId) {
  const router = useRouter();
  const patientId = router.query.patient_id;
  const specialistId = router.query.id;
  const { setCurrentPage, setAppointmentId } = useContext(
    ClinicalHistoriesContext
  );

  return (
    <section>
      <p>Desde Clinical HIsotirasd</p>
      <div className={clsx("flex justify-between pt-10")}>
        <button
          onClick={() => {
            setCurrentPage(1);
          }}
          className={clsx(
            "bg-blue_gray-50 font-semibold rounded-md text-blue_gray-500 py-2 px-3 text-lg"
          )}
        >
          Cancelar
        </button>
        <button
          // onClick={toggleModal}
          className={clsx(
            "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
          )}
        >
          Actualizar
        </button>
      </div>
    </section>
  );
}
