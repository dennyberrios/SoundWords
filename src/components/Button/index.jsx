import PropTypes from "prop-types";
import { PrimaryButton } from "./styles";

const Button = ({ children, bg, bgHover, onClick, ...props }) => {
    return (
        <PrimaryButton 
            onClick={onClick} 
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
    onClick: PropTypes.func,
}

export default Button;