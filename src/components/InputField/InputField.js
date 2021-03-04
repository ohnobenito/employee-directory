import React from "react";

function InputField(props) {
    return (
        <div>
            <form className="form">
                <input
                value=""
                name=""
                type="text"
                placeholder="Type to filter search results"
                />
            </form>
        </div>
    )
}

export default InputField;