import React from 'react';
import clsx from 'clsx';

export default function HamburgerMenu({ isVisible }) {
    if (!isVisible) return null;

    return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-start items-center">
                <div className=" bg-background w-[280px] rounded-r-[20px] items-center flex-col h-screen">
                    <div className='items-center flex-col justify-center '>
                    <div className={clsx(
                            "flex items-center px-4 gap-1 py-[18px] min-[980px]:py-3",
                            "sm:px-14  min-[980px]:pl-20 min-[980px]:pr-0"
                            )}
                            >
                            <img className={clsx(
                                "w-7 h-7", "min-[980px]:w-8 min-[980px]:h-8")}
                                src="assets/img-kodeclinic-logo.png"
                                alt="kodeclinic_logo"
                            />
                            <div>
                                <span className={clsx(
                                    "text-blue_button text-[16px] font-medium",
                                    "min-[980px]:text-2xl"
                                    )}
                                >
                                    Kode
                                </span>
                                <span
                                className={clsx(
                                    "text-blue_button text-[16px] font-extrabold",
                                    "min-[980px]:text-[22px]"
                                )}
                                >
                                Clinic
                                </span>
                            </div>
                    </div>
                        {/* KodeClinic Logo */}

                        <div className='flex-col '>
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
                    </div>
                    {/* KodeClinic Logo  */}
                    

                        


                    
                </div>
            </div>
        
    );
}

