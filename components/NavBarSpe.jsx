import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBarSpe({ pageName }) {
  const router = useRouter();
  const { id } = router.query;
  const onLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <nav className={clsx("bg-white drop-shadow-md", "fixed top-0 z-50 w-full")}>
      <div
        className={clsx(
          "flex flex-row justify-between",
          "lg:max-w-[1440px] lg:m-auto"
        )}
      >
        <div
          className={clsx(
            "flex items-center px-4 gap-[10px] py-[16px] min-[980px]:py-4",
            " sm:px-14  min-[980px]:pl-20 min-[980px]:pr-0"
          )}
        >
          <a href="" className=" flex justify-center p-[6px] w-10">
            <img
              className={clsx("w-auto min-h-5", "cursor-pointer")}
              src="/assets/icons/menu-icon.svg"
              alt="menu"
            />
          </a>
          <Link
            href={{
              pathname: "/DashboardSpe",
              query: { id: id },
            }}
          >
            <img
              className={clsx("w-7 h-7", "min-[980px]:w-8 min-[980px]:h-8")}
              src="/assets/img-kodeclinic-logo.png"
              alt="kodeclinic_logo"
            />
          </Link>

          <span
            className={clsx(
              "text-blue_button text-[16px] font-semibold",
              "min-[980px]:text-[22px]"
            )}
          >
            {pageName}
          </span>
        </div>

        <div
          className={clsx(
            "flex items-center px-4 gap-[10px] py-[16px] min-[980px]:py-4",
            " sm:px-14  min-[980px]:pr-20 min-[980px]:pl-0"
          )}
        >
          <Link
            href={{
              pathname: "/NewAppointment",
              query: { id: id },
            }}
            className={clsx(
              "flex justify-center p-[6px] bg-background w-10 rounded-md"
            )}
          >
            <img
              className={clsx("w-auto min-h-5 cursor-pointer")}
              src="/assets/icons/newdate-icon.svg"
              alt="new-appointment"
            />
          </Link>
          <Link
            href={{
              pathname: "/New_pacient",
              query: { id: id },
            }}
            className={clsx(
              "flex justify-center p-[6px] bg-background w-10 rounded-md"
            )}
          >
            <img
              className={clsx("w-auto min-h-5 cursor-pointer")}
              src="/assets/icons/newpatient-icon.svg"
              alt="new-patient"
            />
          </Link>
          <button
            onClick={onLogout}
            className={clsx(
              "flex justify-center p-[6px] bg-background w-10 rounded-md",
              "hidden sm:block"
            )}
          >
            <img
              className={clsx("w-auto min-h-5 cursor-pointer")}
              src="/assets/icons/logout-icon.svg"
              alt="log-out"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
