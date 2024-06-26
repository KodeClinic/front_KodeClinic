
import clsx from "clsx";
import NavBarSpe from "@/components/NavBarSpe";
import React, { useState } from 'react';
import AvailabilityEspecialist from "@/components/AvailabilityEspecialistinformation";

export default function ProfileInformation() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="bg-background min-h-screen ">
      <NavBarSpe pageName={"Informacion de perfil"} />
      <div className="   flex justify-center items-center mt-20 flex-col lg:flex-row mx-auto max-w-[1440px] ">
        <div className=" flex-col items-center mb-10 mx-10 lg:mb-0">
          <div className="bg-white flex flex-col w-[328px] rounded-[20px] lg:w-[800px] shadow-lg">
            <div className="flex-col  text-center items-center">
              <div className=" lg:w-full">
                <div className="text-start mx-2 mt-2">
                  <p className='text-2xl font-bold mx-10'>Datos Personales</p>
                </div>

                <form className="lg:mx-20 mx-auto items-center bg-white px-8 pt-1 pb-8 mb-4 lg:w-auto lg:p-0 mt-4 lg:mt-6">
                <div className="lg:flex-row lg:flex">
                  <div className="flex items-center justify-center lg:w-1/2 bg-gray-200 rounded-full mb-5 ">
                    <label htmlFor="upload" className="cursor-pointer flex flex-col items-center justify-center rounded-full w-28 h-28 bg-blue_gray-200 ">
                      <input type="file" id="upload" className="hidden" />
                      <span className="text-center">Sube tu foto</span>
                    </label>
                  </div>
                  <div className="flex-col flex lg:w-1/2">
                    <input
                        className="shadow mb-4  appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="telefono"
                        type="tel"
                        placeholder="Nombres"
                      />
                      <input
                        className="shadow mb-8  appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="direccion"
                        type="text"
                        placeholder="Apellidos"
                      />
                </div>
                </div>
                
                
                
                    {/* Información de contacto */}
                    <div className="flex flex-col lg:grid-cols-2 lg:grid lg:gap-4">
                     
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="colonia"
                        type="text"
                        placeholder="Telefono de contacto"
                      />
                      <input
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="estado"
                        type="text"
                        placeholder="Cedula profesional"
                      />
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="estado"
                        type="text"
                        placeholder="Calle"
                      />
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="estado"
                        type="text"
                        placeholder="Colonia"
                      />
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="estado"
                        type="text"
                        placeholder="Alcaldía"
                      />
                    </div>
                  
                  <div className="mb-0">
                    {/* Información de emergencia */}
                    <p className="py-6 text-lg justify-start text-left font-bold">Educación</p>
                    <div className="flex flex-col lg:grid-cols-2 lg:grid lg:gap-4">
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="contacto_emergencia_1"
                        type="tel"
                        placeholder="Institución educativa"
                      />
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="parentezco_1"
                        type="text"
                        placeholder="Disciplina"
                      />
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="telefono_emergencia_1"
                        type="tel"
                        placeholder="Titulo"
                      />
                    </div>
                  </div>

                  <div className="mb-0">
                    {/* Información de emergencia */}
                    <p className="py-6 text-lg justify-start text-left font-bold">Certificaciones y Diplomados</p>
                    <div className="flex flex-col lg:grid-cols-2 lg:grid lg:gap-4">
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="contacto_emergencia_1"
                        type="tel"
                        placeholder="Institución educativa"
                      />
                      <input
                        className="shadow mb-4 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="parentezco_1"
                        type="text"
                        placeholder="Nombre de la certificación"
                      />
                      <input
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="telefono_emergencia_1"
                        type="tel"
                        placeholder="Fecha"
                      />
                    </div>
                  </div>

                  {/* Botón de guardar */}
                  <button
                    className="bg-green_button w-full lg:w-1/3 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario Horarios */}

        <div className="flex flex-col items-center lg:mx-auto ">
          <div className="bg-white rounded-lg lg:w-[500px] mb-20 lg:mb-[200px] shadow-lg">
            <div className="flex flex-col items-center">
              <div className="max-w-[328px] mx-auto"> {/* Utilizamos mx-auto para centrar horizontalmente */}
                <div className="text-start mx-2 mt-2 items-center ">
                  <p className='text-2xl font-bold '>Disponibilidad</p>
                  
                </div>
                <AvailabilityEspecialist />
               </div>
               
                  <button
                    className="bg-green_button w-[80%] lg:w-1/3 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
                    type="button"
                    >
                    Editar
                  </button>
            </div>
            <img src="assets/Doctor-list.png" alt="Doctor" className="mx-auto mt-3"/>
          </div>
        </div>



      </div>
    </div>
  );
}
