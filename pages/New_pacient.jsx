import NavBar from "@/components/NavBar";
import Contact_info from "@/components/New_pacient/Contact_info";
import Emergency_info from "@/components/New_pacient/Emergency_info";
import Personal_info from "@/components/New_pacient/Personal_info";


export default function New_pacient() {
  return (
    <main className="bg-background">
      <NavBar />
      <Personal_info />
      <Contact_info />
      <Emergency_info />

    </main>
  );
}
