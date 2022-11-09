/// <reference types="react" />
import type { IFormControlProps, IFormControlLabelProps, IFormControlErrorMessageProps, IFormControlHelperTextProps } from 'native-base';
declare type FormControlComponentType = ((props: IFormControlProps) => JSX.Element) & {
    Label: React.MemoExoticComponent<(props: IFormControlLabelProps) => JSX.Element>;
    ErrorMessage: React.MemoExoticComponent<(props: IFormControlErrorMessageProps) => JSX.Element>;
    HelperText: React.MemoExoticComponent<(props: IFormControlHelperTextProps) => JSX.Element>;
};
declare const FormControl: FormControlComponentType;
export { FormControl };
export type { IFormControlProps, IFormControlLabelProps, IFormControlErrorMessageProps, IFormControlHelperTextProps, } from 'native-base';
