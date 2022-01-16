import React from 'react'

const FormInput = (props) => {

    const {label, errorMessage, onChange, id, ...inputProps} = props;

    return (
        <div className="formInput mb-3">
            {/* Creates input methods for each input value in inputs array*/}
            <label className="form-label" >{label}</label>
            <input className="form-control" {...inputProps} onChange={onChange} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput
