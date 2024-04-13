import clsx from "clsx";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Availability() {
  const [hour, setHour] = useState("");

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };
  return (
    <>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          className="max-w-[90px]"
          control={<Checkbox defaultChecked />}
          label="Lunes"
        />

        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          className="max-w-[90px]"
          control={<Checkbox defaultChecked />}
          label="Martes"
        />

        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          className="max-w-[90px]"
          control={<Checkbox defaultChecked />}
          label="Miercoles"
        />

        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          className="max-w-[90px]"
          control={<Checkbox defaultChecked />}
          label="Jueves"
        />

        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          className="max-w-[90px]"
          control={<Checkbox defaultChecked />}
          label="Viernes"
        />

        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          className="max-w-[90px]"
          control={<Checkbox defaultChecked />}
          label="Sábado"
        />

        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          className="max-w-[90px]"
          control={<Checkbox defaultChecked />}
          label="Domingo"
        />

        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
    </>
  );
}
