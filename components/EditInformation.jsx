import React from 'react';

export default function EditInformation({ isVisible }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
            <div className="px-3 bg-white flex flex-col w-[328px] rounded-[20px] lg:w-[800px] lg:[870px]">
                <div className="flex-col flex text-center items-center ">
                    <div className="max-h-[500px]  overflow-y-auto lg:w-full ">
                        <div className="flex justify-end w-full mt-2">
                            <img src="assets/icons/Close-icon.png" alt="Close" className="w-[20px] h-[20px] absolute" />
                        </div>
                        <div className="text-center">
                            <p className='text-2xl
                            '>Edita tu información personal</p>
                            
                        </div>
                        {/* Formulario */}
                        <form className="lg:mx-20 mx-auto items-center bg-white px-8 pt-1 pb-8 mb-4 lg:w-auto lg:p-0">
                            <div className="mb-0">
                                {/* Información de contacto */}
                                <p className="py-4 text-lg">Información de contacto</p>
                                <div className="flex flex-col lg:grid-cols-2 lg:grid lg:gap-4">
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="telefono"
                                        type="tel"
                                        placeholder="Número telefónico"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="direccion"
                                        type="text"
                                        placeholder="Dirección"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="colonia"
                                        type="text"
                                        placeholder="Colonia"
                                    />
                                    <input
                                        className="shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="estado"
                                        type="text"
                                        placeholder="Estado"
                                    />
                                </div>
                            </div>
                            <div className="mb-0">
                                {/* Información de emergencia */}
                                <p className="py-6 text-lg ">Información de Emergencia</p>
                                <div className="flex flex-col lg:grid-cols-3 lg:grid lg:gap-4">
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="contacto_emergencia_1"
                                        type="tel"
                                        placeholder="Contacto de Emergencia 1"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="parentezco_1"
                                        type="text"
                                        placeholder="Parentezco"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="telefono_emergencia_1"
                                        type="tel"
                                        placeholder="Número telefónico 1"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="contacto_emergencia_2"
                                        type="tel"
                                        placeholder="Contacto de Emergencia 2"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="parentezco_2"
                                        type="text"
                                        placeholder="Parentezco"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                                        id="telefono_emergencia_2"
                                        type="tel"
                                        placeholder="Número Telefónico 2"
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
    );
}
