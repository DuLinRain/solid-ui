import { ParentComponent } from 'solid-js';
import cx from 'classnames';
import Input from '../input';
import type { InputGroupProps } from './type';
import "../global.less";
import './style/index.less';

const InputGroup: ParentComponent<InputGroupProps> =  (props) => {
    const {
        className,
        prefix,
        suffix,
        ...rest
    } = props;

    return (
        <div class={cx(className)}>
            <span class="arco-input-group">
                <Input {...rest}/>
            </span>
        </div>
    )
}

export default InputGroup;