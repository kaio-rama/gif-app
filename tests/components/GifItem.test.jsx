import { screen, render } from "@testing-library/react"
import { GifItem } from "../../components"



describe("Pruebas en <GifItem />", ()=>{

    const title = "Titulo";
    const url = "https://titulo.com/imagen.jpg";

    test("debe hacer match con el snapshot", ()=> {
        
        const {container} = render( <GifItem title={title} url={url} /> );
        expect({container}).toMatchSnapshot();

    })

    test('debe mostrar la imagen con el URL y ALT indicado', ()=>{

        render( <GifItem title={title} url={url} /> );
        const { src, alt } = screen.getByRole('img');
    
        expect ( src ).toBe( url );
        expect ( alt ).toBe( alt );

    })

    test('debe tener titulo', ()=>{
        
        render( <GifItem title={title} url={url} /> );
        expect(screen.getByText( title)).toBeTruthy();
        
    })

})