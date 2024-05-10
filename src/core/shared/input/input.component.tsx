import React, { useState } from 'react';
import { Input } from 'antd';
import { Form } from 'antd';

import css from './input.module.scss';
import { IInputType } from './input';
import FloatLabel from '../float-label/float-label.component';

const InputComponent = ({ placeholder, label, name,form, type, ...rest }: IInputType) => {
  const [value, setValue] = useState('');
  return (
    <FloatLabel label={label} value={value}>
    <Form.Item 
      name={name}>
      <Input
        type={type}
        className={css.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        placeholder={placeholder} />
    </Form.Item>
    </FloatLabel>
  );
};

export default InputComponent;
