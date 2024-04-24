import Link from "next/link";

export default function PasswordChaged() {
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
              ¡Contraseña cambiada con éxito!
            </h1>
            <p className="text-blue_grey-700 text-xs mt-2 sm:text-sm">
              Tu contraseña ha sido cambiada
            </p>
            <p className="text-blue_grey-700 text-xs sm:text-sm">
              satisfactoriamente
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={"/LogIn"}
              className="bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
            >
              Regresar a Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
