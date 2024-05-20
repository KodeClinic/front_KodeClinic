import { useRouter } from "next/router";

export default function RegistrationComplete() {
  const router = useRouter();
  const data = router.query;

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white  rounded px-8 py-10 pt-6 pb-8 mb-4">
          <div className="flex justify-center items-center mb-7 flex-col">
            <img src="/assets\img-kodeclinic-logo.png" alt="KodeClinic_Logo" />
            <h2 className="text-2xl text-blue_button text-center">
              <span>Kode</span>
              <span className="font-bold">Clinic</span>
            </h2>
          </div>
          <div className="flex justify-center items-center mb-7 flex-col">
            <img src="/assets\icons\check.png" alt="Ok" />
          </div>
          <div className="mb-4 flex flex-col justify-center text-center">
            <h1 className="text-xl font-bold text-center">
              ¡Felicidades, ahora formas parte de la comunidad!
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={
                () => router.push("/LogIn")
                // router.push({
                //   pathname: "/DashboardSpe",
                //   query: { email: data.email },
                // })
              }
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
