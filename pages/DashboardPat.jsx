import NavBarPat from "@/components/NavBarPat";
import EditInformation from "@/components/EditInformation";
import { Fragment } from "react";

export default function DashboardEsp() {
  return (
    <Fragment>
    <div>
      <div className=" p-10 text-center">
        <h1 className="text-3xl">
          Create a modal for the patient information
        </h1>
        <button className="text-white bg-blue_button hover:bg-blue_button font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          Information
        </button>
      </div>
    </div>

    <EditInformation />

    </Fragment>
  );
}
