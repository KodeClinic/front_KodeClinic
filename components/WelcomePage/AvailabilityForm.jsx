import clsx from "clsx";
import { useState } from "react";

export default function AvailabilityForm() {
  const [checkMon, setCheckMon] = useState(false);
  const [checkTues, setCheckTues] = useState(false);
  const [checkWed, setCheckWed] = useState(false);
  const [checkThu, setCheckThu] = useState(false);
  const [checkFri, setCheckFri] = useState(false);
  const [checkSat, setCheckSat] = useState(false);
  const [checkSun, setCheckSun] = useState(false);

  const [Monday, setMonday] = useState("");
  const [Monday2, setMonday2] = useState("");

  const [Tuesday, setTuesday] = useState("");
  const [Tuesday2, setTuesday2] = useState("");

  const [Wednesday, setWednesday] = useState("");
  const [Wednesday2, setWednesday2] = useState("");

  const [Thursday, setThursday] = useState("");
  const [Thursday2, setThursday2] = useState("");

  const [Friday, setFriday] = useState("");
  const [Friday2, setFriday2] = useState("");

  const [Saturday, setSaturday] = useState("");
  const [Saturday2, setSaturday2] = useState("");

  const [Sunday, setSunday] = useState("");
  const [Sunday2, setSunday2] = useState("");

  return (
    <div className="flex flex-col justify-start gap-3">
      {/* LUNES */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkMon}
          onChange={() => {
            if (checkMon) {
              setMonday("");
              setMonday2("");
            }
            setCheckMon(!checkMon);
          }}
        />
        <label>Lunes</label>
        <input
          className={clsx("border rounded-md ml-14")}
          type="Time"
          id="Monday"
          disabled={!checkMon}
          value={Monday}
          onChange={(e) => setMonday(e.target.value)}
        />
        <input
          className={clsx("border rounded-md ml-4")}
          type="Time"
          id="Monday2"
          disabled={!checkMon}
          value={Monday2}
          onChange={(e) => setMonday2(e.target.value)}
        />
      </div>

      {/* MARTES */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkTues}
          onChange={() => {
            if (checkTues) {
              setTuesday("");
              setTuesday2("");
            }
            setCheckTues(!checkTues);
          }}
        />
        <label>Martes</label>
        <input
          className={clsx("border rounded-md ml-12")}
          type="Time"
          id="Tuesday"
          disabled={!checkTues}
          value={Tuesday}
          onChange={(e) => setTuesday(e.target.value)}
        />
        <input
          className={clsx("border rounded-md ml-4")}
          type="Time"
          id="Tuesday2"
          disabled={!checkTues}
          value={Tuesday2}
          onChange={(e) => setTuesday2(e.target.value)}
        />
      </div>

      {/* MIERCOLES */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkWed}
          onChange={() => {
            if (checkWed) {
              setWednesday("");
              setWednesday2("");
            }
            setCheckWed(!checkWed);
          }}
        />
        <label>Miercoles</label>
        <input
          className={clsx("border rounded-md ml-5")}
          type="Time"
          id="Wednesday"
          disabled={!checkWed}
          value={Wednesday}
          onChange={(e) => setWednesday(e.target.value)}
        />
        <input
          className={clsx("border rounded-md ml-4")}
          type="Time"
          id="Wednesday2"
          disabled={!checkWed}
          value={Wednesday2}
          onChange={(e) => setWednesday2(e.target.value)}
        />
      </div>

      {/* JUEVES */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkThu}
          onChange={() => {
            if (checkThu) {
              setThursday("");
              setThursday2("");
            }
            setCheckThu(!checkThu);
          }}
        />
        <label>Jueves</label>
        <input
          className={clsx("border rounded-md ml-11")}
          type="Time"
          id="Thursday"
          disabled={!checkThu}
          value={Thursday}
          onChange={(e) => setThursday(e.target.value)}
        />
        <input
          className={clsx("border rounded-md ml-4")}
          type="Time"
          id="Thursday2"
          disabled={!checkThu}
          value={Thursday2}
          onChange={(e) => setThursday2(e.target.value)}
        />
      </div>

      {/* VIERNES */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkFri}
          onChange={() => {
            if (checkFri) {
              setFriday("");
              setFriday2("");
            }
            setCheckFri(!checkFri);
          }}
        />
        <label>Viernes</label>
        <input
          className={clsx("border rounded-md ml-10")}
          type="Time"
          id="Friday"
          disabled={!checkFri}
          value={Friday}
          onChange={(e) => setFriday(e.target.value)}
        />
        <input
          className={clsx("border rounded-md ml-4")}
          type="Time"
          id="Friday2"
          disabled={!checkFri}
          value={Friday2}
          onChange={(e) => setFriday2(e.target.value)}
        />
      </div>

      {/* SABADO */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkSat}
          onChange={() => {
            if (checkSat) {
              setSaturday("");
              setSaturday2("");
            }
            setCheckSat(!checkSat);
          }}
        />
        <label>Sabado</label>
        <input
          className={clsx("border rounded-md ml-9")}
          type="Time"
          id="Saturday"
          disabled={!checkSat}
          value={Saturday}
          onChange={(e) => setSaturday(e.target.value)}
        />
        <input
          className={clsx("border rounded-md ml-4")}
          type="Time"
          id="Saturday2"
          disabled={!checkSat}
          value={Saturday2}
          onChange={(e) => setSaturday2(e.target.value)}
        />
      </div>

      {/* DOMINGO */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkSun}
          onChange={() => {
            if (checkSun) {
              setSunday("");
              setSunday2("");
            }
            setCheckSun(!checkSun);
          }}
        />
        <label>Domingo</label>
        <input
          className={clsx("border rounded-md ml-6")}
          type="Time"
          id="Sunday"
          disabled={!checkSun}
          value={Sunday}
          onChange={(e) => setSunday(e.target.value)}
        />
        <input
          className={clsx("border rounded-md ml-4")}
          type="Time"
          id="Sunday2"
          disabled={!checkSun}
          value={Sunday2}
          onChange={(e) => setSunday2(e.target.value)}
        />
      </div>
    </div>
  );
}
