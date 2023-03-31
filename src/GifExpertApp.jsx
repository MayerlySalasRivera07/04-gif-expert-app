import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid"
import { AddCategory,GifGrid  } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hola']);

    const onAddCategory = ( newCategory )=>{

        if( categories.includes(newCategory)) return


        // console.log( newCategory )
        // categories.push(newCategory)
        setCategories([ newCategory , ...categories]);
        // setCategories([ ...categories , 'Buenas' ])
    }


  return (
    <>
  
        <h3>GifExpertApp</h3>

        <AddCategory 
                    // setCategories ={ setCategories }
                    onNewCategory={(value) => onAddCategory(value) }
                    />

        {  
            categories.map( ( category ) => (
               
                <GifGrid key ={ category } category={ category }/>
            // return (
            //     <div key={ category }>
            //         <h3>{ category }</h3>
            //         <li  >{ category }</li>
            //     </div>
            // )
            )) 
        }
      
            {/* <button onClick={ onAddCategory  }>Agregar</button> */}
   
        
    </>
   
  )
}
