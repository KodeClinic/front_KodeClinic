
export default function PatientCard({ children, title}) {
    return(
        <div className="shadow-outline shadow-lg w-[230px] h-[170px] lg:w-[362px] lg:h-[160px] border border-white_grey items-center ">
            <div className="flex flex-col gap-1 px-6 py-1 items-center lg:flex-row lg:mt-5">
                <img src="assets/icons/women-icon.png" alt="Women" className="w-[24px] h-[24px] " />
                <p className="font-bold mb-2 lg:mb-0">Maria Ritos</p>
            </div>
            <div className="flex flex-col items-center lg:flex-row 0">
                <div className="bg-pink rounded-[25px] flex flex-row object-center w-[160px] h-[30px] px-3 mx-2 mb-3 lg:mb-0">
                    <img src="assets/icons/stethoscope.png" alt="stethoscope" className="w-[13px] h-[13px] mx-2 my-2" />
                    <p className="mx-1 text-center my-1">Tendinitis</p>
                </div>
                <div class=" w-[64px] h-[1px] lg:w-[1px] lg:h-[64px] bg-white_grey my-2 mb-4 lg:mb-0 "></div>
                <div className="flex flex-row lg:mx-5">
                    <img src="assets/icons/phone.png" alt="Phone" className="w-[20px] h-[20px]"/>
                    <p className="mx-2 text-sm">55 7976 2085</p>
                </div>
            </div>
        </div>
    );

}