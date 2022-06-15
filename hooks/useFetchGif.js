import { useEffect, useState } from "react";
import { getGifs } from "../functions/getGifs";

export const useFetchGif = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getGif = async() => {
      const newGif = await getGifs( category );
      setImages(newGif);
      setIsLoading( false );
    }
  
    useEffect(()=>{
      getGif();
     }, [])

    return {
        images,
        isLoading
    }
}
