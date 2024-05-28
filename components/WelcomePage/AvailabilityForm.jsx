import clsx from "clsx";
import { useContext, useState } from "react";
import { WelcomePageContext } from "@/context/WelcomePageContext";

export default function AvailabilityForm() {
  const [checkMon, setCheckMon] = useState(false);
  const [checkTues, setCheckTues] = useState(false);
  const [checkWed, setCheckWed] = useState(false);
  const [checkThu, setCheckThu] = useState(false);
  const [checkFri, setCheckFri] = useState(false);
  const [checkSat, setCheckSat] = useState(false);
  const [checkSun, setCheckSun] = useState(false);

  const { userData, setUserData, setCurrentStep } =
    useContext(WelcomePageContext);

  return (
    <div className="flex flex-col justify-start gap-3">
      {/* LUNES */}
      <div className={clsx("flex-col flex md:flex-row", "items-center")}>
        <input
          type="checkbox"
          className="min-w-[120px]"
          checked={checkMon}
          value={userData.Monday}
          onChange={() => {
            if (checkMon) {
              setUserData({ ...userData, Monday: true });
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
          value={userData.mondayStart}
          onChange={(event) => {
            setUserData({
              ...userData,
              mondayStart: event.target.value,
            });
          }}
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
          value={userData.mondayEnd}
          onChange={(event) => {
            setUserData({
              ...userData,
              mondayEnd: event.target.value,
            });
          }}
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
          value={userData.Tuesday}
          onChange={() => {
            if (checkTues) {
              setUserData({ ...userData, Tuesday: "true" });
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
          value={userData.tuesdayStart}
          onChange={(event) => {
            setUserData({
              ...userData,
              tuesdayStart: event.target.value,
            });
          }}
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
          value={userData.tuesdayEnd}
          onChange={(event) => {
            setUserData({
              ...userData,
              tuesdayEnd: event.target.value,
            });
          }}
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
          value={userData.Wednesday}
          onChange={() => {
            if (checkWed) {
              setUserData({ ...userData, Wednesday: "true" });
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
          value={userData.wednesdayStart}
          onChange={(event) => {
            setUserData({
              ...userData,
              wednesdayStart: event.target.value,
            });
          }}
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
          value={userData.wednesdayEnd}
          onChange={(event) => {
            setUserData({
              ...userData,
              wednesdayEnd: event.target.value,
            });
          }}
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
          value={userData.Thursday}
          onChange={() => {
            if (checkThu) {
              setUserData({ ...userData, Thursday: "true" });
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
          value={userData.thursdayStart}
          onChange={(event) => {
            setUserData({
              ...userData,
              thursdayStart: event.target.value,
            });
          }}
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
          value={userData.thursdayEnd}
          onChange={(event) => {
            setUserData({
              ...userData,
              thursdayEnd: event.target.value,
            });
          }}
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
          value={userData.Friday}
          onChange={() => {
            if (checkFri) {
              setUserData({ ...userData, Friday: "true" });
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
          value={userData.fridayStart}
          onChange={(event) => {
            setUserData({
              ...userData,
              fridayStart: event.target.value,
            });
          }}
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
          value={userData.fridayEnd}
          onChange={(event) => {
            setUserData({
              ...userData,
              fridayEnd: event.target.value,
            });
          }}
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
          value={userData.Saturday}
          onChange={() => {
            if (checkSat) {
              setUserData({ ...userData, Saturday: "true" });
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
          value={userData.saturdayStart}
          onChange={(event) => {
            setUserData({
              ...userData,
              saturdayStart: event.target.value,
            });
          }}
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
          value={userData.saturdayEnd}
          onChange={(event) => {
            setUserData({
              ...userData,
              saturdayEnd: event.target.value,
            });
          }}
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
          value={userData.Sunday}
          onChange={() => {
            if (checkSun) {
              setUserData({ ...userData, Sunday: "true" });
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
          value={userData.sundayStart}
          onChange={(event) => {
            setUserData({
              ...userData,
              sundayStart: event.target.value,
            });
          }}
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
          value={userData.sundayEnd}
          onChange={(event) => {
            setUserData({
              ...userData,
              sundayEnd: event.target.value,
            });
          }}
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
