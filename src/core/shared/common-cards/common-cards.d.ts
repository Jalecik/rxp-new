export interface ICommonCards {
    icon?: string | StaticImport,
    title: string,
    badgeTitle?: string,
    isHasBadge?: boolean,
    color?: string,
    children?: React.ReactNode,
    style?: React.CSSProperties
}