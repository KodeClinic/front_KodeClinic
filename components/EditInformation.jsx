import React from 'react';

export default function EditInformation({ isVisible }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
            <div className="px-4 bg-white flex flex-col w-[328px] rounded-[20px] lg:w-[800px] lg:[870px]">
                <div className="flex-col flex text-center items-center ">
                    <div className="max-h-[500px] overflow-y-auto">
                        <div className="flex justify-end w-full mt-2">
                            <img src="assets/icons/Close-icon.png" alt="Close" className="w-[20px] h-[20px] absolute " />
                        </div>
                        <div className="text-center">
                            <p className='text-2xl
                            '>Edita tu información</p>
                            <p className='text-2xl'>personal</p>
                        </div>
                        {/* Formulario */}
                        <form className="max-w-md mx-auto bg-white shadow-md px-8 pt-1 pb-8 mb-4">
                            <div className="mb-3">
                                {/* Información de contacto */}
                                <p className="py-6 text-lg">Información de contacto</p>
                                <div className="flex flex-col lg:[]">
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="telefono"
                                        type="tel"
                                        placeholder="Número telefónico"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="direccion"
                                        type="text"
                                        placeholder="Dirección"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="colonia"
                                        type="text"
                                        placeholder="Colonia"
                                    />
                                    <input
                                        className="shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="estado"
                                        type="text"
                                        placeholder="Estado"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                {/* Información de emergencia */}
                                <p className="py-6 text-lg">Información de Emergencia</p>
                                <div className="flex flex-col">
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="contacto_emergencia_1"
                                        type="tel"
                                        placeholder="Contacto de Emergencia 1"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="parentezco_1"
                                        type="text"
                                        placeholder="Parentezco"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="telefono_emergencia_1"
                                        type="tel"
                                        placeholder="Número telefónico 1"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="contacto_emergencia_2"
                                        type="tel"
                                        placeholder="Contacto de Emergencia 2"
                                    />
                                    <input
                                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="parentezco_2"
                                        type="text"
                                        placeholder="Parentezco"
                                    />
                                    <input
                                        className="shadow mb-2 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="telefono_emergencia_2"
                                        type="tel"
                                        placeholder="Número Telefónico 2"
                                    />
                                </div>
                            </div>
                            {/* Botón de guardar */}
                            <button
                                className="bg-green_button w-full hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
