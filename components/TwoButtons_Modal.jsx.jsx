import clsx from "clsx";

export default function TwoButtonsModal(props) {
  return (
    <>
      <div
        className={clsx(
          "fixed",
          "inset-0",
          "bg-black",
          "bg-opacity-25",
          "backdrop-blur-sm",
          "flex",
          "justify-center",
          "items-center"
        )}
      >
        <div
          className={clsx(
            " bg-white",
            "rounded-xl",
            "shadow-lg",
            "overflow-hidden",
            "m-5",
            "p-10",
            "bg-white",
            "max-w-[600px]",
            "flex-col",
            "space-y-5"
          )}
        >
          <div className={clsx("flex", "justify-center")}>
            <span
              className={clsx(
                "text-green_title",
                "text-center md:text-xl",
                "font-semibold"
              )}
            >
              {props.title}
            </span>
          </div>
          <div
            className={clsx("flex", "justify-center", "max-[460px]:flex-col")}
          >
            <span
              className={clsx("text-green_title", "text-center md:text-xl")}
            >
              ¿Desea finalizar su sesión de
            </span>
            <span
              className={clsx(
                "text-center md:text-xl",
                "pl-2",
                "text-blue_button"
              )}
            >
              KodeClinic?
            </span>
          </div>
          <div
            className={clsx(
              "flex",
              "justify-between",
              "max-[460px]:flex-col",
              "max-[460px]:space-y-5"
            )}
          >
            <button
              className={clsx(
                "border",
                " border-2",
                "rounded-md",
                "p-1",
                "text-green_button",
                "bg-white",
                "text-sm",
                "md:text-lg",
                "px-4",
                "py-2"
              )}
            >
              {props.button1}
            </button>
            <button
              className={clsx(
                "border",
                " border-2",
                "rounded-md",
                "p-1",
                "text-white",
                "bg-green_button",
                "text-sm",
                "md:text-lg",
                "px-4",
                "py-2"
              )}
            >
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
