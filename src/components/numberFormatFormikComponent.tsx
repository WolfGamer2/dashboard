import * as React from 'react';
import NumberFormat from '../components/numberFormatComponent';
import { FieldProps } from 'formik';
import { NumberFormatValues } from 'react-number-format';

export interface INumberFormatFormikComponent {
    label: string;
    format: string;
    placeholder?: string;
    value?: string;
    required?: boolean;
}
const NumberFormatFormikComponent: React.StatelessComponent<INumberFormatFormikComponent & FieldProps> = (props) => {
    const placeholder = (props.placeholder) ? props.placeholder : '';
    return (
        <NumberFormat
            onValueChange={handleChange(props)}
            label={props.label}
            placeholder={placeholder}
            format={props.format}
            value={props.value}
            required={props.required}
        />
    )
}
/**
 * Function factory that generates function to handle changes in user's choice.
 * @param props The props passed into the Textarea component.
 * @returns the function that handles changes to the choices provided by the user.
 */
function handleChange(props: INumberFormatFormikComponent & FieldProps): (value: NumberFormatValues) => void {
    return (value: NumberFormatValues) => {
        const field = props.field;
        const form = props.form;
        form.setFieldValue(field.name, parseInt(value.value, 10));
    };
}



export default NumberFormatFormikComponent;
