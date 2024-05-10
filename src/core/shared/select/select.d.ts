export interface ISelectTypes {
    classNames?: string | null,
    options: ISelectItem[] | undefined,
    defaultValue?: string|number|undefined,
    onChange?: (value: string | number) => void,
    placeholder?: string,
    disabled?: boolean,
    label?: string,
    name?: any,
}

export interface ISelectItem {
    value: string | number,
    label: string,
    disabled?: boolean,
}

export interface ISelectHeadItem {
    label: string | number,
    options: ISelectItem[],
}
