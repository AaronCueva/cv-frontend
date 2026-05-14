import {
  CardContent,
  TextField,
  Button
} from "@mui/material";

import fotoCV from "../assets/huerta/foto.png";
import coleImg from "../assets/huerta/cole.jpg";
import uniImg from "../assets/huerta/uni.jpg";
import profesionalImg from "../assets/huerta/profesional.png";
import personalImg from "../assets/huerta/personal.png";
import diseñoImg from "../assets/huerta/diseño.png";

function HuertaCV() {
  return (
    <>
      <section id="perfil" className="perfil">
        <div className="perfil-contenedor">
          <div className="perfil-imagen">
            <img src={fotoCV} alt="Foto de perfil" />
          </div>
          <div className="perfil-info">
            <h2 className="perfil-nombre">Huerta Florentino Jesus Manuel</h2>
            <p className="perfil-descripcion">
              Estudiante de Ingeniería Informática en la UNJFSC, apasionado por el desarrollo de software y con una trayectoria que combina proyectos académicos, personales y profesionales.
              <br /><br />
              Me especializo en Backend con Java, Spring Boot y PostgreSQL, además de tener experiencia en APIs REST, integración de IA aplicada, Docker y Google Cloud. También manejo frontend con React para construir soluciones completas.
              <br /><br />
              He participado en el desarrollo de sistemas empresariales, aplicaciones médicas y plataformas universitarias, logrando optimizar procesos, digitalizar registros y crear soluciones innovadoras con IA y realidad aumentada.
              <br /><br />
              Me caracterizo por mi trabajo en equipo, comunicación efectiva y orientación a resultados, lo que me permite adaptarme a entornos multidisciplinarios y aportar valor en proyectos tecnológicos de alto impacto.
            </p>
          </div>
        </div>
      </section>

      <section id="estudios" className="estudios">
        <h2 className="titulo-fuente">Estudios Realizados</h2>
        <hr />
        <br />
        <div className="estudios-columnas" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <div className="estudios-item" style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
            <img src={coleImg} alt="Colegio" style={{ width: '100%', height: '200px', borderRadius: '8px', objectFit: 'cover' }} />
            <div className="estudios-info">
              <h3>IE. Víctor Raúl Haya de la Torre</h3>
              <p>Primaria - Secundaria</p>
              <p>2014 - 2021</p>
            </div>
          </div>
          <div className="estudios-item" style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
            <img src={uniImg} alt="Universidad" style={{ width: '100%', height: '200px', borderRadius: '8px', objectFit: 'cover' }} />
            <div className="estudios-info">
              <h3>Universidad Nacional José Faustino Sánchez Carrión</h3>
              <p>Superior</p>
              <p>2022-2026</p>
            </div>
          </div>
        </div>
      </section>

      <section id="conocimiento" className="conocimiento">
        <h2 className="titulo-fuente">Conocimientos Técnicos</h2>
        <hr />
        <br />
        <div className="conocimientos-contenedor">
          <div className="conocimiento-categoria">
            <h3>● Backend</h3>
            <p>Java, Spring Boot, APIs REST, Python, FastAPI</p>
          </div>
          <div className="conocimiento-categoria">
            <h3>● Frontend</h3>
            <p>React, HTML, CSS, JavaScript, TypeScript</p>
          </div>
          <div className="conocimiento-categoria">
            <h3>● Bases de datos</h3>
            <p>PostgreSQL, MySQL, Google Drive DB</p>
          </div>
          <div className="conocimiento-categoria">
            <h3>● DevOps</h3>
            <p>Docker, Git/GitHub, Google Cloud, Apps Script</p>
          </div>
          <div className="conocimiento-categoria">
            <h3>● Otros</h3>
            <p>Integración de IA aplicada, prototipos con RA</p>
          </div>
        </div>
      </section>

      <section id="habilidades" className="habilidades">
        <h2 className="titulo-fuente">Habilidades</h2>
        <hr />
        <br />
        <div className="habilidades-contenedor">
          <div className="habilidad-card">
            <div className="habilidad-icono">
              <img src={profesionalImg} style={{ height: '100px' }} alt="Profesionales" />
            </div>
            <h3>Profesionales</h3>
            <div className="habilidades-tags">
              <span className="tag">Metodologías Ágiles</span>
              <span className="tag">Liderazgo</span>
              <span className="tag">Optimización</span>
              <span className="tag">Escalabilidad</span>
            </div>
          </div>

          <div className="habilidad-card">
            <div className="habilidad-icono">
              <img src={personalImg} style={{ height: '100px' }} alt="Personales" />
            </div>
            <h3>Personales</h3>
            <div className="habilidades-tags">
              <span className="tag">Autoaprendizaje</span>
              <span className="tag">Adaptabilidad</span>
              <span className="tag">Comunicación</span>
              <span className="tag">Innovación</span>
            </div>
          </div>

          <div className="habilidad-card">
            <div className="habilidad-icono">
              <img src={diseñoImg} style={{ height: '100px' }} alt="Diseño" />
            </div>
            <h3>Diseño</h3>
            <div className="habilidades-tags">
              <span className="tag">UI/UX</span>
              <span className="tag">Responsivo</span>
              <span className="tag">Prototipado</span>
              <span className="tag">Usabilidad</span>
            </div>
          </div>
        </div>
      </section>

      <section id="intereses" className="intereses">
        <h2 className="titulo-fuente">Intereses</h2>
        <hr />
        <br />
        <div className="intereses-contenedor">
          <CardContent className="interes-card">
            <h3>IA y Machine Learning</h3>
            <p>Explorar algoritmos de aprendizaje automático y aplicaciones de IA en soluciones empresariales y educativas.</p>
          </CardContent>

          <CardContent className="interes-card">
            <h3>Ciberseguridad</h3>
            <p>Desarrollar sistemas seguros y aprender sobre protección de datos, encriptación y seguridad en aplicaciones web.</p>
          </CardContent>

          <CardContent className="interes-card">
            <h3>Realidad Extendida</h3>
            <p>Crear experiencias inmersivas con RA y RV, explorando nuevas posibilidades en educación y entretenimiento.</p>
          </CardContent>

          <CardContent className="interes-card">
            <h3>Cloud Computing</h3>
            <p>Dominar arquitecturas de nube, microservicios y infraestructura como código para soluciones escalables.</p>
          </CardContent>
        </div>
      </section>

      <section id="contacto" className="contacto">
        <h2 className="titulo-fuente">Contáctame</h2>
        <hr />
        <br />
        <div className="contacto-contenedor">
          <form className="contacto-form" action="#">
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Asunto"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Mensaje"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              required
            />
            <Button
              type="submit"
              className="btn-enviar"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HuertaCV;

