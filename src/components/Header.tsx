import type { Profile } from "../types/Profile";
import { Switch } from "@mui/material";

interface Props {
    profile: Profile
    cambiarPerfil: () => void
}

function Header({ profile, cambiarPerfil }: Props) {

    return (
        <header className="header">

            <p>{profile.numero} | {profile.correo}</p>
            <nav>
                <ul>
                    <li><a href="#perfil">Perfil</a></li>
                    <li><a href="#estudios">Estudios</a></li>
                    <li><a href="#conocimiento">Conocimiento</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#intereses">Intereses</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    <li><Switch onChange={cambiarPerfil}></Switch></li>
                </ul>

            </nav>



        </header>
    )
}

export default Header