import { ParentComponent, Show } from 'solid-js';
import cx from 'classnames';
import Input from '../input';
import type { InputGroupProps } from './type';
import "../global.less";
import './style/index.less';

const InputGroup: ParentComponent<InputGroupProps> =  (props) => {
    const {
        className,
        addBefore,
        addAfter,
        size = "default",
        ...rest
    } = props;
    // const c = children(() => addBefore);

    return (
        <div class={cx(className)} classList={{
            ["crystal-input-group-wrapper"]: true,
            [`crystal-input-group-wrapper-${size}`]: true,
        }}>
            <span class="crystal-input-group">
                <Show when={addBefore}><span class="crystal-input-group-addbefore">{addBefore}</span></Show>
                <Input {...rest}/>
                <Show when={addAfter}><span class="crystal-input-group-addafter">{addAfter}</span></Show>
            </span>
        </div>
    )
}

export default InputGroup;