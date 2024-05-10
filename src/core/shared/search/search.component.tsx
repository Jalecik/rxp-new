import React from 'react';
import { IInputType } from './search';
import { Input } from 'antd';
import { Form } from 'antd';
import css from './search.module.scss';
import { SearchInputIcon } from 'assets/images/common';

const { Search } = Input;

const SearchComponent = ({ placeholder,className, onSearch, name }: IInputType) => {
  return (
    <Form.Item name={name}>
      <Search     
        className={`${css.search} ${className}`} 
        placeholder={placeholder} 
        enterButton={<SearchInputIcon />}
        onSearch={onSearch} />
    </Form.Item>
  );
};

export default SearchComponent;
