import "./Footer.css";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <h5>Creado por Cristofer Rodríguez</h5>
        <p>Desarrollador Web Full-Stack</p>
        <div>
          <a href="https://github.com/crisrdz">
            <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/in/cristofer-rodriguez-a49275254/">
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
      <div className="creditos">
        <div>
          <p>
            Imagen de fondo de{" "}
            <a href="https://www.freepik.es/vector-gratis/banner-moderno-actualmente-conexion-diseno-pixeles_9620540.htm#query=pixel%20art&position=1&from_view=keyword">
              BiZkettE1
            </a>{" "}
            en Freepik
          </p>
          <p>
            Sprites de{" "}
            <a href="https://sprites.pmdcollab.org/">PMD Sprite Repository</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
