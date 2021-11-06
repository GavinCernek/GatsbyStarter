import React, { useReducer, useEffect } from 'react';
import ContactFormField from './ContactFormField';
import ControlledTextInput from './ControlledTextInput';
import ControlledEmailInput from './ControlledEmailInput';
import SubmitButton from './SubmitButton';

interface ContactFormProps {
    className: string
}

type ContactFormActions =
    | { type: 'SUBMIT' }
    | { type: 'UPDATE_FIRST_NAME', payload: {
        firstName: string
    }}
    | { type: 'UPDATE_LAST_NAME', payload: {
        lastName: string
    }}
    | { type: 'UPDATE_EMAIL_ADDRESS', payload: {
        emailAddress: string
    }}
    | { type: 'INVALID_FIRST_NAME' }
    | { type: 'INVALID_LAST_NAME' }
    | { type: 'INVALID_EMAIL_ADDRESS' }
    | { type: 'RESET_FORM' }
    | { type: 'ERROR', payload: {
        hasError: boolean
    }}

interface ContactFormState {
    submitted: boolean,
    firstName: string,
    lastName: string,
    emailAddress: string,
    hasError: boolean,
    hasValidFirstName: boolean,
    hasValidLastName: boolean,
    hasValidEmailAddress: boolean
}

const initialState: ContactFormState = {
    submitted: false,
    firstName: '',
    lastName: '',
    emailAddress: '',
    hasError: false,
    hasValidFirstName: false,
    hasValidLastName: false,
    hasValidEmailAddress: false
}

const contactFormReducer = (state: ContactFormState, action: ContactFormActions): ContactFormState => {
    switch (action.type) {
        case 'SUBMIT': {
            return {
                ...state,
                submitted: true
            }
        }

        case 'UPDATE_FIRST_NAME': {
            return {
                ...state,
                firstName: action.payload.firstName,
                hasValidFirstName: true
            }
        }

        case 'UPDATE_LAST_NAME': {
            return {
                ...state,
                lastName: action.payload.lastName,
                hasValidLastName: true
            }
        }

        case 'UPDATE_EMAIL_ADDRESS': {
            return {
                ...state,
                emailAddress: action.payload.emailAddress,
                hasValidEmailAddress: true
            }
        }

        case 'INVALID_FIRST_NAME': {
            return {
                ...state,
                hasValidFirstName: false
            }
        }

        case 'INVALID_LAST_NAME': {
            return {
                ...state,
                hasValidLastName: false
            }
        }

        case 'INVALID_EMAIL_ADDRESS': {
            return {
                ...state,
                hasValidEmailAddress: false
            }
        }

        case 'RESET_FORM': {
            return {
                ...state,
                firstName: '',
                lastName: '',
                emailAddress: ''
            }
        }

        case 'ERROR': {
            return {
                ...state,
                hasError: action.payload.hasError
            }
        }

        default:
            return state;
    }

}

const ContactForm = ({ className }: ContactFormProps): JSX.Element => {
    const [{ submitted, firstName, lastName, emailAddress, hasError, hasValidFirstName, hasValidLastName, hasValidEmailAddress }, dispatch] = useReducer(contactFormReducer, initialState);

    const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        dispatch({ type: 'UPDATE_FIRST_NAME', payload: {
            firstName: e.currentTarget.value
        }});
    }

    const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        dispatch({ type: 'UPDATE_LAST_NAME', payload: {
            lastName: e.currentTarget.value
        }});
    }

    const updateEmailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        dispatch({ type: 'UPDATE_EMAIL_ADDRESS', payload: {
            emailAddress: e.currentTarget.value
        }});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName || !lastName || !emailAddress) {
            dispatch({ type: 'ERROR', payload: {
                hasError: true
            } });

            if (!firstName) {
                dispatch({ type: 'INVALID_FIRST_NAME' });
            }

            if (!lastName) {
                dispatch({ type: 'INVALID_LAST_NAME' });
            }

            if (!emailAddress) {
                dispatch({ type: 'INVALID_EMAIL_ADDRESS' });
            }

            return;
        }


        dispatch({ type: 'SUBMIT' });
        dispatch({ type: 'RESET_FORM' });
    }

    useEffect(() => {

        const resetError = () => {
            if (hasError) {
                dispatch({ type: 'ERROR', payload: {
                    hasError: false
                } });
            }
        }

        resetError();
    }, [firstName, lastName, emailAddress]);

    return (
        <form className={ className } onSubmit={ handleSubmit }>
            <ContactFormField hasError={ hasError && !hasValidFirstName } errorText="First name is required">
                <ControlledTextInput className="tt" id="test3" name="test3" value={ firstName } placeholder="First Name..." required={ false } onChange={ updateFirstName } />
            </ContactFormField>
            <ContactFormField hasError={ hasError && !hasValidLastName } errorText="Last name is required">
                <ControlledTextInput className="tt" id="test4" name="test4" value={ lastName } placeholder="Last Name..." required={ false } onChange={ updateLastName } />
            </ContactFormField>
            <ContactFormField hasError={ hasError && !hasValidEmailAddress } errorText="Email address is required">
                <ControlledEmailInput className="dw" id="wega" name="rwgaer" value={ emailAddress } placeholder="Email address..." required={ false } onChange={ updateEmailAddress } />
            </ContactFormField>
            <SubmitButton />
        </form>
    );
}

export default ContactForm;
