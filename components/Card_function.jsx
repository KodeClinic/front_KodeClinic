import medical from "../public/assets/icons/medical_exp.svg";

export default function Card_function() {
  return (
    <main className="flex justify-center items-center">
      <article className="w-36 h-56 bg-white rounded-3xl shadow-2xl p-5 flex flex-col justify-center items-center">
        <img className="w-12 h-12" src={medical} alt="MDN" />
        <h1 className="text-[14px]">TITULO</h1>
        <p className="text-[14px]">DESCRIPCION DE LA FUNCIONALIDAD</p>
      </article>
    </main>
  );
}
