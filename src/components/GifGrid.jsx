import { useEffect, useState } from "react"
// import { GetGifs } from "../helperts/GetGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs( category );

    // console.log({isLoading})

    // const gifs =[1,2,3,4]

    // const [images, setImages] = useState([])

    // const getImages =async() =>{
    //     const newImages = await  GetGifs(category);
    //     setImages(newImages);
    // }

    // useEffect( ()=>{
    //     // GetGifs(category);
    //     getImages();
    //     // return
    // }, [] )

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2>)
        }

        <div className="card-grid">
            {
                images.map( ( image ) => (
                    // <li key={ id }>{ title }</li>
                    <GifItem key={image.id}
                             {...image}/> // obtener todas las propiedades de image esparciendolas
                ))
            }
           
        </div>
         
        {
        //    gifs.map( gif =>(
        //      <p>{gif}</p>
        //    ))
        }

    </>
  )
}
