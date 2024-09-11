import { useState } from "react";
import { AddCategory, DivGrid } from "../components";

export const GifExpertApp = () =>{
    const title = "Gif searcher - using React & Giffy API";

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {

        if( 
            categories.includes(newCategory.toLowerCase())
            || categories.includes(newCategory.toUpperCase()) 
            ) return;

        setCategories([newCategory, ...categories])
    }

    return(
        <>
            <h1> {title} </h1>

            <AddCategory 
            onNewCategory={onAddCategory}  />

                {categories.map( category =>(
                    <DivGrid 
                        key={category} 
                        category={category}  />
                    )
                )}


        </>
    )
}