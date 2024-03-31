export default function Registration() {
    return (
        <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white  rounded px-8 py-10 pt-6 pb-8 mb-1">
          <div className="flex justify-center items-center mb-7 flex-col">
            <img src="assets\img-kodeclinic-logo.png" alt="KodeClinic_Logo" />
            <h2 className="text-2xl text-blue_button text-center"
            ><span>Kode</span><span className="font-bold">Clinic</span></h2>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-center">
              Registro
            </h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold  mb-2">
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold  mb-2">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
    
            <label className="block text-gray-700 text-sm font-semibold  mb-2">
              Confirmar contraseña
            </label>
            <input
              className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 mb-0.2 leading-tight focus:outline-none focus:shadow-outline"
              id="newPasswordConfirm"
              type="password"
            />
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
        <div className="bg-gray-100 rounded-b flex flex-col w-full items-center text-center justify-between">
          <p className="text-black text-sm ">
            Al crear una cuenta estás aceptando los <span className="text-blue_button font-semibold">Términos de Servicio</span>y 
            <span className="text-blue_button font-semibold"> Politicas de Privacidad</span> de Kode<span className="font-bold">Clinic</span>
          </p>
        </div>
      </div>
    </div>
      
    );
  }