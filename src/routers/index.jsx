import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import PageNotFound from "../views/PageNotFound";
import PageWrapper from "../components/PageWrapper";
import NoteBoard from "../views/NoteBoard";

const RoutersApp = () => {
    return (
        <PageWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/note-board" element={<NoteBoard />}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </PageWrapper>
    );
}

export default RoutersApp;