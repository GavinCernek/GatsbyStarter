import React from 'react';

interface ControlledEmailInputProps {
    className?: string,
    id: string,
    name: string,
    value: string,
    placeholder?: string,
    required: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ControlledEmailInput = ({ className, id, name, value, placeholder, required, onChange }: ControlledEmailInputProps): JSX.Element => {
    return (
        <label htmlFor={ id } className="">
            <input type="email" className={ className } id={ id } name={ name } value={ value } onChange={ onChange } 
                    placeholder={ placeholder } required={ required } aria-required={ required } />
        </label>
    );
}

export default ControlledEmailInput;
