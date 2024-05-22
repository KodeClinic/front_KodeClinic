export default function PatientCard({ name, gender, number }) {
  return (
    <div className=" w-[362px] h-[140px] border border-white_grey">
      <div className="flex flex-row gap-3 px-6 py-4">
        <img src="/assets/icons/women-icon.png" alt="Women" />
        <p className="font-bold">Maria Ritos</p>
      </div>
      <div className="flex flex-row items-center">
        <div className="bg-pink rounded-[25px] flex flex-row object-center w-[160px] h-[30px] px-3 mx-2">
          <img
            src="/assets/icons/stethoscope.png"
            alt="stethoscope"
            className="w-[13px] h-[13px] mx-2 my-2"
          />
          <p className="mx-1 text-center my-1">Tendinitis</p>
        </div>
        <div class="border-l h-[64px] border-white_grey mx-5"></div>
        <div className="flex flex-row">
          <img src="/assets/icons/Phone.png" alt="Phone" />
          <p className="mx-2">55 7976 2085</p>
        </div>
      </div>
    </div>
  );
}
