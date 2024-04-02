export default function RecoveryEmail() {
    return (
        <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-white  rounded px-8 py-10 pt-6 pb-8 mb-4">
          <div className="flex justify-center items-center mb-7 flex-col">
            <img src="assets\img-kodeclinic-logo.png" alt="KodeClinic_Logo" />
            <h2 className="text-2xl text-blue_button text-center"
            ><span>Kode</span><span className="font-bold">Clinic</span></h2>
          </div>
          <div className="mb-4 flex flex-col justify-center text-center">
            <h1 className="text-2xl font-bold text-center">
              ¿Olvidaste tu contraseña?
            </h1>
            <p className="text-blue_grey-700 text-xs mt-2">Por favor ingresa el correo electrónico registrado</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold text-sm  mb-2">
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Enviar código
            </button>
          </div>
        </div>
      </div>
    </div>
      
    );
  }
  