import { JSX } from 'solid-js';
import { InputProps } from '../input/type';

interface InputGroupProps extends InputProps {
    addBefore?: JSX.Element;
    addAfter?: JSX.Element;
}

export type { InputGroupProps };