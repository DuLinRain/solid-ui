const ButtonSizes = ['mini', 'small', 'default', 'large'] as const;
const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
// 按钮形状
const ButtonShapes = ['circle', 'round', 'square'] as const;
// 按钮类型
const ButtonTypes = ['default', 'primary', 'secondary', 'dashed', 'outline', 'text'] as const;
// 按钮状态
const ButtonStatuses = ['warning', 'danger', 'success', 'default'];
export {
    ButtonSizes,
    ButtonHTMLTypes,
    ButtonShapes,
    ButtonTypes,
    ButtonStatuses
}