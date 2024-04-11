import LandinPage from "./LandinPage";
import DashboardSpe from "./DashboardSpe";
import DashboardPat from "./DashboardPat";
import clsx from "clsx";
import LoginPage from "./LogIn";
import Login from "./LogIn";
import New_pacient from "./New_pacient";

export default function Home() {
  return (
    <main>
      {/* <LandinPage /> */}
      {/* <DashboardSpe /> */}
      <DashboardPat />
      {/* <LoginPage /> */}
      <New_pacient />
    </main>
  );
}
