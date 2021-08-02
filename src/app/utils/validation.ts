import {useEffect, useState} from "react";

const useValidation = (value: any, validations: any) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLength, setMinLengthError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }
    }, [value]);

    return {
        isEmpty,
        minLength
    }

}

export const useInput = (initialValue: any, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (event: any) => {
        setValue(event.target.value)
    }

    const onBlur = (event: any) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }


}
