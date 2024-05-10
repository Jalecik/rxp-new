import React, { useCallback } from 'react';
import { ITitleTypes } from './title';
import css from './title.module.scss';

function Title({ text, className = '', size = 'small' }: ITitleTypes) {
    const titleSize = useCallback(() => {
        switch (size) {
          
          case 'extraLarge':
            return { fontSize: '32px', lineHeight: '41px' };
          case 'large':
            return { fontSize: '28px', lineHeight: '41px' };
          case 'small':
            return { fontSize: '24px', lineHeight: '32px' };
          case 'extraSmall':
            return { fontSize: '20px', lineHeight: '21px' };
          default:
            return { fontSize: '24px', lineHeight: '32px' }; // Default to 'small' size
        }
      }, [size]);

      
    return (
        <span
        style={titleSize()}
            className={`${css.title} ${className}`}>
            {text}</span>
    );
}

export default Title;
