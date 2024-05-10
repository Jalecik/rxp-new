import React from 'react';
import {ISelectItemProps} from './select-item';
// import {Delete, RemoveIcon} from '../../../assets/images/icons/delete';

function SelectItemComponent({label, onDelete,}: ISelectItemProps) {
    return (
        <div className={`px-10`}>
            <div className={'d-flex justify-center align-center '}>
                <span className={'d-block mr-10 mt-4'}>{label}</span>
                {/* <RemoveIcon className={icon} onClick={() => onDelete()}/> */}
            </div>
        </div>
    );
}

export default SelectItemComponent;
