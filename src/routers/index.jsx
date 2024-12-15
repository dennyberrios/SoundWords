import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import PageNotFound from "../views/PageNotFound";
import PageWrapper from "../components/PageWrapper";

const RoutersApp = () => {
    return (
        <PageWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </PageWrapper>
    );
}

export default RoutersApp;