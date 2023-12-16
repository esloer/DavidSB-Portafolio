import {CardTrabajos} from  "./CardTrabajos"
import "../style/trabajos.css";

export const Trabajos =()=>{

    return(
        
        <div className="trabajos" id="trabajos">  

            <h2>Mis últimos <span> trabajos </span> realizados </h2>
            <p>Haz <span> click </span> en cualquiera de ellos para tener más información.</p>

            <div className="gridTrabajos">
                <CardTrabajos/>
            </div>

        </div>
    )
}