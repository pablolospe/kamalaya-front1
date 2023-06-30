import React from 'react';

const voluntarios = async () => {
  return fetch('http://kamalaya-back2.up.railway.app/', {
    next: {
      revalidate: 5
    }
  }
  ).then(
    (res) => res.json()
  );
};

async function Voluntarios() {
  const data  = await voluntarios();
  console.log(data);

  return (
    <>
    
      <ul>
        {data.map((vol) => (
          <li>
            <h1>
              {vol.nombre} {vol.apellido}
            </h1>
            <ul>
              <li>{vol.telefono}</li>
              <li>{vol.email}</li>
              <li>
                {vol.calle} {vol.numero}
              </li>
              <li>{vol.profesion_oficio_ocupacion}</li>
              <li>{vol.localidad}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Voluntarios;
