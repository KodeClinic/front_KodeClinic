import clsx from "clsx";

export default function New_pacient() {
  return (
    <main>
      <div className={clsx("w-[328px] h-[812px] bg-white")}>
        <h1>REGISTRO DE NUEVO PACIENTE</h1>
        <p>información Personal</p>

        <div>
          <p>Nombre del paciente</p>
          <input type="text" placeholder="Nombre" />
        </div>

        <div>
          <p>Apellido del paciente</p>
          <input type="text" placeholder="Apellidos" />
        </div>

        <div>
          <p>Fecha de nacimiento</p>
          <input type="text" />
        </div>

        <div>
          <p>Ocupación</p>
          <input type="text" placeholder="Ocupación" />
        </div>

        <div>
          <p>Sexo</p>
          <input type="text" placeholder="Ocupación" />
        </div>

        <div>
          <p>Tipo de sangre</p>
          <input type="text" />
        </div>

        <div>
          <p>Religión</p>
          <input type="text" />
        </div>
      </div>
    </main>
  );
}
