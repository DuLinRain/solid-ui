import { ButtonSizes, ButtonHTMLTypes, ButtonShapes, ButtonTypes, ButtonStatuses } from './constant';

type ButtonType = typeof ButtonTypes[number];
type ButtonShape = typeof ButtonShapes[number];
type ButtonHTMLType = typeof ButtonHTMLTypes[number];
// 按钮大小
type ButtionSizeType = typeof ButtonSizes[number];


type ButtonStatus = typeof ButtonStatuses[number];

interface BaseButtonProps {
    type?: ButtonType;
    shape?: ButtonShape;
    size?: ButtionSizeType;
    status?: ButtonStatus;
    disabled?: boolean;
    loading?: boolean | { delay?: number };
    className?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    onClick?: (e: MouseEvent) => void;
    [key: `data-${string}`]: string;
    classNames?: { icon: string };
}

type ButtonProps = BaseButtonProps;

export type {
    ButtonProps,
    BaseButtonProps,
    ButtonType,
    ButtonHTMLType,
    ButtionSizeType,
};