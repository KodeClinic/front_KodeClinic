import NavBar from "@/components/NavBar";
import Contact_info from "@/components/New_pacient/Contact_info";
import Emergency_info from "@/components/New_pacient/Emergency_info";
import Personal_info from "@/components/New_pacient/Personal_info";
import Pagination from "@mui/material/Pagination";
import clsx from "clsx";
import { useState } from "react";

export default function New_pacient() {
  const [currentPage, setCurrentPage] = useState(1);

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
      <NavBar />
      {renderCard(currentPage)}
      <Pagination
        className="absolute bottom-10 sm:left-[500px]"
        count={3}
        page={currentPage}
        onChange={handlePageChange}
      ></Pagination>
    </section>
  );
}
