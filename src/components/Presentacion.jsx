import "../style/presentacion.css";

export const Presentacion =()=>{

    return(
        
        <div className="presentacion" id="inicio">  
            <img src="./assets/img/foto_perfil.png" alt="" />
            <h2>Me llamo <span>David </span>Soler Bazar</h2>
            <p>Soy técnico en telecomunicaciones con 14 años de experiencia en
            instalaciones hoteleras como en ICT, e instalador oficial de Astra.
            Amplios conocimientos en las principales marcas del sector como
            Alcad, FTE, televes, Ek, incluyendo IPTV con cabeceras kobbi.
            Experiencia en redes con CAT6 y FO , CCTV y telefonía. Y ahora
            empezando con el desarrollo web. No dudes en ponerte en contacto en
            la sección correspondiente y encantado resolvere cualquier duda que
            tengas.</p>
            <a
            href="./assets/curriculum/curriculum.docx"
            download="curriculum"
            className="buttom"
            >Descaga mí curriculum
          </a>
        </div>
    )
}