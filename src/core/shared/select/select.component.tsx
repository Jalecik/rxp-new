import React from 'react'
import { ISelectTypes } from './select';
import { Form, Select } from 'antd';
import { useState } from 'react';
import { ArrowDown } from 'assets/images/common';

import css from './select.module.scss';
import FloatLabel from '../float-label/float-label.component';

const { Option } = Select;

function SelectComponent({ options, label, name, classNames, onChange, placeholder = '', defaultValue, disabled }: ISelectTypes) {
    const [value, setValue] = useState('');

    return (

        <div className={`${css['custom-select']} ${classNames} ${css['float-label']}`}>
            <FloatLabel label={label} value={value}>
                <Form.Item name={name}>
                    <Select
                        disabled={disabled}
                        value={options?.find(item => item.value === defaultValue)?.label}
                        defaultValue={options?.find(item => item.value === defaultValue)?.label}
                        suffixIcon={<ArrowDown />}
                        style={{ width: '100%' }}
                        placeholder={placeholder}
                        onChange={(data: string) => {
                            setValue(data);
                            if (onChange) onChange(parseInt(data) ? parseInt(data) : data);
                        }}
                        >
                        {options?.map((item) => (
                            <Option key={item.value}><span>{item.label}</span></Option>
                        ))}
                    </Select>
                </Form.Item>
            </FloatLabel>
        </div>
    );
}

export default SelectComponent;
