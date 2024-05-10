import React from 'react';
import { IButtonTypes } from './button';
import { useCallback } from 'react';
import Button from 'antd/lib/button';
import css from './button.module.scss'

const ButtonComponent = ({ classNames = '', children, click, color, htmlType = 'button', width }: IButtonTypes) => {
    const addColor = useCallback(() => {
        switch (color) {
            case 'primary':
                return css.primary;
            case 'dark':
                return css.dark;
            case 'transparent':
                return css.transparent;
            case 'gray':
                return css.grey;
            case 'blue':
                return css.blue;
            default:
                return css.transparent;
        }
    }, [color]);

    return (
        <Button
            style={width ? { width: `${width}` } : {}}
            htmlType={htmlType ? htmlType : 'button'} className={`${addColor()} ${classNames}`}
            onClick={() => click ? click() : undefined}>{children}</Button>
    );
};

export default ButtonComponent;
