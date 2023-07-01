import React from 'react';
import Link from 'next/link';

const voluntarios = async () => {
  return fetch('http://kamalaya-back2.up.railway.app/user', {
    next: {
      revalidate: 5
    }
  }
  ).then(
    (res) => res.json()
  );
};

async function Voluntarios({params}) {
  const { data }  = await voluntarios();
  console.log(data);

  return (
    <>
    
      <ul>
        {data.map((vol) => (
<Link href="/voluntarios/[id]" as={`/voluntarios/${vol.usuario_id}`}>
          <li style={{border:'solid 2px black', padding:'0 1rem 1rem'}}>
            <h2>
              {vol.nombre} {vol.apellido}
            </h2>
              <small>{vol.profesion_oficio_ocupacion}</small>
            <ul>
              <li>telefono: {vol.telefono}</li>
              <li>email: {vol.email}</li>
              <li>{vol.localidad}</li>
            </ul>
          </li>
          
        </Link>
        ))}
      </ul>
    </>
  );
}

export default Voluntarios;
