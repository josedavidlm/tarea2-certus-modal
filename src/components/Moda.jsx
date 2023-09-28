export const Moda = ({modelando, setModelando, user}) => {
    console.log(modelando)
    return (

        <>
            {
                modelando && (
                    <div className='modelando'>
                         <img src={user.image} alt="" />
                        <h1>{user.name}</h1>
                        <button onClick={() => setModelando(false)}>Cerrar Modal</button>
                    </div>
                )
            }
        </>
    )
}
