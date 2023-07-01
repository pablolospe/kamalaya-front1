import React from 'react';

async function VoluntariosDetalle({ params }) {
  const { id } = params;
  const voluntarios = async (id) => {
    return await fetch(`http://kamalaya-back2.up.railway.app/user/${id}`, {
      next: {
        revalidate: 5,
      },
    }).then((res) => res.json());
  };
  const { data } = await voluntarios(id);
  console.log(data);

  return (
    <div>
      <h1>
        {data.nombre} {data.apellido}
      </h1>
      <ul>
        <li>DNI: {data.dni}</li>
        <li>telefono: {data.telefono}</li>
        {data.telefono2 && <li>telefono alternativo: {data.telefono2}</li>}
        <li>
          dirección: {data.calle} {data.numero}
        </li>
        <li>
          localidad: {data.localidad}, {data.provincia}
        </li>
        <li>{data.pais}</li>
        <li>CP: {data.codigoPostal}</li>
      </ul>
      <div>
        <p>Tiene auto? {data.tieneAuto ? 'Si' : 'No'}</p>
        <p>Tiene experiencia en CP? {data.experienciaCP ? 'Si' : 'No'}</p>
      </div>
      <div> 
        <p>Disponibilidad horaria: </p>
        {data.Disponibilidads.map(d=>(
            <>
            {d.diaSemana} de {d.horaInicio} a {d.horaFin}
            </>
        ))}
      </div>
    </div>
  );
}

export default VoluntariosDetalle;
