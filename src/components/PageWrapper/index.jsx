import { useLocation } from "react-router-dom";
import Header from "../Header";
import PageNotFound from "../../views/PageNotFound";
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
    const location = useLocation();

    // List of defined routes
    const validRoutes = ["/", "/note-board"];

    // Check that the current route is among the valid ones  
    const isValidRoute = validRoutes.includes(location.pathname);

    return (
        <>
            {isValidRoute && <Header/>}
            {
                isValidRoute ? (
                    children
                ) : (
                    <PageNotFound />
                )
            }
        </>
    );
}

PageWrapper.propTypes = {
    children: PropTypes.node,
}

export default PageWrapper;