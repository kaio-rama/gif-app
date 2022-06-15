# gif-app
#### Gif App using React &amp; the Giphy API


 Simple App using the Giphy rest API and React as technology.
 Also used VITE // https://vitejs.dev/config/
 
 Implementing Hooks as useState && useEffect.
 
 ### Also I use a personal Hook called: useFetchGif
 
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
 
 You can copy the code but I rather preffer you use your own API key. It's free to make and to use.
 
