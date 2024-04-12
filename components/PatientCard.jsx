
export default function PatientCard({ children, title}) {
    return(
        <div className="shadow-outline shadow-lg w-[230px] h-[170px] border border-white_grey items-center ">
            <div className="flex flex-col gap-1 px-6 py-1 items-center">
                <img src="assets/icons/women-icon.png" alt="Women" className="w-[24px] h-[24px] " />
                <p className="font-bold mb-2">Maria Ritos</p>
            </div>
            <div className="flex flex-col items-center ">
                <div className="bg-pink rounded-[25px] flex flex-row object-center w-[160px] h-[30px] px-3 mx-2 mb-3">
                    <img src="assets/icons/stethoscope.png" alt="stethoscope" className="w-[13px] h-[13px] mx-2 my-2" />
                    <p className="mx-1 text-center my-1">Tendinitis</p>
                </div>
                <div class=" w-[64px] h-[1px] bg-white_grey my-2 mb-4 "></div>
                <div className="flex flex-row">
                    <img src="assets/icons/phone.png" alt="Phone" />
                    <p className="mx-2 text-sm">55 7976 2085</p>
                </div>
            </div>
        </div>
    );

}