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
        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Monday"
          disabled={!checkMon}
          value={Monday}
          onChange={(e) => setMonday(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>

        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Monday2"
          disabled={!checkMon}
          value={Monday2}
          onChange={(e) => setMonday2(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>
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
        <select
          className={clsx(
            "border rounded-md ml-12",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Tuesday"
          disabled={!checkTues}
          value={Tuesday}
          onChange={(e) => setTuesday(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>

        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Tuesday2"
          disabled={!checkTues}
          value={Tuesday2}
          onChange={(e) => setTuesday2(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>
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

        <select
          className={clsx(
            "rounded-md ml-6",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Wednesday"
          disabled={!checkWed}
          value={Wednesday}
          onChange={(e) => setWednesday(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>

        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Wednesday2"
          disabled={!checkWed}
          value={Wednesday2}
          onChange={(e) => setWednesday2(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>
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
        <select
          className={clsx(
            "rounded-md ml-12",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Thursday"
          disabled={!checkThu}
          value={Thursday}
          onChange={(e) => setThursday(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>

        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Thursday2"
          disabled={!checkThu}
          value={Thursday2}
          onChange={(e) => setThursday2(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>
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
        <select
          className={clsx(
            "rounded-md ml-11",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Friday"
          disabled={!checkFri}
          value={Friday}
          onChange={(e) => setFriday(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>

        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Friday2"
          disabled={!checkFri}
          value={Friday2}
          onChange={(e) => setFriday2(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>
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
        <select
          className={clsx(
            "rounded-md ml-11",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Saturday"
          disabled={!checkSat}
          value={Saturday}
          onChange={(e) => setSaturday(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>

        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Saturday2"
          disabled={!checkSat}
          value={Saturday2}
          onChange={(e) => setSaturday2(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>
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
        <select
          className={clsx(
            "rounded-md ml-8",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Sunday"
          disabled={!checkSun}
          value={Sunday}
          onChange={(e) => setSunday(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>

        <select
          className={clsx(
            "rounded-md ml-14",
            "border-2 border-[#2196F3] rounded-md w-[115px] h-[30px]"
          )}
          id="Sunday2"
          disabled={!checkSun}
          value={Sunday2}
          onChange={(e) => setSunday2(e.target.value)}
        >
          <option value="06:00">06:00 a.m.</option>
          <option value="07:00">07:00 a.m.</option>
          <option value="08:00">08:00 a.m.</option>
          <option value="09:00">09:00 a.m.</option>
          <option value="10:00">10:00 a.m.</option>
          <option value="11:00">11:00 a.m.</option>
          <option value="12:00">12:00 a.m.</option>
          <option value="13:00">01:00 p.m.</option>
          <option value="14:00">02:00 p.m.</option>
          <option value="15:00">03:00 p.m.</option>
          <option value="16:00">04:00 p.m.</option>
          <option value="17:00">05:00 p.m.</option>
          <option value="18:00">06:00 p.m.</option>
          <option value="19:00">07:00 p.m.</option>
          <option value="20:00">08:00 p.m.</option>
          <option value="21:00">09:00 p.m.</option>
          <option value="22:00">10:00 p.m.</option>
        </select>
      </div>
    </div>
  );
}
