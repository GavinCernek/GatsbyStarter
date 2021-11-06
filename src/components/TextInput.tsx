import React, { useState } from 'react';

interface TextInputProps {
    className?: string,
    id: string,
    name: string,
    placeholder?: string,
    required: boolean
}

const TextInput = ({ className, id, name, placeholder, required }: TextInputProps): JSX.Element => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    }

    return (
        <label htmlFor={ id } className="">
            <input type="text" className={ className } id={ id } name={ name } value={ value } onChange={ handleChange } 
                    placeholder={ placeholder } required={ required } aria-required={ required } />
        </label>
    );
}

export default TextInput;
