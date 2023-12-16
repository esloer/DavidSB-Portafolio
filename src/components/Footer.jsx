import "../style/footer.css";

import { FaYoutube  , FaTwitch  } from "react-icons/fa";

export const Footer =()=>{

    return(
        <footer>  
            <p>
                Si quieres ver como trabajo en directo, no dudes visitarme en
                <span> MIS CANALES</span> de :
            </p>
            <div className="canal">
                <FaYoutube className="fa-youtube"/>
                <FaTwitch className="fa-twitch"/>
            </div>
        </footer>
    )
}