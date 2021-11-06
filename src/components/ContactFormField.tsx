import React from 'react';
import ErrorMessage from './ErrorMessage';

interface ContactFormFieldProps {
    className?: string,
    hasError: boolean,
    errorText?: string,
    children: JSX.Element[] | JSX.Element
}

const ContactFormField = ({ className, hasError, errorText, children }: ContactFormFieldProps): JSX.Element => {
    return (
        <div className={ className }>
            { children }
            { hasError ? <ErrorMessage text={ errorText } /> : null }
        </div>
    );
}

export default ContactFormField;
