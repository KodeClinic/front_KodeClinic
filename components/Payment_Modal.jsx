import clsx from "clsx";
import React, { useState } from "react";
import CardPaymentModal from "./CardPayment_Modal";
import OxxoPayModal from "./OxxoPay_Modal";

export function PaymentModal() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
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
            "p-5",
            "bg-white",
            "max-w-[600px]",
            "flex-col",
            "space-y-5"
          )}
        >
          <div className={clsx("flex", "justify-end")}>
            <button>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 18.75L12.5 14.25L17 18.75L18.75 17L14.25 12.5L18.75 8L17 6.25L12.5 10.75L8 6.25L6.25 8L10.75 12.5L6.25 17L8 18.75ZM12.5 25C10.7708 25 9.14583 24.6719 7.625 24.0156C6.10417 23.3594 4.78125 22.4688 3.65625 21.3438C2.53125 20.2188 1.64062 18.8958 0.984375 17.375C0.328125 15.8542 0 14.2292 0 12.5C0 10.7708 0.328125 9.14583 0.984375 7.625C1.64062 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64062 7.625 0.984375C9.14583 0.328125 10.7708 0 12.5 0C14.2292 0 15.8542 0.328125 17.375 0.984375C18.8958 1.64062 20.2188 2.53125 21.3438 3.65625C22.4688 4.78125 23.3594 6.10417 24.0156 7.625C24.6719 9.14583 25 10.7708 25 12.5C25 14.2292 24.6719 15.8542 24.0156 17.375C23.3594 18.8958 22.4688 20.2188 21.3438 21.3438C20.2188 22.4688 18.8958 23.3594 17.375 24.0156C15.8542 24.6719 14.2292 25 12.5 25ZM12.5 22.5C15.2917 22.5 17.6562 21.5312 19.5938 19.5938C21.5312 17.6562 22.5 15.2917 22.5 12.5C22.5 9.70833 21.5312 7.34375 19.5938 5.40625C17.6562 3.46875 15.2917 2.5 12.5 2.5C9.70833 2.5 7.34375 3.46875 5.40625 5.40625C3.46875 7.34375 2.5 9.70833 2.5 12.5C2.5 15.2917 3.46875 17.6562 5.40625 19.5938C7.34375 21.5312 9.70833 22.5 12.5 22.5Z"
                  fill="#78909C"
                />
              </svg>
            </button>
          </div>
          <div className={clsx("flex", "justify-center")}>
            <span
              className={clsx(
                "text-green_title",
                "text-center md:text-xl",
                "font-semibold"
              )}
            >
              Elige tu metodo de Pago
            </span>
          </div>
          <div className={clsx("flex", "justify-evenly")}>
            <div className={clsx("flex", "justify-center")}>
              <img
                className={clsx("max-w-20", "m-5")}
                src="/assets/Frame 65.png"
                alt="imgCheck"
              />
            </div>
            <div
              className={clsx("justify-center", "hidden", "min-[600px]:flex")}
            >
              <img
                className={clsx("m-8")}
                src="/assets/Oxxo_Logo 1.png"
                alt="imgCheck"
              />
            </div>
          </div>
          <div
            className={clsx(
              "justify-evenly",
              "flex",
              "max-[375px]:flex-col",
              "max-[414px]:flex-col",
              "max-[375px]:space-y-5",
              "max-[414px]:space-y-5",
              "min-[600px]:space-x-5"
            )}
          >
            <div className={clsx("flex", "justify-center")}>
              <button
                onClick={() => setShowModal(true)}
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
                Tarjeta de <br />
                Crédito / Débito
              </button>
            </div>
            <div className={clsx("justify-center", "flex")}>
              <button
                onClick={() => setShowModal2(true)}
                className={clsx(
                  "border",
                  "border-2",
                  "rounded-md",
                  "p-1",
                  "text-white",
                  "bg-green_button",
                  "text-sm",
                  "md:text-lg",
                  "px-8"
                )}
              >
                Oxxo Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <CardPaymentModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></CardPaymentModal>
      <OxxoPayModal isVisible={showModal2} text="$500"></OxxoPayModal>
    </>
  );
}
