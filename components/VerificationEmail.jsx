export default function VerificationEmail() {
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
              Verificación de Email
            </h1>
            <p className="text-blue_grey-700 text-sm mt-2">Por favor ingresa el código de 4 dígitos que enviamos a tu correo</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold text-sm  mb-2">
              Código
            </label>
            <div className="flex ">
            <input
              className="shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-0.5"
              id="code1"
              type="number"
            />
            <input
              className="shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-0.5"
              id="code2"
              type="number"
            />
            <input
              className="shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-0.5"
              id="code3"
              type="number"
            />
            <input
              className="shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-0.5"
              id="code4"
              type="number"
            />

            </div>
            
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue_button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Verificar
            </button>
          </div>
        </div>
      </div>
    </div>
      
    );
  }