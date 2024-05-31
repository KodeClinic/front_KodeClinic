"use client";

import NavBarSpe from "@/components/NavBarSpe";
import Contact_info from "@/components/New_pacient/Contact_info";
import Emergency_info from "@/components/New_pacient/Emergency_info";
import Personal_info from "@/components/New_pacient/Personal_info";
import Pagination from "@mui/material/Pagination";
import clsx from "clsx";

import { useEffect, useState } from "react";
import { NewPacientContext } from "@/context/NewPacientContext";
import { completeInformation } from "@/services/specialists";
import { useRouter } from "next/router";

export default function New_pacient() {
  const [token, setToken] = useState(null);
  const [specialistId, setId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  //Estados para construir el context
  const [newPxData, setNewPxData] = useState([]);
  const [finalPxData, setFinalPxData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const specialistId = localStorage.getItem("id");
    setToken(token);
    setId(specialistId);
    // }
    if (!token) {
      alert("Inicio de sesión expirado, por favor inicie sesión antes");
      router.push("/LogIn");
    }
  }, []);

  const submitData = () => {
    setFinalPxData(newPxData);
    completeInformation({
      data: newPxData,
      specialistId: specialistId,
      token: token,
    });
    setNewPxData("");
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const renderCard = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <section className="bg-background">
            <Personal_info />
          </section>
        );

      case 2:
        return (
          <section className="bg-background">
            <Contact_info />
          </section>
        );
      case 3:
        return (
          <section className="bg-background">
            <Emergency_info />
          </section>
        );
    }
  };

  return (
    <section
      className={clsx("bg-background", "grid place-items-center relative")}
    >
      <NewPacientContext.Provider
        value={{
          newPxData,
          setNewPxData,
          finalPxData,
          setFinalPxData,
          submitData,
          specialistId,
        }}
      >
        <NavBarSpe pageName={"Añadir Paciente"} />
        {renderCard(currentPage)}
        <Pagination
          className="absolute bottom-10 sm:left-[500px]"
          count={3}
          page={currentPage}
          onChange={handlePageChange}
        ></Pagination>
      </NewPacientContext.Provider>
    </section>
  );
}
