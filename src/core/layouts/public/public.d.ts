import { ReactNode } from "react";

export interface IInfoCard {
    title: string;
    text: string;
    linkName: string;
    link: string;
    imgUrl: string | StaticImport;
    style?: React.CSSProperties;
}