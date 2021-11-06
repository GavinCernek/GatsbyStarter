import React from 'react';

interface ControlledTextInputProps {
    className?: string,
    id: string,
    name: string,
    value: string,
    placeholder?: string,
    required: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ControlledTextInput = ({ className, id, name, value, placeholder, required, onChange }: ControlledTextInputProps): JSX.Element => {
    return (
        <label htmlFor={ id } className="">
            <input type="text" className={ className } id={ id } name={ name } value={ value } onChange={ onChange } 
                    placeholder={ placeholder } required={ required } aria-required={ required } />
        </label>
    );
}

export default ControlledTextInput;
