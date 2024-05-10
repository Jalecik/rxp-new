import React, { useState } from 'react';
import { InputMask } from '@react-input/mask';
import css from './input-phone.module.scss';
import FloatLabel from '../float-label/float-label.component';
import { Form } from 'antd';

interface CustomMaskedInputProps {
  mask: string;
  [key: string]: any;
  label?: string;
}

const PhoneNumberInput: React.FC<CustomMaskedInputProps> = ({ mask, placeholder,name, label, ...rest }) => {
  const [value, setValue] = useState('');
  return (
    <FloatLabel label={label} value={value}>
      <Form.Item
        name={name}>
        <InputMask
          mask={mask}
          {...rest}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={css.input}
          replacement={{ _: /\d/ }}
        />
      </Form.Item>
    </FloatLabel>
  );
};

export default PhoneNumberInput;
