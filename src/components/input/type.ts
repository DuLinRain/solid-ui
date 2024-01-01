import { JSX } from 'solid-js';
import { InputSizes, InputStatus } from './constant';

// 大小
type InputSizeType = typeof InputSizes[number];
type InputStatusType = typeof InputStatus[number];
interface InputProps {
    className?: string;
    size?: InputSizeType;
    status?: InputStatusType;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    defaultValue?: string;
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange?: (value: string, e: InputEvent) => void;
}

export type { InputProps };