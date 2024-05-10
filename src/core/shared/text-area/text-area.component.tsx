import React, { useState } from 'react';
import { ITextAreaType } from './text-area';
import { Input } from 'antd';
import { Form } from 'antd';

import css from './text-area.module.scss';
import FloatLabel from '../float-label/float-label.component';

const TextArea = ({ placeholder, label, maxLength, name, rows }: ITextAreaType) => {
  const { TextArea } = Input;
  const [value, setValue] = useState('');

  return (
    <FloatLabel label={label} value={value}>
      <Form.Item name={name}>
        <TextArea onChange={(e) => setValue(e.target.value)} className={css.input} rows={rows} placeholder={placeholder} maxLength={maxLength} />
      </Form.Item>
    </FloatLabel>
  );
};

export default TextArea;
