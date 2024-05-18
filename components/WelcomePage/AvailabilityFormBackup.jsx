import clsx from "clsx";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AvailabilityForm() {
  const [hour, setHour] = useState("");

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };
  return (
    <>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Lunes"
          className="min-w-[120px]"
        />

        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>

      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Martes"
          className="min-w-[120px]"
        />

        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Miercoles"
          className="min-w-[120px]"
        />

        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Jueves"
          className="min-w-[120px]"
        />

        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Viernes"
          className="min-w-[120px]"
        />

        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Sábado"
          className="min-w-[120px]"
        />

        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
      </div>
      <div className={clsx("flex-col", "flex", "items-center", "md:flex-row")}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Domingo"
          className="min-w-[120px]"
        />

        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>

          <input
            className={clsx("border", "p-1", "rounded", "border-[#C4C4C4]")}
            type="time"
          />
        </FormControl>
        <p>a</p>
        <FormControl className={clsx("max-w-[250px]")} sx={{ m: 1 }}>
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
