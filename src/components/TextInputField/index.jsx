import PropTypes from "prop-types";
import { Textarea } from "./styles";

const TextInputField = ({ value, placeholder, change, textAreaRef }) => {
    return (
        <>
            <Textarea
                value={value}
                name="TextInputField"
                placeholder={placeholder}
                onChange={e => change(e.target.value)}
                ref={textAreaRef}
            ></Textarea>
        </>
    );
}

TextInputField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    change: PropTypes.func.isRequired,
    textAreaRef: PropTypes.object,
}

export default TextInputField;