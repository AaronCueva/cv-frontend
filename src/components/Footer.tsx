import type { Profile } from "../types/Profile";

interface Props {
    profile: Profile
}


function Footer({ profile }: Props) {

    return (
        
        <footer>
            <div>
                <p>
                    &copy; Universidad Nacional: José Faustino Sánchez Carrión<br />
                    Facultad Ingeniería Industrial, Sistemas e Informática<br />
                    Escuela Profesional Ingeniería Informática
                </p>
            </div>

            <div className="ciclo">
                <p>
                    Curso: Desarrollo de Aplicaciones Web<br />
                    Ciclo: IX
                </p>
            </div>
            <div>
                <p>
                    Estudiante: Ing. {profile.nombre} <br />
                    Docente: Ing. Ronald Demetrio Flores Flores
                </p>
            </div>

        </footer>
    )
}

export default Footer