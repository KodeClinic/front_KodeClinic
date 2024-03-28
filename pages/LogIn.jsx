

export default function Login() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-md rounded px-8 py-10 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-center">
              Iniciar<span className="text-blue-500"> Sesión</span>
            </h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm  mb-2">
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm  mb-2">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
            <p className="text-red-500 text-xs italic">¿Olvidaste tu contraseña?</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Ingresar
            </button>
          </div>
        </div>
        <div className="bg-gray-100 rounded-b flex flex-col w-full p-4 items-center justify-between">
          <p className="text-gray-600 text-sm">
            ¿Aún no tienes una cuenta?
            <a
              className="text-blue_button font-bold hover:underline ml-2"
              href="#"
            >
              Registrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}