import clsx from "clsx";
import { useState } from "react";
import AppointmentCard_Patient from "./AppointmentCard_Patient";

export default function SliderPatient({ props }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    const isFirstCard = currentIndex === 0;
    const newIndex = isFirstCard ? props.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextCard = () => {
    const isLastCard = currentIndex === props.length - 1;
    const newIndex = isLastCard ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const newArrayMobile = props.slice(currentIndex, currentIndex + 1);

  const newArrayTablet = props.slice(currentIndex, currentIndex + 2);

  const newArrayDesktop = props.slice(currentIndex, currentIndex + 3);

  if (currentIndex == props.length - 1) {
    newArrayTablet.push(props[0]);
    newArrayDesktop.push(props[0], props[1]);
  }

  return (
    <div className={clsx("flex justify-between")}>
      <div className={clsx("flex items-center pr-3")}>
        <img
          onClick={prevCard}
          className={clsx(
            "p-2 rounded-full min-w-11 bg-blue_gray-50 cursor-pointer"
          )}
          src="assets/icons/collapse_arrow-icon.svg"
          alt="left-arrow"
        />
      </div>

      <div className={clsx("sm:hidden")}>
        {newArrayMobile.map((appointment, index) => {
          return (
            <AppointmentCard_Patient
              key={"appointment-" + index}
              props={appointment}
            />
          );
        })}
      </div>
      <div
        className={clsx(
          "hidden w-full sm:flex sm:justify-around min-[1350px]:hidden"
        )}
      >
        {newArrayTablet.map((appointment, index) => {
          return (
            <AppointmentCard_Patient
              key={"appointment-" + index}
              props={appointment}
            />
          );
        })}
      </div>
      <div
        className={clsx(
          "hidden w-full min-[1350px]:flex  min-[1350px]:justify-around"
        )}
      >
        {newArrayDesktop.map((appointment, index) => {
          return (
            <AppointmentCard_Patient
              key={"appointment-" + index}
              props={appointment}
            />
          );
        })}
      </div>

      <div className={clsx("flex items-center pl-3")}>
        <img
          onClick={nextCard}
          className={clsx(
            "rotate-180 p-2 rounded-full min-w-11 bg-blue_gray-50 "
          )}
          src="assets/icons/collapse_arrow-icon.svg"
          alt="left-arrow"
        />
      </div>
    </div>
  );
}
