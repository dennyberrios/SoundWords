import PropTypes from "prop-types";
import {
    createContext,
    useEffect,
    useState
} from "react";
import NotepadController from "../controller/NotepadController";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [notePadDate, setNotepadDate] = useState([]);

    useEffect(() => {
        getNotepadContent().then(response => setNotepadDate(response))
    }, [])
    
    async function getNotepadContent() {
        try {
            const response = await NotepadController.getNotePad();
            return response;
        } catch (error) {
            console.error("Erro ao buscar dados do notepad:", error);
            throw new Error("Não foi possível recuperar os dados do notepad.");
        }
    }

    return (
        <UserContext.Provider value={{
            notePadDate,
            setNotepadDate
        }} >
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node
}