import clsx from "clsx";
import { useState } from "react";
import Input from "@mui/joy/Input";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Availability from "./Availability";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ModalCard() {
  const [sex, setSex] = useState("");

  const handleSexChange = (event) => {
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
        <div class="md:flex justify-between">
          <div className={clsx("p-8")}>
            <div
              className={clsx(
                "min-[360px]:flex-col",
                "justify-center",
                "tracking-wide",
                "text-xl",
                "md:text-3xl",
                "flex ",
                "justify-items-center",
                "place-items-center",
                "justify-center",
                "space-x-2"
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
                  "md:text-base",
                  "mt-2",
                  "text-center"
                )}
              >
                Antes de continuar completa tu perfil
              </span>
            </div>
            <div
              className={clsx(
                "mt-2",
                "text-base",
                "md:text-xl",
                "flex-col",
                "space-y-2",
                "m-2",
                "p-2",
                "sm:flex",
                "gap-5"
              )}
            >
              <div className={clsx("space-y-2", "ml-2")}>
                <p> Nombre(s)</p>
                <Input
                  disabled={false}
                  placeholder="Nombre(s)"
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>

              <div className={clsx("space-y-2", "w-full")}>
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
              </div>

              <div>
                <p> Apellido(s)</p>
                <Input
                  disabled={false}
                  placeholder="Apellido(s)"
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>

              <div>
                <p>Sexo</p>
                <FormControl className={clsx("w-full")} sx={{ m: 1 }}>
                  <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                  <Select
                    size="lg"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sex}
                    label="Sexo"
                    onChange={handleSexChange}
                  >
                    <MenuItem value={0}>Femenino</MenuItem>
                    <MenuItem value={1}>Masculino</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* stepper */}

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
              "place-items-center",
              "space-y-5",
              "bg-[#E4ECFF]",
              "p-5"
            )}
          >
            <img
              className={clsx("max-w-20")}
              src="/assets/KodeClinic_logo_1.svg"
              alt=""
            />
            <img
              className={clsx("m-10")}
              src="/assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
              alt="imgFisio"
            />
          </div>
        </div>
      </div>

      {/* segunda card  */}
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
        <div class="md:flex justify-between">
          <div className={clsx("p-8")}>
            <div
              className={clsx(
                "min-[360px]:flex-col",
                "justify-center",
                "tracking-wide",
                "text-xl",
                "md:text-3xl",
                "flex ",
                "justify-items-center",
                "place-items-center",
                "justify-center",
                "space-x-2"
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
                  "md:text-base",
                  "mt-2",
                  "text-center"
                )}
              >
                Antes de continuar completa tu perfil
              </span>
            </div>
            <div
              className={clsx(
                "mt-2",
                "text-base",
                "md:text-xl",
                "flex-col",
                "space-y-2",
                "m-2",
                "p-2",
                "sm:flex",
                "gap-5"
              )}
            >
              <div className={clsx("space-y-2", "ml-2")}>
                <p> Telefono de Contacto</p>
                <Input
                  disabled={false}
                  placeholder="Telefono de Contacto"
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>

              <div className={clsx("space-y-2", "ml-2")}>
                <p> Calle y Número</p>
                <Input
                  disabled={false}
                  placeholder=""
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>

              <div className={clsx("space-y-2", "ml-2")}>
                <p> Colonia</p>
                <Input
                  disabled={false}
                  placeholder=""
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>

              <div className={clsx("space-y-2", "ml-2")}>
                <p> Estado</p>
                <Input
                  disabled={false}
                  placeholder=""
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>
            </div>

            {/* stepper */}

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
              <p>Información de Contacto</p>
            </div>
          </div>

          <div
            className={clsx(
              "hidden",
              "md:flex",
              "flex-col",
              "justify-center",
              "place-items-center",
              "space-y-5",
              "bg-[#E4ECFF]",
              "p-5"
            )}
          >
            <img
              className={clsx("max-w-20")}
              src="/assets/KodeClinic_logo_1.svg"
              alt=""
            />
            <img
              className={clsx("m-10")}
              src="/assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
              alt="imgFisio"
            />
          </div>
        </div>
      </div>

      {/* Tercera card  */}
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
        <div class="md:flex justify-between">
          <div className={clsx("p-8")}>
            <div
              className={clsx(
                "min-[360px]:flex-col",
                "justify-center",
                "tracking-wide",
                "text-xl",
                "md:text-3xl",
                "flex ",
                "justify-items-center",
                "place-items-center",
                "justify-center",
                "space-x-2"
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
                  "md:text-base",
                  "mt-2",
                  "text-center"
                )}
              >
                Antes de continuar completa tu perfil
              </span>
            </div>
            <div
              className={clsx(
                "mt-2",
                "text-base",
                "md:text-xl",
                "flex-col",
                "space-y-2",
                "m-2",
                "p-2",
                "sm:flex",
                "gap-5"
              )}
            >
              <div className={clsx("space-y-2", "ml-2")}>
                <p> Cedula Profesional</p>
                <Input
                  disabled={false}
                  placeholder=""
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>

              <div className={clsx("space-y-2", "ml-2")}>
                <p> Especialidad</p>
                <Input
                  disabled={false}
                  placeholder=""
                  size="md"
                  variant="outlined"
                  sx={{ "--Input-focused": 1 }}
                />
              </div>
            </div>

            {/* stepper */}

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
              <p>Información Profesional</p>
            </div>
          </div>

          <div
            className={clsx(
              "hidden",
              "md:flex",
              "flex-col",
              "justify-center",
              "place-items-center",
              "space-y-5",
              "bg-[#E4ECFF]",
              "p-5"
            )}
          >
            <img
              className={clsx("max-w-20")}
              src="/assets/KodeClinic_logo_1.svg"
              alt=""
            />
            <img
              className={clsx("m-10")}
              src="/assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
              alt="imgFisio"
            />
          </div>
        </div>
      </div>

      {/* Quinta Card */}
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
        <div class="md:flex justify-between">
          <div className={clsx("p-8")}>
            <div
              className={clsx(
                "min-[360px]:flex-col",
                "justify-center",
                "tracking-wide",
                "text-xl",
                "md:text-3xl",
                "flex ",
                "justify-items-center",
                "place-items-center",
                "justify-center",
                "space-x-2"
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
                  "md:text-base",
                  "mt-2",
                  "text-center"
                )}
              >
                Antes de continuar completa tu perfil
              </span>
            </div>
            <div
              className={clsx(
                "mt-2",
                "text-base",
                "md:text-xl",
                "flex-col",
                "space-y-2",
                "m-2",
                "p-2",
                "sm:flex",
                "gap-5"
              )}
            >
              <div className={clsx("space-y-2", "ml-2")}>
                <Availability></Availability>
              </div>
            </div>

            {/* stepper */}

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
              <p>Disponibilidad</p>
            </div>
          </div>

          <div
            className={clsx(
              "hidden",
              "md:flex",
              "flex-col",
              "justify-center",
              "place-items-center",
              "space-y-5",
              "bg-[#E4ECFF]",
              "p-5"
            )}
          >
            <img
              className={clsx("max-w-20")}
              src="/assets/KodeClinic_logo_1.svg"
              alt=""
            />
            <img
              className={clsx("m-10")}
              src="/assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
              alt="imgFisio"
            />
          </div>
        </div>
      </div>

      {/* Sexta Card */}

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
        <div class="md:flex justify-between">
          <div className={clsx("p-8")}>
            <div
              className={clsx(
                "min-[360px]:flex-col",
                "justify-center",
                "tracking-wide",
                "text-xl",
                "md:text-3xl",
                "flex ",
                "justify-items-center",
                "place-items-center",
                "justify-center",
                "space-x-2"
              )}
            >
              <span className={clsx("text-green_title")}> ¡Felicidades!</span>
              <img
                className={clsx("max-w-20", "m-10")}
                src="/assets/Vector.png"
                alt="imgCheck"
              />
            </div>

            <div
              className={clsx(
                "mt-2",
                "text-base",
                "md:text-xl",
                "flex-col",
                "space-y-2",
                "m-2",
                "p-2",
                "sm:flex",
                "gap-5"
              )}
            >
              <div className={clsx("flex flex-col justify-center")}>
                <span className="text-center">
                  Ahora formas parte de la comunidad
                </span>
                <span className="text-center text-blue_button">KodeClinic</span>
              </div>

              <div className={clsx("flex justify-center")}>
                <span className="text-center">
                  Si deseas consultar, editar o mejorar la información de tu
                  perfil podrás realizar los cambios accediendo desde el menú
                  lateral
                </span>
              </div>
            </div>

            <div className={clsx("flex", "justify-center")}>
              <button
                className={clsx(
                  "border",
                  " border-2",
                  "rounded-md",
                  "p-2",
                  "px-5",
                  "mt-20",
                  "m-10",
                  "text-white",
                  "bg-green_button",
                  "text-sm",
                  "md:text-lg"
                )}
              >
                Confirmar
              </button>
            </div>

            {/* stepper */}

            {/* <div className={clsx("flex", "justify-center", "mt-10")}>
              <Stack spacing={2}>
                <Pagination count={4} />
              </Stack>
            </div> */}
            {/* <div
              className={clsx(
                "flex",
                "justify-center",
                "mt-5",
                "text-base md:text-xl",
                "text-blue_gray-700"
              )}
            >
              <p>Perfil Completado</p>
            </div> */}
          </div>

          <div
            className={clsx(
              "hidden",
              "md:flex",
              "flex-col",
              "justify-center",
              "place-items-center",
              "space-y-5",
              "bg-[#E4ECFF]",
              "p-5"
            )}
          >
            <img
              className={clsx("max-w-20")}
              src="/assets/KodeClinic_logo_1.svg"
              alt=""
            />
            <img
              className={clsx("m-10")}
              src="/assets/_Pngtree_original_hand_drawn_cartoon_of_7119176-removebg 1.png"
              alt="imgFisio"
            />
          </div>
        </div>
      </div>
    </>
  );
}
