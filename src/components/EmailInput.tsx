import React, { useState } from 'react';

interface EmailInputProps {
    className?: string,
    id: string,
    name: string,
    placeholder?: string,
    required: boolean
}

const EmailInput = ({ className, id, name, placeholder, required }: EmailInputProps): JSX.Element => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    }

    return (
        <label htmlFor={ id } className="">
            <input type="email" className={ className } id={ id } name={ name } value={ value } onChange={ handleChange } 
                    placeholder={ placeholder } required={ required } aria-required={ required } />
        </label>
    );
}

export default EmailInput;
