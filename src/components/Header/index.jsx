import { StyleHeader } from "./styles";
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <StyleHeader>
            <span>SoundWords</span>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Início</Link>
                    </li>
                    <li>
                        <Link to={"/note-board"}>Bloco de Notas</Link>
                    </li>
                </ul>
            </nav>
        </StyleHeader>
     );
}
 
export default Header;