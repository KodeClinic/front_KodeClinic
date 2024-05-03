import React from 'react';
import clsx from 'clsx';

export default function HamburgerMenuSpe({ isVisible, closeModal }) {
    if (!isVisible) return null;

    return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-start items-center">
                <div className=" bg-background w-[280px] rounded-r-[20px] items-center flex-col h-screen">
                    <div className='items-center flex-col justify-center '>
                    <div className={clsx(
                            "flex flex-row items-center justify-center px-4 gap-1 py-[18px] min-[980px]:py-3",
                            "sm:px-14   mx-auto"
                            )}
                            >
                            <img className={clsx(
                                "w-10 h-10", "min-[980px]:w-8 min-[980px]:h-8")}
                                src="assets/img-kodeclinic-logo.png"
                                alt="kodeclinic_logo"
                            />
                            <div>
                                <span className={clsx(
                                    "text-blue_button text-2xl font-medium",
                                    )}
                                >
                                    Kode
                                </span>
                                <span
                                className={clsx(
                                    "text-blue_button text-[22px] font-extrabold",

                                )}
                                >
                                Clinic
                                </span>
                                <img src="assets/icons/close-icon2.svg" alt="close"
                                className='absolute top-5 left-[245px] w-[14px] h-[14px] mt-2 mr-2 cursor-pointer' onClick={closeModal} style={{cursor: "pointer"}} />
                            </div>
                    </div>
                        {/* KodeClinic Logo */}

                        <div className='flex-col mx-5 mt-[50px]'>
                            <div className='flex-row flex mx-auto mb-4'>
                                <img src="assets/icons/calendar-icon2.svg" alt="" className='w-[18px] h-[20px] mx-3'/>
                                <p className='mx-3'>Agenda</p>
                            </div>
                            <div className='flex-row flex mx-auto mb-4'>
                                <img src="assets/icons/Menu-icon-b.svg" alt="" className='w-[18px] h-[20px] mx-3'/>
                                <p className='mx-3'>Lista de Pacientes</p>
                            </div>
                            <div className='flex-row flex mx-auto mb-4'>
                                <img src="assets/icons/addp-icon.svg" alt="" className='w-[18px] h-[20px] mx-3'/>
                                <p className='mx-3'>Nuevo Paciente</p>
                            </div>
                            <div className='flex-row flex mx-auto mb-4'>
                                <img src="assets/icons/newappoiment-icon.svg" alt="" className='w-[18px] h-[20px] mx-3'/>
                                <p className='mx-3'>Nueva Cita</p>
                            </div>
                        </div>

                        <div className='flex-col mx-5 mt-[50px] absolute bottom-0 left-0'>
                            <div className='flex-row flex mx-auto mb-4'>
                                <img src="assets/icons/config-icon.svg" alt="" className='w-[18px] h-[20px] mx-3'/>
                                <p className='mx-3'>Perfil</p>
                            </div>
                            <div className='flex-row flex mx-auto mb-4'>
                                <img src="assets/icons/signout-icon.svg" alt="" className='w-[18px] h-[20px] mx-3'/>
                                <p className='mx-3'>Cerrar Sesión</p>
                            </div>
                            
                        </div>
                    </div>
                    {/* KodeClinic Logo  */}
                    

                        


                    
                </div>
            </div>
        
    );
}

