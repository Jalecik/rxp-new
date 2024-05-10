import React from 'react';
import InputComponent from 'src/core/shared/input/input.component';
import TextAreaComponent from 'src/core/shared/text-area/text-area.component';
import SelectComponent from '../shared/select/select.component';
import PhoneNumberInput from '../shared/input-phone/input-phone.component';
import { Form } from 'antd';

export const renderInput = (type: string, restProps: any) => {
  switch (type) {
    case 'text':
      return <InputComponent name={restProps.name} label={restProps.label} placeholder={restProps.placeholder} {...restProps} />;
    case 'phone':
      return <PhoneNumberInput
           label={restProps.label}
           name='phone'
           
          mask="(___)-___ -__-__"/>
    case 'email':
      return <InputComponent name={restProps.name}  label={restProps.label} rows={restProps} placeholder={restProps.placeholder} {...restProps} />;
    case 'textArea':
      return <TextAreaComponent name={restProps.name}  label={restProps.label} rows={restProps} placeholder={restProps.placeholder} {...restProps} />;
    case 'select':
      return (
        <SelectComponent name={restProps.name} placeholder={restProps.placeholder} {...restProps} />
      );
    default:
      return <InputComponent name={restProps.name} type='text' {...restProps} />;
  }
};