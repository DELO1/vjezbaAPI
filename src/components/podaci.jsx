import React, { useState } from 'react'

const UcitavanjeGumb = () => {

    const [podaci, setPodaci] = useState(null);

    const getData = () => {
    fetch ("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        setPodaci(data);

    });
};


  return (
    <div>
    
        <button onClick={() => {
            getData();
        }}>

        Dohvati podatke

        </button>

        {podaci && (
            <>
            <img src="https://apod.nasa.gov/apod/image/1908/CannonSupernova_English_960.jpg" alt="Supernova Cannon" />
            <p>{podaci.explanation}</p>
            <p>{podaci.date}</p>
            </>
        )}

    </div>
  )
}

export default UcitavanjeGumb