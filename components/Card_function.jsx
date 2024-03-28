export default function Card_function(props) {
  return (
    <main className="flex justify-center items-center mt-5">
      <article className="w-[159px] h-[223px] bg-white rounded-3xl shadow-2xl p-2 flex flex-col justify-center items-center">
        <img className="w-12 h-12" src={props.icon} alt="MDN" />
        <h1 className="font-bold text-[14px] mt-2">{props.title}</h1>
        <p className="text-blue_gray-600 text-[14px] mt-3">
          {props.description}
        </p>
      </article>
    </main>
  );
}
