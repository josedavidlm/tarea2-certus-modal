import { useState } from "react"
import { Moda } from "./Moda"

export const MostrarPeliculas = ({ pelicula }) => {
    const [modelando, setModelando] = useState({})

    const abrirModelando = (id) => {
        console.log(id)
        setModelando(prevent => ({
            ...prevent,
            [id]: true
        }))
    }

    return (

   
        pelicula && (
            pelicula.map((user) => (
                <div className="cardPersonaje">        
                    <div className="row"  key={user.id} >
                    <div className="col-6">
                    <img src={user.image} alt="" width={300} height={300} />
                    </div>
                    <div className="col-6">
                        <h2>{user.name}</h2>
                        <p>{user.species}</p>
                        <p>{user.gender}</p>
                        <p>{user.status}</p>
                        <p>{user.id}</p>  

                        <button onClick={() => abrirModelando(user.id)}>Abrir Modal</button>
                        {
                            modelando[user.id] && (
                                <Moda modelando={modelando[user.id]} setModelando={setModelando} user={user} />
                            )
                        }

                    </div> 
                    </div>
            </div>  
        ))
        )

    )
}
