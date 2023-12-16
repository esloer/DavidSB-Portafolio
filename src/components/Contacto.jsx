import {DatosClientes} from  "./DatosClientes"
import {RedesSociales} from  "./RedesSociales"
import "../style/contacto.css";

export const Contacto =()=>{

    return(
        
        <div className="contacto" id="contacto">  

            <h2>Solicita mis <span> servicios </span></h2>
            <p>Si te han gustado algunos de mis trabajos no dudes en ponerte en <span> contacto </span> conmigo. Deja tus datos y juntos realizaremos cualquier proyecto que tengas en mente.</p>

            <div className="datosRedes">
                <DatosClientes/>
                <RedesSociales/>
            </div>

        </div>
    )
}