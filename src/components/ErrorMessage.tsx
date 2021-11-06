import React from 'react';

interface ErrorMessageProps {
    text: string,
    className?: string,
    icon?: JSX.Element
}

const ErrorMessage = ({ text, className, icon }: ErrorMessageProps): JSX.Element => {
    return (
        <div className={ className }>
            <span>
                { icon ? <span>{ icon }</span> : null }
                { text }
            </span>
        </div>
    );
}

export default ErrorMessage;
