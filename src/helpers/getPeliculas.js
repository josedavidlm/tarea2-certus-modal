export const getPeliculas = async() =>{
   

    try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = response.json()  
        return data  
      } catch (error) {
        console.error(error);
        console.error('prueba');
        const data = { }  
            return data
      }            
}