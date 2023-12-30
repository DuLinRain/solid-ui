import { ParentComponent } from 'solid-js';
import cx from 'classnames';
import type { ButtonProps } from './type';
import "../global.less";
import './style/index.less';

const Button: ParentComponent<ButtonProps> =  (props) => {
    const {
        className,
        size = 'default',
        type = 'default',
        shape = 'square',
        disabled = false,
        status = 'default',
    } = props;

    return (
        <button class={cx(className, 'view')} classList={{
            ['crystal-btn']: true,
            [`crystal-btn-size-${size}`]: true,
            [`crystal-btn-status-${status}`]: true,
            [`crystal-btn-shape-${shape}`]: true,
            [`crystal-btn-${type === 'default' ? 'secondary' : type}`]: true,
            [`crystal-btn-disabled`]: disabled,
        }}>{props.children}</button>
    )
}

export default Button;