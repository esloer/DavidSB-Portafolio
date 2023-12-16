import { Tabla } from "./Tabla";
import { Hobbies } from "./Hobbies";
import "../style/sobremi.css";

export const SobreMi =()=>{

    return(
        
        <div className="sobremi" id="sobremi">  
            <h2>Sobre<span> mí</span></h2>
            <p>Hola, soy <span> DAVID </span> SOLER BAZAR. Aquí encontrarás  información más detallada para que me conozcas un poco mejor. Soy una persona sencilla que se ganaba la vida como técnico de telecomunicaciones y ahora busca hacerse un hueco en el mundo de la informática y desarrollo web. Encantado de conocerte.</p>
            <div className="contenido">
                <Tabla/>
                <Hobbies/>
            </div>
                
        </div>
    )
}