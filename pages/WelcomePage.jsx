import ModalCard from "@/components/ModalCard";
import NavBar from "@/components/NavBar";
import clsx from "clsx";

export default function WelcomePage() {
  return (
    <>
      <NavBar></NavBar>
      <main className={clsx("bg-background", "w-full", "p-10", "pt-24")}>
        <ModalCard> </ModalCard>
      </main>
    </>
  );
}
