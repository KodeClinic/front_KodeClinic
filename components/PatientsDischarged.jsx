export default function PatientsDischarged() {
  return (
    <div className="flex lg:flex-row flex-col w-[228px] h-[175px] lg:w-[395px] lg:h-[75px] px-2 py-2 border-t border-white_grey justify-center items-center shadow-outline shadow-lg text-center">
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <div className="flex flex-col items-start mb-3 lg:mb-0 ">
          <div className="flex items-center ">
            <img src="assets/icons/men-icon.png" alt="men" className="w-[30px] h-[30px] mx-3" />
            <p> Ricaro Florencio</p>
          </div>
        </div>

        <div className="w-[64px] h-[1px] bg-white_grey my-2 mb-4 lg:hidden "></div>
      
        <div className="flex flex-col items-start mb-3 lg:mb-0">
          <div className="flex items-center">
            <img src="assets/icons/phone.png" alt="phone" className="w-[30px] h-[30px] mx-3" />
            <p>55 789 5125</p>
          </div>
        </div>

        <div className="w-[64px] h-[1px] bg-white_grey my-2 mb-4 lg:hidden"></div>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex-row flex items-center">
          <img src="assets/icons/AddP.png" alt="Add" className="w-[30px] h-[30px] mx-3" />
          <p className="lg:hidden">Reactivar</p>
        </div>
      </div>
    </div>
  );
}

