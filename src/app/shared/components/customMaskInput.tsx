import MaskedInput from 'react-text-mask'

export interface PhoneValidationState {
    countryCode: string,
    operatorID: string,
    phoneNumber: string
}

interface TextMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
}

// mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
export function TextCountryCode(props: TextMaskCustomProps) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['+',/\d/, /\d/, /\d/,]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}
export function TextOperatorId(props: TextMaskCustomProps) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export function TextPhoneNumber(props: TextMaskCustomProps) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}
