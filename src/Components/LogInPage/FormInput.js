import React from 'react'

const FormInput = (props) => {

    const {label, errorMessage, onChange, id, ...inputProps} = props;

    return (
        <div className="formInput mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            {/* Creates input methods for each input value in inputs array*/}
            <input className="mdl-textfield__input" {...inputProps} onChange={onChange} />
            <label className="mdl-textfield__label" for={id}>{label}</label>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput
