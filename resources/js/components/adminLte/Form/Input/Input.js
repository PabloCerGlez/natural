
import React from 'react';
import {printErrors} from "../../../../utilities/validationMessages";

export const Input = (props) => {
    const {title, type, value, reference, name, error, handleOnChange, defaultValue} = props;

    return (
        <div className="form-group">
            <label>{title}</label>

            <input className={error ? 'form-control is-invalid' : 'form-control'}
                   name={name}
                   type={type}
                   value={value}
                   ref={reference}
                   onChange={handleOnChange}
                   defaultValue={defaultValue}
            />

            <div className="invalid-feedback">
                {printErrors(error)}
            </div>
        </div>
    );
}
