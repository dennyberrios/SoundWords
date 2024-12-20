import PropTypes from "prop-types";
import { PrimaryButton } from "./styles";

const Button = ({ children, bg, bgHover, ...props }) => {
    return (
        <PrimaryButton
            $bg={bg} $bgHover={bgHover} 
            {...props}
        >
            {children}
        </PrimaryButton>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    bg: PropTypes.string,
    bgHover: PropTypes.string,
}

export default Button;