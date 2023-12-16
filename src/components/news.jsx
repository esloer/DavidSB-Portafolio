import "../style/news.css";

export const News = () => {
  return (
    <>
    <div className="sobremi" id="sobremi">  
            <h2><span> Newsletter </span></h2>
            <p>Reistrate ahora y recibe cada mes nuestra<span> Newsletter </span> y mantente informado en todo momento sobre nuestras novedades.</p>       
        </div>
    <div className="new" id="news">
      <div class="todo">
        <div class="titulo">
          <img src="./assets/img/logo.jpg" alt="" />
          <img src="./assets/img/redes.png" alt="" />
        </div>
        <div class="cuerpo">
          <h1 class="h1">
            David diseño <span>STYLE</span>
          </h1>
          <div class="back">
            <div class="texto">
              <h2>Diseñador web diseñando para marcas modernas.</h2>
              <p>
                Diseñador, programador para dar a las marcas ese diseño que las
                identifique. Las marcas prosperan y la gente también.
              </p>
            </div>
          </div>
          <div class="icons">
            <div>
              <div class="ic1">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h4 class="h4">SERVIDOR DE CORREO</h4>
              <p>
                Servicio de mensajeria para que tus clientes siempre pudan estar
                en contacto.
              </p>
            </div>
            <div>
              <div class="ic2">
                <i class="fa-solid fa-window-restore"></i>
              </div>
              <h4>WEBS</h4>
              <p class="p1">Diseño web de todo tipo. Haz tu web realidad.</p>
            </div>
            <div>
              <div class="ic3">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <h4 class="h4">TIENDAS</h4>
              <p>Diseño atractivo para tu tienda online.</p>
            </div>
          </div>
          <div class="end">
            <a href="../index.html">
            <img src="./assets/img/logo.jpg" alt="" />
              <button>MI PORTAFOLIOS</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
