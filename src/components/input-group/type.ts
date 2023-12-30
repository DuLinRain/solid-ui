import { Component } from 'solid-js';
import { InputProps } from '../input/type';

interface InputGroupProps extends InputProps {
    prefix?: Component;
    suffix?: Component;
}

export type { InputGroupProps };