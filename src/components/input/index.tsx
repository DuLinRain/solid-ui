import { ParentComponent, createSignal } from 'solid-js';
import cx from 'classnames';
import type { InputProps } from './type';
import "../global.less";
import './style/index.less';

const Input: ParentComponent<InputProps> =  (props) => {
    const {
        className,
        size = 'default',
        status,
        disabled = false,
        placeholder = 'please enter something',
        defaultValue,
        prefix,
        suffix,
        onBlur,
        onFocus,
        onChange,
    } = props;

    const [focus, setFocus] = createSignal(false);
    const [value, setValue] = createSignal(defaultValue || '');
    return (
        <span class={cx(className)} classList={{
            ['crystal-input-inner-wrapper']: true,
            [`crystal-input-inner-wrapper-${size}`]: true,
            [`crystal-input-inner-wrapper-focus`]: focus(),
            [`crystal-input-inner-wrapper-${status}`]: Boolean(status),
            [`crystal-input-inner-wrapper-disabled`]: disabled,
        }}>
            <input
                onFocus={() => {
                    setFocus(true);
                    onFocus?.();
                }}
                onBlur={() => {
                    setFocus(false);
                    onBlur?.();
                }}
                onInput={(e) => {
                    setValue(e.target.value);
                    onChange?.(e.target.value, e);
                }}
                classList={{
                    ['crystal-input']: true,
                    [`crystal-input-size-${size}`]: true,
                    [`crystal-input-${status}`]: Boolean(status),
                    [`crystal-input-disabled`]: disabled,
                }}
                placeholder={placeholder}
                value={value()}
                disabled={disabled}
            />
        </span>
    )
}

export default Input;