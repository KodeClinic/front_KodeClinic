import clsx from "clsx";
import Input from "@mui/joy/Input";

export default function ModalCard() {
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
          "md:max-w-3xl",
          "m-10"
        )}
      >
        <div class="md:flex">
          <div class="md:shrink-0"></div>
          <div class="p-8">
            <div
              className={clsx(
                "tracking-wide text-xl md:text-3xl flex justify-center justify-items-center"
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
                "space-y-2"
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
              <Input
                disabled={false}
                size="md"
                variant="outlined"
                sx={{ "--Input-focused": 1 }}
              />
            </div>
            <div className={clsx("flex", "justify-center", "mt-10")}>
              <h1>Stepper</h1>
            </div>
          </div>
          <div className="hidden md:flex md:justify-between">
            <h1>otro elemento</h1>
            <h1>icono de cerrar</h1>
          </div>
        </div>
      </div>
    </>
  );
}
