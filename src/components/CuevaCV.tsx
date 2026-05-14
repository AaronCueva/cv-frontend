import faustino from "../assets/faustino.jpg"
import fotoCV from "../assets/FOTO-CV.jpeg"
import java from "../assets/java.png"
import python from "../assets/python.png"
import sql from "../assets/sql.jpg"
import xammar from "../assets/xammar.jpg"
import { Card } from "@mui/material"
import { CardContent } from "@mui/material"
import { LinearProgress } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import { Height, Person, Phone, Work } from "@mui/icons-material"

function CuevaCV() {
  return (
    <>
      <section id="perfil" className="perfil">
        <div className="perfil-container">
          <div className="perfil-image">
            <img src={fotoCV} alt="Foto de Perfil" />
          </div>
          <div className="perfil-info">
            <h2 className="perfil-nombre">Aaron Cueva Paredes</h2>
            <p className="perfil-descripcion">Soy estudiante del IX ciclo de Ingeniería Informática en la UNJFSC y
              desarrollador Backend especializado en Java y Spring Boot, con aproximadamente dos años de
              experiencia participando en el desarrollo de APIs, sistemas web y soluciones orientadas a
              arquitectura cliente–servidor.
              He trabajado en la construcción de servicios REST, integración con bases de datos relacionales,
              autenticación y seguridad, y despliegue de aplicaciones, aplicando buenas prácticas de desarrollo,
              control de versiones y metodologías ágiles. Me enfoco en escribir código limpio, mantenible y
              escalable, priorizando el rendimiento y la seguridad de las aplicaciones.
            </p>
          </div>
        </div>
      </section>
      <section id="estudios" className="estudios">
        <h2 className="titulo-fuente">Estudios Realizados</h2>
        <hr />
        <br />
        <div className="estudios-columnas">
          <div className="estudios-primaria">
            <div className="primaria-image">
              <img src={xammar} alt="Foto de Primaria" />
            </div>
            <div className="primaria-info">
              <h2 className="primaria-nombre">I.E.E. Luis Fabio Xammar Jurado</h2>
              <p className="primaria-descripcion">
                Primaria <br />
                2014 - 2016
              </p>
            </div>
          </div>

          <div className="estudios-secundaria">
            <div className="secundaria-image">
              <img src={xammar} alt="Foto de Secundaria" />
            </div>
            <div className="secundaria-info">
              <h2 className="secundaria-nombre">I.E.E. Luis Fabio Xammar Jurado</h2>
              <p className="secundaria-descripcion">
                Secundaria <br />
                2017 - 2021
              </p>
            </div>
          </div>

          <div className="estudios-universidad">
            <div className="universidad-image">
              <img src={faustino} alt="Foto de Universidad" />
            </div>
            <div className="universidad-info">
              <h2 className="universidad-nombre">Universidad Nacional José Faustino Sánchez Carrión</h2>
              <p className="universidad-descripcion">
                Superior <br />
                2022 - En proceso
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="conocimiento" className="conocimiento">
        <h2 className="titulo-fuente">Conocimientos</h2>
        <hr />
        <br />
        <div className="conocimiento-card">
          <div className="java-image">
            <img src={java} alt="Foto de Java" />
          </div>
          <div className="java-info">
            <div className="java-titulo">
              <h2>Java</h2>
            </div>
            <div className="java-barra">
              <div className="barra-progreso-java" style={{ width: "70%" }}>70%</div>
            </div>
          </div>
        </div>

        <br />

        <div className="conocimiento-card">
          <div className="sql-image">
            <img src={sql} alt="Foto de SQL" />
          </div>
          <div className="sql-info">
            <div className="sql-titulo">
              <h2>SQL</h2>
            </div>
            <div className="sql-barra">
              <div className="barra-progreso-sql" style={{ width: "80%" }}>80%</div>
            </div>
          </div>
        </div>

        <br />

        <div className="conocimiento-card">
          <div className="python-image">
            <img src={python} alt="Foto de Python" />
          </div>
          <div className="python-info">
            <div className="python-titulo">
              <h2>Python</h2>
            </div>
            <div className="python-barra">
              <div className="barra-progreso-python" style={{ width: "50%" }}>50%</div>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="habilidades">
        <h2 className="titulo-fuente">Habilidades</h2>
        <hr />
        <br />
        <div className="habilidades-container">
          <div className="habilidad">
            <span className="titulo-habilidad">Habilidades Blandas</span>
            <div className="barra">
              <LinearProgress
                variant="determinate"
                value={50}
                className="progreso"
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
              />
            </div>
          </div>

          <div className="habilidad">
            <span className="titulo-habilidad">Proactivo</span>
            <div className="barra">
              <LinearProgress
                variant="determinate"
                value={60}
                className="progreso"
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
              />
            </div>
          </div>

          <div className="habilidad">
            <span className="titulo-habilidad">Responsable</span>
            <div className="barra">
              <LinearProgress
                variant="determinate"
                value={100}
                className="progreso"
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
              />
            </div>
          </div>

          <div className="habilidad">
            <span className="titulo-habilidad">Resolución de problemas</span>
            <div className="barra">
              <LinearProgress
                variant="determinate"
                value={90}
                className="progreso"
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
              />
            </div>
          </div>

          <div className="habilidad">
            <span className="titulo-habilidad">
              Trabajo en equipo
            </span>
            <div className="barra">
              <LinearProgress
                variant="determinate"
                value={70}
                className="progreso"
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
              />
            </div>
          </div>

          <div className="habilidad">
            <span className="titulo-habilidad">Adaptación al cambio</span>
            <div className="barra">
              <LinearProgress
                variant="determinate"
                value={100}
                className="progreso"
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
              />
            </div>
          </div>

          <div className="habilidad">
            <span className="titulo-habilidad">Metodologías ágiles</span>
            <div className="barra">
              <LinearProgress
                variant="determinate"
                value={100}
                className="progreso"
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
              />
            </div>
          </div>
        </div>

      </section>
      <section id="intereses" className="intereses">
        <h2 className="titulo-fuente">Intereses</h2>
        <hr />
        <br />

        <div className="intereses-container">
          <CardContent className="interes-card">
            <h3>Desarrollo web</h3>
          </CardContent>
          <CardContent className="interes-card">
            <h3>Desarrollo web</h3>
          </CardContent>
          <CardContent className="interes-card">
            <h3>Desarrollo web</h3>
          </CardContent>
          <CardContent className="interes-card">
            <h3>Desarrollo web</h3>
          </CardContent>
          <CardContent className="interes-card">
            <h3>Desarrollo web</h3>
          </CardContent>
          <CardContent className="interes-card">
            <h3>Desarrollo web</h3>
          </CardContent>
          <CardContent className="interes-card">
            <h3>Desarrollo web</h3>
          </CardContent>
        </div>

      </section>
      <section id="contacto" className="contacto">
        <h2 className="titulo-fuente">Contacto</h2>
        <hr />
        <br />
        <form action="#">
          <div className="form-container">
            <label><i><PersonIcon sx={{fontSize: 16}}/></i> Nombres  </label>
            <input className="input-nombre" type="text" placeholder="Ingrese sus nombres" name="txtNombres" />

            <br />

            <label><i><PersonIcon sx={{fontSize: 16}}/></i> Apellidos</label>
            <input className="input-apellido" type="text" placeholder="Ingrese sus apellidos" name="txtApellidos" />

            <br />

            <label><i><PhoneIcon sx={{fontSize: 16}}/></i> Celular</label>
            <input className="input-celular" type="text" placeholder="Ingrese su celular" name="txtCelular" />

            <br />

            <label><i><EmailIcon sx={{fontSize: 16}}/></i> Correo electrónico</label>
            <input className="input-correo" type="text" placeholder="Ingrese su correo" name="txtCorreo" />
            <br />

            <label><i><Work sx={{fontSize: 16}}/></i> Comentario:</label>
            <textarea className="input-comentario" placeholder="Ingrese su comentario" name="txtComentario"></textarea>

          </div>
          <input className="btn-subir" type="submit" />
        </form>
      </section>
    </>
  )
}

export default CuevaCV