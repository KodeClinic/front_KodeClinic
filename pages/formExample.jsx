import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Input from "@/components/Input";
import clsx from "clsx";
import NavBarSpe from "@/components/NavBarSpe";
import { getbyTemplateId } from "@/services/templates";

export default function formExample() {
  // const dataQuery = router.query;
  const dataQuery = { id: "1" };

  const [formDataTemplate, setFormDataTemplate] = useState([]);
  const [token, setToken] = useState(null);

  const onLogin = async (dataQuery, token) => {
    const credetials = { id: dataQuery.id, token: token };
    try {
      const response = await getbyTemplateId(credetials);
      const dataJSON = await response.json();
      setFormDataTemplate(dataJSON.data.screens[1].sections[0].inputList);
      console.log(dataJSON.data);
    } catch (error) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      // router.push("/LogIn");
    }
  };

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    setToken(token);
    // }

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
    }
    onLogin(dataQuery, token);
  }, []);

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarSpe pageName={"Consulta"} />

      <section
        className={clsx(
          "pt-[88px] min-[980px]:pt-[132px] px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto"
        )}
      >
        <div
          className={clsx(
            "w-full drop-shadow-md px-6 py-4 min-[980px]:px-7",
            "bg-white rounded-[20px] py-4"
          )}
        >
          <p className="py-5">Formulario</p>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-center sm:grid-cols-2 min-[980px]:grid-cols-3 gap-5 px-6"
            )}
          >
            {formDataTemplate.map((props) => {
              return (
                <Input
                  key={`${props?.inputType}-${props?.label}`}
                  props={props}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
