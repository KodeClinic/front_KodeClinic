import clsx from "clsx";
import { useState } from "react";
import Input from "@mui/joy/Input";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#00867A",
    },
  },
});

export default function ModalCard() {
  const [sex, setSex] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div
        className={clsx(
          "max-w-md",
          "mx-auto",
          " bg-white",
          "rounded-xl",
          "shadow-lg",
          "overflow-hidden",
          "md:max-w-3xl"
        )}
      >
        <div class="md:flex">
          <div class="md:shrink-0"></div>
          <div class="p-8">
            <div
              className={clsx(
                "tracking-wide",
                " text-xl",
                " md:text-3xl",
                " flex ",
                " justify-center",
                " justify-items-center"
                // "min-[320px]:flex-col"
              )}
            >
              <span className={clsx("text-green_title")}> Bienvenido a</span>
              <span className={clsx("text-blue_button", "ml-2")}>
                {" "}
                KodeClinic
              </span>
            </div>
            <div className={clsx("flex justify-center")}>
              <span
                className={clsx(
                  "text-blue_gray-700",
                  "text-sm",
                  "md:text-base"
                )}
              >
                Antes de continuar completa tu perfil
              </span>
            </div>
            <div
              className={clsx(
                "mt-2 text-base md:text-xl flex flex-col",
                "space-y-2",
                "md:flex"
              )}
            >
              <p> Nombre(s)</p>
              <Input
                disabled={false}
                placeholder="Nombre(s)"
                size="md"
                variant="outlined"
                sx={{ "--Input-focused": 1 }}
              />
              <p> Apellido(s)</p>
              <Input
                disabled={false}
                placeholder="Apellido(s)"
                size="md"
                variant="outlined"
                sx={{ "--Input-focused": 1 }}
              />
              <p> Fecha de Nacimiento</p>
              <Input
                type="date"
                slotProps={{
                  input: {
                    max: "",
                  },
                }}
                sx={{ "--Input-focused": 1 }}
              />
              <p>Sexo</p>
              {/* <Box sx={{ minWidth: 40 }}> */}
              <FormControl sx={{ m: 1, maxWidth: 600 }}>
                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sex}
                  label="Sexo"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Femenino</MenuItem>
                  <MenuItem value={1}>Masculino</MenuItem>
                </Select>
              </FormControl>
              {/* </Box> */}
            </div>
            <div className={clsx("flex", "justify-center", "mt-10")}>
              <Stack spacing={2}>
                <Pagination count={4} />
              </Stack>
            </div>
            <div
              className={clsx(
                "flex",
                "justify-center",
                "mt-5",
                "text-base md:text-xl",
                "text-blue_gray-700"
              )}
            >
              <p>Información Personal</p>
            </div>
          </div>
          <div
            className={clsx(
              "hidden",
              "md:flex",
              "flex-col",
              "justify-center",
              "m-5",
              "space-y-5"
            )}
          >
            <img
              className={clsx("max-w-20", "mx-3", "justify-items-center")}
              src="/assets/KodeClinic_logo_1.svg"
              alt=""
            />
            <img
              src="/assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
              alt="imgFisio"
            />
          </div>
        </div>
      </div>

      {/* Segunda Card  */}
    </>
  );
}
